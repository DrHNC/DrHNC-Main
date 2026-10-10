"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ShopProduct } from "@/lib/shop";

/**
 * Horizontal product carousel. Native scroll with snap points, so it swipes on
 * phones and needs no library; the arrow buttons scroll one card at a time.
 */
export default function ProductCarousel({
    products,
    title = "Zaade Sehat products",
}: {
    products: ShopProduct[];
    title?: string;
}) {
    const track = useRef<HTMLUListElement>(null);

    const scroll = (direction: 1 | -1) => {
        const el = track.current;
        if (!el) return;
        const card = el.querySelector("li");
        const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth;
        el.scrollBy({ left: direction * step, behavior: "smooth" });
    };

    const arrow =
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper-raised text-ink shadow-sm transition-colors duration-200 hover:border-forest-deep hover:bg-forest-deep hover:text-white active:scale-95";

    return (
        <div className="mt-12">
            <div className="flex items-end justify-between gap-4">
                <h3 className="font-display text-[1.25rem] font-semibold text-ink">
                    {title}
                </h3>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => scroll(-1)}
                        aria-label="Previous products"
                        aria-controls="product-track"
                        className={arrow}
                    >
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                            <path d="M9.4 4.3a1 1 0 0 1 1.4 1.4L7.9 9H16a1 1 0 1 1 0 2H7.9l2.9 3.3a1 1 0 0 1-1.4 1.4L4.8 11.3a1 1 0 0 1 0-1.6l4.6-4.4Z" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={() => scroll(1)}
                        aria-label="Next products"
                        aria-controls="product-track"
                        className={arrow}
                    >
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                            <path d="M10.6 4.3a1 1 0 0 0-1.4 1.4L12.1 9H4a1 1 0 1 0 0 2h8.1l-2.9 3.3a1 1 0 0 0 1.4 1.4l4.6-4.4a1 1 0 0 0 0-1.6l-4.6-4.4Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <ul
                id="product-track"
                ref={track}
                aria-label="Zaade Sehat products"
                className="no-scrollbar mt-5 -mx-7 flex list-none snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-7 px-7 pb-4"
            >
                {products.map((p) => (
                    <li
                        key={p.id}
                        className="w-[78%] max-w-[300px] shrink-0 snap-start sm:w-[46%] md:w-[30%] lg:w-[23%]"
                    >
                        <a
                            href={p.url}
                            className="group card-hover flex h-full flex-col overflow-hidden rounded-xl border border-line-soft bg-paper-raised no-underline shadow-sm hover:border-forest-deep hover:shadow-md hover:no-underline"
                        >
                            <div className="relative aspect-square overflow-hidden skeleton">
                                <Image
                                    src={p.image}
                                    alt={p.imageAlt}
                                    fill
                                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 300px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                />
                                {p.signature && (
                                    <span className="absolute left-3 top-3 rounded-full bg-honey px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white shadow-sm">
                                        Signature
                                    </span>
                                )}
                            </div>
                            <div className="p-4">
                                <p className="font-body text-[1rem] font-semibold leading-snug text-ink">
                                    {p.name}
                                </p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
