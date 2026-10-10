import Image from "next/image";
import type { ShopProduct } from "@/lib/shop";

/**
 * Feature panel for the signature product: a dark forest-green card so it
 * stands apart from the cream page and the regular product carousel.
 */
export default function SignatureSpotlight({
    product,
}: {
    product: ShopProduct;
}) {
    return (
        <div className="reveal-on-scroll mt-12 overflow-hidden rounded-xl bg-forest-deep text-paper shadow-lg ring-1 ring-honey/40">
            <div className="grid md:grid-cols-[minmax(0,420px)_1fr]">
                {/* Product photo on a cream tile, with a warm honey glow */}
                <div className="relative bg-paper p-6 md:p-8">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-10 rounded-full bg-honey/30 blur-3xl"
                    />
                    <div className="relative aspect-square">
                        <Image
                            src={product.image}
                            alt={product.imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 420px"
                            className="object-contain drop-shadow-xl"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center p-6 md:p-10">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-honey px-3.5 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            className="h-3.5 w-3.5 fill-current"
                        >
                            <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
                        </svg>
                        Dr. Hasan&apos;s Signature
                    </span>

                    <h3 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-tight text-paper">
                        {product.name}
                    </h3>

                    {product.description && (
                        <p className="mt-4 max-w-[58ch] text-[1rem] leading-relaxed text-paper/80">
                            {product.description}
                        </p>
                    )}

                    {product.sizes.length > 0 && (
                        <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                            {product.sizes.map((size) => (
                                <li
                                    key={size}
                                    className="rounded-full border border-paper/25 px-3 py-1 text-[0.85rem] text-paper/85"
                                >
                                    {size}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="mt-7">
                        <a
                            href={product.url}
                            className="group inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3.5 text-[0.95rem] font-semibold text-white no-underline shadow-sm transition-colors duration-200 hover:bg-paper hover:text-forest-deep hover:shadow-md hover:no-underline active:shadow-inner active:brightness-95"
                        >
                            Shop the Signature Blend
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 20 20"
                                className="h-4 w-4 fill-current transition-transform duration-200 group-hover:translate-x-1"
                            >
                                <path d="M10.6 4.3a1 1 0 0 0-1.4 1.4L12.1 9H4a1 1 0 1 0 0 2h8.1l-2.9 3.3a1 1 0 0 0 1.4 1.4l4.6-4.4a1 1 0 0 0 0-1.6l-4.6-4.4Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
