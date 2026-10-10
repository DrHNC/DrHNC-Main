// Reads Zaade Sehat products from the shop's public WooCommerce Store API, so
// the home page carousel always matches what the shop is actually selling.

import { SHOP_URL } from "@/lib/site";

export type ShopProduct = {
    id: number;
    name: string;
    urduName?: string;
    tagline?: string;
    price: string;
    image: string;
    imageAlt: string;
    url: string;
    signature: boolean;
};

type StoreApiProduct = {
    id: number;
    name: string;
    permalink: string;
    is_in_stock: boolean;
    is_purchasable: boolean;
    prices: {
        price: string;
        currency_minor_unit: number;
        price_range: { min_amount: string; max_amount: string } | null;
    };
    images: { src: string; alt: string }[];
};

// Products that are not Zaade Sehat goods, such as the old booking fee.
const EXCLUDE = /consultation|booking|appointment/i;
const SIGNATURE = /signature/i;
// An Urdu name in brackets at the end of the English one, e.g. "Moringa (مورنگا)".
const URDU_SUFFIX = /\s*\(([^()]*[؀-ۿ][^()]*)\)\s*$/;

// WordPress stores some characters as HTML entities, such as "&#038;" for "&".
const NAMED_ENTITIES: Record<string, string> = {
    amp: "&",
    quot: '"',
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
};

function decodeEntities(text: string): string {
    return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
        if (code[0] === "#") {
            const n =
                code[1].toLowerCase() === "x"
                    ? parseInt(code.slice(2), 16)
                    : parseInt(code.slice(1), 10);
            return Number.isNaN(n) ? match : String.fromCodePoint(n);
        }
        return NAMED_ENTITIES[code.toLowerCase()] ?? match;
    });
}

function formatPrice(minor: string, unit: number): string {
    const value = Number(minor) / 10 ** unit;
    return `Rs ${value.toLocaleString("en-PK", { maximumFractionDigits: 0 })}`;
}

function toProduct(p: StoreApiProduct): ShopProduct {
    const [main, tagline] = decodeEntities(p.name)
        .split(" | ")
        .map((s) => s.trim());
    const urdu = main.match(URDU_SUFFIX);
    const name = urdu ? main.replace(URDU_SUFFIX, "").trim() : main;

    const unit = p.prices.currency_minor_unit;
    const range = p.prices.price_range;
    const price =
        range && range.min_amount !== range.max_amount
            ? `From ${formatPrice(range.min_amount, unit)}`
            : formatPrice(p.prices.price, unit);

    return {
        id: p.id,
        name,
        urduName: urdu?.[1].trim(),
        tagline,
        price,
        image: p.images[0].src,
        imageAlt: decodeEntities(p.images[0].alt || "") || name,
        url: p.permalink,
        signature: SIGNATURE.test(name),
    };
}

/**
 * In-stock Zaade Sehat products with images, signature products first.
 * Refreshed hourly. Returns an empty list if the shop cannot be reached, so
 * the home page still renders.
 */
export async function getShopProducts(): Promise<ShopProduct[]> {
    try {
        const res = await fetch(
            `${SHOP_URL}wp-json/wc/store/v1/products?per_page=50`,
            { next: { revalidate: 3600 } },
        );
        if (!res.ok) return [];
        const data = (await res.json()) as StoreApiProduct[];

        return data
            .filter(
                (p) =>
                    p.is_in_stock &&
                    p.is_purchasable &&
                    p.images?.length > 0 &&
                    !EXCLUDE.test(p.name),
            )
            .map(toProduct)
            .sort((a, b) => Number(b.signature) - Number(a.signature));
    } catch {
        return [];
    }
}
