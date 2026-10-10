import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteTransition from "@/components/RouteTransition";
import { siteJsonLd, SITE_NAME, SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-fraunces",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
    display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["500", "600"],
    variable: "--font-ibm-plex-mono",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Dr. Hasan Nasir Cheema | Consultant Physician & Zaade Sehat",
        template: "%s | Dr. Hasan Nasir Cheema",
    },
    description:
        "Zaade Sehat by Dr. Hasan Nasir Cheema, consultant physician in Faisalabad: natural food and wellness products delivered across Pakistan, plus paid online and in-person consultations on WhatsApp.",
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        siteName: SITE_NAME,
        locale: "en_PK",
        url: SITE_URL,
        title: "Dr. Hasan Nasir Cheema | Consultant Physician & Zaade Sehat",
        description:
            "Food is the first medicine. Natural food and wellness products chosen by Dr. Hasan Nasir Cheema, consultant physician, delivered across Pakistan.",
        images: [
            {
                url: "/images/zaade-sehat-og.png",
                width: 1200,
                height: 630,
                alt: "Zaade Sehat by Dr. Hasan Nasir: Food is the First Medicine",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Dr. Hasan Nasir Cheema | Consultant Physician & Zaade Sehat",
        description:
            "Natural food and wellness products chosen by Dr. Hasan Nasir Cheema, consultant physician, delivered across Pakistan.",
        images: ["/images/zaade-sehat-og.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "health",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en-PK"
            className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}
        >
            <body className="flex min-h-screen flex-col">
                <script
                    type="application/ld+json"
                    // Structured data is static and contains no user input.
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(siteJsonLd),
                    }}
                />
                <Navbar />
                <main className="flex-1">
                    <RouteTransition>{children}</RouteTransition>
                </main>
                <Footer />
            </body>
        </html>
    );
}
