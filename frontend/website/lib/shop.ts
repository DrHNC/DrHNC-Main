// Reads Zaade Sehat products from the shop's public WooCommerce Store API, so
// the home page always matches what the shop is actually selling.

import { SHOP_URL } from "@/lib/site";

export type ShopProduct = {
    id: number;
    /** Short English name, e.g. "Moringa Powder". */
    name: string;
    image: string;
    imageAlt: string;
    url: string;
    signature: boolean;
    /** Plain-text short description from the shop. */
    description?: string;
    /** Pack sizes on offer, e.g. ["130 grams", "250 grams"]. */
    sizes: string[];
};

type StoreApiProduct = {
    id: number;
    name: string;
    permalink: string;
    is_in_stock: boolean;
    is_purchasable: boolean;
    images: { src: string; alt: string }[];
    short_description?: string;
    attributes?: { name: string; terms?: { name: string }[] }[];
};

/**
 * Short English display names, keyed by shop product ID. The shop's own names
 * are long ("Moringa Powder (مورنگا / سوہانجنا پاؤڈر) | Nutrient-Rich Miracle
 * Tree Superfood"). A product missing from this list falls back to the
 * English part of its shop name.
 */
const DISPLAY_NAMES: Record<number, string> = {
    1816: "Dr. Hasan's Signature Blend",
    1184: "Daily Seed Mix",
    1183: "Moringa Powder",
    1182: "Triphala Powder",
    1181: "Ashwagandha Powder",
    1100: "Psyllium Husk",
    1099: "Quinoa & Gram Flour",
};

// Products that are not Zaade Sehat goods, such as the old booking fee.
const EXCLUDE = /consultation|booking|appointment/i;
const SIGNATURE = /signature/i;

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

// The shop spells the brand several ways; show one spelling on this site.
const BRAND_VARIANTS = /\b(?:Zaad\s*e|Zadeh)\s+Sehat\b/gi;

function clean(text: string): string {
    return decodeEntities(text).replace(BRAND_VARIANTS, "Zaade Sehat").trim();
}

function plainText(html: string): string {
    return clean(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
}

/** English part of a shop name: before " | " and before any bracketed Urdu. */
function englishName(shopName: string): string {
    return clean(shopName)
        .split(" | ")[0]
        .replace(/\s*\([^()]*[؀-ۿ][^()]*\)\s*$/, "")
        .trim();
}

function toProduct(p: StoreApiProduct): ShopProduct {
    const name = DISPLAY_NAMES[p.id] ?? englishName(p.name);

    return {
        id: p.id,
        name,
        image: p.images[0].src,
        imageAlt: clean(p.images[0].alt || "") || name,
        url: p.permalink,
        signature: SIGNATURE.test(p.name),
        description: p.short_description
            ? plainText(p.short_description) || undefined
            : undefined,
        sizes:
            p.attributes
                ?.find((a) => /weight|size/i.test(a.name))
                ?.terms?.map((t) => clean(t.name)) ?? [],
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
