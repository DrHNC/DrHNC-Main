// Public contact numbers. All three lines are on WhatsApp, so each one carries
// a chat link as well as a call link.
//
// - Online consultation: the main number for visitors, so the WhatsApp buttons
//   across the site point to it.
// - Clinic: for people planning an in-person visit.
// - Products: for questions about Zaade Sehat products and product orders.

export const ONLINE_CONSULTATION_PHONE = {
    display: "+92 317 111 4111",
    tel: "tel:+923171114111",
    whatsapp: "https://wa.me/923171114111",
};

export const CLINIC_PHONE = {
    display: "+92 324 720 0066",
    tel: "tel:+923247200066",
    whatsapp: "https://wa.me/923247200066",
};

export const PRODUCT_PHONE = {
    display: "+92 347 933 3299",
    tel: "tel:+923479333299",
    whatsapp: "https://wa.me/923479333299",
};

export const WHATSAPP_URL = ONLINE_CONSULTATION_PHONE.whatsapp;

// Email for every Zaade Sehat product query, including bulk and reseller
// orders. General and consultation queries stay on drhasannasir12@gmail.com.
export const PRODUCT_EMAIL = "zaadesehat@gmail.com";

// Standard per-order limit for each Zaade Sehat product. Keep in step with the
// limit enforced at checkout on shop.drhasannasir.com.
export const PRODUCT_ORDER_LIMIT = 5;
