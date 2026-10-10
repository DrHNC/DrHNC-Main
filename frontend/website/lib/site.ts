// Single source of truth for site-wide values used by metadata, the sitemap
// and the structured data.

import {
    CLINIC_PHONE,
    ONLINE_CONSULTATION_PHONE,
    PRODUCT_EMAIL,
    PRODUCT_PHONE,
} from "@/lib/contact";

export const SITE_URL = "https://drhasannasir.com";

export const SITE_NAME = "Dr. Hasan Nasir Cheema";

export const SHOP_URL = "https://shop.drhasannasir.com/";

export const CLINIC_ADDRESS = {
    street: "Al-Hamra Town, near Marhaba Mart II, East Canal Road",
    city: "Faisalabad",
    region: "Punjab",
    country: "PK",
};

// Coordinates of the clinic pin used by the map embed.
export const CLINIC_GEO = { lat: 31.4603588, lng: 73.1798694 };

// Google Maps link for directions to the clinic.
export const CLINIC_MAPS_URL = "https://maps.app.goo.gl/HeDapMasJC6S4mq48";

export const SOCIAL_PROFILES = [
    "https://www.facebook.com/profile.php?id=61582055819875",
    "https://www.youtube.com/@dr.hasannasir9200/",
];

export const BRAND_NAME = "Zaade Sehat";

export const BRAND_SLOGAN = "Food is the First Medicine";

export const BRAND_LOGO = "/images/zaade-sehat-logo.webp";

const PERSON = {
    "@type": "Person",
    "@id": `${SITE_URL}/#dr-hasan-nasir-cheema`,
    name: "Dr. Hasan Nasir Cheema",
    jobTitle: "Consultant Physician",
    hasCredential: [
        "MBBS (King Edward)",
        "BMJ England",
        "M.Phil Human Biochemistry",
    ],
};

/** The Zaade Sehat product brand. */
const brandJsonLd = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#zaade-sehat`,
    name: BRAND_NAME,
    alternateName: `${BRAND_NAME} by Dr. Hasan Nasir Cheema`,
    url: SHOP_URL,
    logo: `${SITE_URL}${BRAND_LOGO}`,
    slogan: BRAND_SLOGAN,
    founder: { "@id": PERSON["@id"] },
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: PRODUCT_PHONE.display,
        email: PRODUCT_EMAIL,
        description: "Zaade Sehat product queries",
        areaServed: "PK",
        availableLanguage: ["en", "ur"],
    },
    sameAs: SOCIAL_PROFILES,
};

/** The doctor's practice. */
const clinicJsonLd = {
    "@type": "Physician",
    "@id": `${SITE_URL}/#clinic`,
    name: "Dr. Hasan Nasir Cheema Clinic",
    url: SITE_URL,
    image: `${SITE_URL}/images/dr-hasan-nasir.jpg`,
    telephone: ONLINE_CONSULTATION_PHONE.display,
    email: "drhasannasir12@gmail.com",
    medicalSpecialty: ["PrimaryCare", "Nutrition", "Psychiatric"],
    address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC_ADDRESS.street,
        addressLocality: CLINIC_ADDRESS.city,
        addressRegion: CLINIC_ADDRESS.region,
        addressCountry: CLINIC_ADDRESS.country,
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: CLINIC_GEO.lat,
        longitude: CLINIC_GEO.lng,
    },
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "online consultation",
            telephone: ONLINE_CONSULTATION_PHONE.display,
            availableLanguage: ["en", "ur"],
        },
        {
            "@type": "ContactPoint",
            contactType: "clinic",
            telephone: CLINIC_PHONE.display,
            availableLanguage: ["en", "ur"],
        },
    ],
    founder: { "@id": PERSON["@id"] },
    sameAs: SOCIAL_PROFILES,
};

/** Structured data for search engines: the doctor, his practice, and his brand. */
export const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [PERSON, clinicJsonLd, brandJsonLd],
};
