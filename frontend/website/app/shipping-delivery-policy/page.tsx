import type { Metadata } from "next";
import Link from "next/link";
import PolicyChrome from "@/components/PolicyChrome";
import { PRODUCT_EMAIL, PRODUCT_PHONE } from "@/lib/contact";

export const metadata: Metadata = {
    title: "Shipping & Delivery Policy",
    description:
        "Delivery areas, charges, order handling, and delivery issue reporting for Zaade Sehat by Dr. Hasan Nasir Cheema.",
    alternates: { canonical: "/shipping-delivery-policy" },
};

export default function ShippingDeliveryPolicyPage() {
    return (
        <>
            <PolicyChrome label="Shipping &amp; Delivery Policy" />
            <section className="px-7 pt-14 md:pt-18 pb-8">
                <div className="mx-auto max-w-content">
                    <span className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-sage-deep mb-4 inline-block">
                        Shop policy
                    </span>
                    <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold">
                        Shipping &amp; Delivery Policy
                    </h1>
                    <p className="mt-2.5 text-[0.92rem] text-ink-soft">
                        Last updated: 10 October 2026
                    </p>
                </div>
            </section>

            <section className="px-7 pb-14 md:pb-18">
                <div className="mx-auto max-w-[720px]">
                    <p className="text-ink-soft">
                        This policy applies to physical products ordered from
                        Zaade Sehat by Dr. Hasan Nasir Cheema at
                        shop.drhasannasir.com. Consultations are not
                        product orders and are governed by the consultation
                        terms in our{" "}
                        <Link
                            href="/terms-of-service"
                            className="text-sage-deep hover:underline"
                        >
                            Terms &amp; Conditions
                        </Link>
                        .
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Delivery areas
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        We deliver across Pakistan, to addresses our courier serves. If checkout does not accept your
                        address, contact us before ordering.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Payment options
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        You can pay online at checkout, or choose cash on delivery and pay the courier in cash
                        when your parcel arrives. We may call or message you on
                        WhatsApp to confirm a cash-on-delivery order before it
                        is dispatched.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Delivery charges and estimates
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Delivery charges are shown at checkout. Delivery times
                        are estimates and are not guaranteed. Remote
                        areas, weekends, public holidays, weather, and
                        transport disruption can extend delivery. A late
                        delivery is not grounds for a refund or a return.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Order processing
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Prepaid orders are prepared once payment is confirmed.
                        Cash-on-delivery orders are prepared once the order is
                        confirmed. We may contact you to verify an order, phone
                        number, or delivery address, and dispatch may wait
                        until that is done. If an item sells out before
                        dispatch, we handle it as described in our{" "}
                        <Link
                            href="/refund-cancellation-policy"
                            className="text-sage-deep hover:underline"
                        >
                            Refund, Return &amp; Cancellation Policy
                        </Link>
                        .
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Tracking your parcel
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        When your order is dispatched, our courier sends tracking
                        details by SMS to the phone number you gave at
                        checkout. Make sure that number is correct and can
                        receive messages.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Address and contact details
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        You are responsible for giving a complete and accurate
                        recipient name, phone number, delivery address, city,
                        and any directions the courier needs. Contact us immediately if
                        a correction is needed. Details cannot be changed once
                        the parcel is with the courier.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Checking your parcel
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        Check the outer packaging as soon as your parcel
                        arrives. If it arrives damaged, opened, or with the
                        wrong contents, report it within 24 hours of delivery,
                        as described in our{" "}
                        <Link
                            href="/refund-cancellation-policy"
                            className="text-sage-deep hover:underline"
                        >
                            Refund, Return &amp; Cancellation Policy
                        </Link>
                        . Claims are not accepted on food products.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Delayed or missing parcels
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        If tracking shows a long delay, or marks your parcel
                        delivered when you have not received it, contact us
                        within 24 hours and we will raise it with the courier.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Failed delivery and returned parcels
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        If delivery fails because the address or phone number
                        was wrong, the recipient was unavailable, or the parcel
                        was refused, the courier returns it to us. We will re-dispatch
                        it once the re-delivery charge is paid. Prepaid orders
                        are not refunded. Refused cash-on-delivery parcels may
                        lead us to decline future cash-on-delivery orders.
                    </p>

                    <h2 className="mt-11 text-[1.3rem] font-display font-semibold text-ink">
                        Contact
                    </h2>
                    <p className="mt-3 text-ink-soft">
                        For delivery help, email{" "}
                        <a
                            href={`mailto:${PRODUCT_EMAIL}`}
                            className="text-sage-deep hover:underline"
                        >
                            {PRODUCT_EMAIL}
                        </a>{" "}
                        or call {PRODUCT_PHONE.display}. Include
                        your order number if one was provided in your order
                        confirmation.
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
