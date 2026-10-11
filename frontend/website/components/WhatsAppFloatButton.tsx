"use client";

import { useEffect, useState } from "react";

type WhatsAppFloatButtonProps = {
    href: string;
    targetId: string;
};

export default function WhatsAppFloatButton({
    href,
    targetId,
}: WhatsAppFloatButtonProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const target = document.getElementById(targetId);

        if (!target) {
            return;
        }

        // Show the button once the target section reaches the middle of the
        // screen, and keep it shown for everything below. The negative bottom
        // margin holds it back while the target is only peeking in at the
        // bottom of a tall viewport.
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(
                    entry.isIntersecting || entry.boundingClientRect.top < 0,
                );
            },
            { rootMargin: "0px 0px -50% 0px" },
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, [targetId]);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Dr. Hasan Nasir Cheema on WhatsApp"
            // Matches the shop's Click to Chat button (style 8): a 36px-tall
            // rectangle with 4px corners that pops in from the bottom-right
            // corner and turns dark green with white text on hover.
            className={`fixed bottom-[15px] right-[15px] z-[60] inline-flex h-9 origin-bottom-right items-center gap-[15px] rounded-[4px] bg-whatsapp px-8 text-[16px] font-normal tracking-[0.5px] text-forest-deep no-underline shadow-[0_2px_2px_0_rgba(0,0,0,0.14),0_1px_5px_0_rgba(0,0,0,0.12),0_3px_1px_-2px_rgba(0,0,0,0.2)] hover:bg-forest-deep hover:text-white hover:no-underline hover:shadow-[0_3px_3px_0_rgba(7,6,6,0.14),0_1px_7px_0_rgba(0,0,0,0.12),0_3px_1px_-1px_rgba(0,0,0,0.2)] active:brightness-95 ${
                isVisible
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-0 opacity-0"
            }`}
            style={{
                transition:
                    "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.2s ease-out, color 0.2s ease-out, box-shadow 0.2s ease-out",
            }}
        >
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
            >
                <path d="M12.04 2a9.77 9.77 0 0 0-8.36 14.83L2.24 22l5.3-1.39A9.77 9.77 0 1 0 12.04 2Zm0 17.76a8.05 8.05 0 0 1-4.1-1.12l-.3-.18-3.15.83.84-3.07-.2-.32a8.05 8.05 0 1 1 6.91 3.86Zm4.42-5.71c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.17-1.39-1.31-1.63-.14-.24-.02-.37.1-.48.11-.11.24-.27.36-.41.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.41-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.65.58.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
            </svg>
            Chat Now
        </a>
    );
}
