/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    // Force HTTPS on every future visit, including subdomains.
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload",
                    },
                    // Stop the site being framed by another page (clickjacking).
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    // Stop the browser guessing a file's type from its content.
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    // Don't leak the full URL to third-party sites we link out to.
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                    // Disable browser features this site never uses.
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), microphone=(), geolocation=()",
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            // The shop is a separate WordPress site; send crawlers there with a
            // real Location header instead of a client-side redirect.
            {
                source: "/products",
                destination: "https://shop.drhasannasir.com/",
                permanent: false,
            },
            // Website booking is paused; consultations are arranged on
            // WhatsApp, so old /booking links land on that section.
            {
                source: "/booking",
                destination: "/#consultations",
                permanent: false,
            },
            // One canonical host: www redirects to the bare domain.
            {
                source: "/:path*",
                has: [{ type: "host", value: "www.drhasannasir.com" }],
                destination: "https://drhasannasir.com/:path*",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
