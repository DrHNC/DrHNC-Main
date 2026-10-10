import type { Metadata } from "next";
import Link from "next/link";
import PolicyChrome from "@/components/PolicyChrome";
import {
    PRODUCT_EMAIL,
    PRODUCT_ORDER_LIMIT,
    PRODUCT_PHONE,
} from "@/lib/contact";

export const metadata: Metadata = {
    title: "Refund, Return & Cancellation Policy",
    description:
        "Zaade Sehat product sales are final, with no refunds or returns. Also covers order cancellation, cash on delivery, and appointment cancellations with Dr. Hasan Nasir Cheema.",
    alternates: { canonical: "/refund-cancellation-policy" },
};

export default function RefundCancellationPolicyPage() {
    return (
        <>
            <PolicyChrome label="Refund, Return &amp; Cancellation Policy" />
            <section className="px-7 pt-14 md:pt-18 pb-8">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                        Legal
                    </span>
                    <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                        Refund, Return &amp; Cancellation Policy
                    </h1>
                    <p className="mt-2.5 text-[0.92rem] text-ink-soft">
                        Last updated: 10 October 2026
                    </p>
                </div>
            </section>

            <section className="px-7 pb-14 md:pb-18">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        This policy covers product orders from Zaade Sehat by
                        Dr. Hasan Nasir Cheema and consultation bookings with
                        Dr. Hasan Nasir Cheema. Different rules apply to each.
                        Nothing in this policy limits a right or remedy that
                        cannot be excluded under applicable law.
                    </p>

                    <div className="rounded-xl border border-sage/30 bg-sage/10 px-6 py-5 mt-8 mb-10">
                        <p className="font-semibold text-[1.05rem] text-ink">
                            All product sales are final. We do not offer refunds
                            or returns.
                        </p>
                        <p className="mt-1 text-ink-soft text-[0.95rem]">
                            This applies to every product and every payment
                            method, including online payment and cash on delivery.
                            Report any delivery problem within 24 hours of
                            delivery.
                        </p>
                    </div>

                    <h2 className="text-[1.3rem] font-display font-semibold text-ink">
                        No refunds or returns
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Zaade Sehat products are food and wellness consumables.
                        Once an order is placed, we do not refund, accept
                        returns, or exchange products under any circumstances,
                        including change of mind, personal preference,
                        unsuitability, an opened or used product, or results
                        that differ from your expectations.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Quality checks before dispatch
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Every product is checked before it is packed. Products
                        that are expired, spoiled, damaged, or fail our checks
                        are discarded and are never shipped. Natural products
                        can vary in colour, smell, taste, and texture between
                        batches; this is not a defect. Store each product as
                        directed on its packaging.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Food products
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Claims are not accepted on food products. Check the
                        outer packaging when your parcel arrives, and do not
                        consume a product whose seal is broken or that appears
                        tampered with.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Reporting a delivery problem
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        If your parcel arrives damaged, opened, or with the
                        wrong contents, report it within 24 hours of delivery.
                        Reports made after 24 hours, or without the details
                        below, are not reviewed.
                    </p>
                    <ol className="mt-3 space-y-2 pl-5 list-decimal text-ink-soft">
                        <li>
                            Email{" "}
                            <a
                                href={`mailto:${PRODUCT_EMAIL}`}
                                className="text-sage-deep hover:underline"
                            >
                                {PRODUCT_EMAIL}
                            </a>{" "}
                            or contact {PRODUCT_PHONE.display} on WhatsApp or
                            by phone.
                        </li>
                        <li>
                            Give your order number and a short description of
                            the problem.
                        </li>
                        <li>
                            Attach clear photographs or an unboxing video showing
                            the outer packaging, the courier label, and the product.
                        </li>
                    </ol>
                    <p className="mt-3 text-ink-soft">
                        We will review the report and tell you the outcome. A
                        report does not entitle you to a refund or a return.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Out-of-stock items
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Stock shown on the shop is kept up to date, but an item
                        can sell out between your order and dispatch. If that
                        happens, we will contact you to offer an available
                        alternative product or to dispatch the item when it is
                        back in stock. For a cash-on-delivery order, we may
                        instead remove the unavailable item before dispatch.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Cancelling an order
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            A cash-on-delivery order can be cancelled before it
                            is dispatched. Contact us as soon as possible.
                        </li>
                        <li>
                            A prepaid online order cannot be cancelled for a
                            refund. Contact us before dispatch if you need to
                            correct the delivery details.
                        </li>
                        <li>
                            Once an order has been handed to the courier, it cannot be
                            cancelled or changed.
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Cash on delivery
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We may call or message you on WhatsApp to confirm a
                        cash-on-delivery order before dispatch. An order we
                        cannot confirm may be held or cancelled. If a
                        cash-on-delivery parcel is refused without a valid
                        reason, we may decline future cash-on-delivery orders
                        from that name, phone number, or address, and require
                        advance payment instead.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Order limits and bulk purchases
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        You can order up to {PRODUCT_ORDER_LIMIT} units of each
                        product in a single order. For bulk or reseller orders,
                        email{" "}
                        <a
                            href={`mailto:${PRODUCT_EMAIL}`}
                            className="text-sage-deep hover:underline"
                        >
                            {PRODUCT_EMAIL}
                        </a>
                        . We may cancel orders that exceed this limit or that
                        appear to be for resale.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Misuse of the shop
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We may refuse, hold, or cancel an order, and restrict
                        future orders from a name, phone number, address, or
                        payment method, where we reasonably suspect fraud, fake
                        or duplicate orders, repeated parcel refusals, resale,
                        abusive conduct, or a payment dispute opened without
                        first contacting us. We keep order, delivery, and
                        message records and may share them with our courier, our payment provider, or the authorities when needed.
                    </p>

                    <div className="rounded-xl border border-ink/20 bg-ink text-paper px-6 py-5 mt-14 mb-10">
                        <p className="font-semibold text-[1.05rem]">
                            Confirmed appointments are final.
                        </p>
                        <p className="mt-1 text-paper/80 text-[0.95rem]">
                            Once an appointment is confirmed and payment is
                            received, patient-initiated cancellation,
                            rescheduling, and refunds are not available.
                        </p>
                    </div>

                    <h2 className="text-[1.3rem] font-display font-semibold text-ink">
                        Appointment cancellations and refunds
                    </h2>
                    <ul className="mt-3 space-y-2 pl-5 list-disc text-ink-soft">
                        <li>
                            Advance payments are non-refundable once an
                            appointment is confirmed, including in cases of
                            illness, a scheduling conflict, personal emergency,
                            late arrival, or non-attendance.
                        </li>
                        <li>
                            A confirmed appointment cannot be moved,
                            transferred, or rescheduled by the patient.
                        </li>
                        <li>
                            If Dr. Hasan Nasir Cheema cancels a confirmed
                            appointment, the advance payment will be refunded in
                            full.
                        </li>
                    </ul>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Questions
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Please contact us before ordering if you need help
                        understanding product suitability, delivery, or this
                        policy. Product information does not replace advice from
                        a qualified healthcare professional; see the{" "}
                        <Link
                            href="/health-product-disclaimer"
                            className="text-sage-deep hover:underline"
                        >
                            Health Product Disclaimer
                        </Link>
                        .
                    </p>

                    <div className="mt-12 pt-8 border-t border-line-soft">
                        <Link
                            href="/"
                            className="text-sage-deep text-sm hover:underline"
                        >
                            &larr; Back to home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
