import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import SiteFrame from "@/components/SiteFrame";

// Poppins via next/font — self-hosted, zero layout shift, exposed as a CSS var.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Cormorant Garamond — the editorial display serif used across the landing.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "SPACERA | Interior Design Studio",
    template: "%s | SPACERA",
  },
  description: site.description,
  keywords: [
    "interior design",
    "small space design",
    "Japandi",
    "modern minimalist",
    "functional interior",
    "Jakarta interior designer",
    "SPACERA",
  ],
  authors: [{ name: "SPACERA" }],
  creator: "SPACERA",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.domain,
    siteName: "SPACERA",
    title: "SPACERA | Interior Design Studio",
    description: site.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "SPACERA — Japandi interior design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPACERA | Interior Design Studio",
    description: site.description,
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F6F3" },
    { media: "(prefers-color-scheme: dark)", color: "#171512" },
  ],
};

// Structured data (JSON-LD) — helps rich results for a local design business.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignBusiness",
  name: "SPACERA",
  description: site.description,
  url: site.domain,
  email: site.email,
  areaServed: "Indonesia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  sameAs: site.social.map((s) => s.url),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Set theme before paint to avoid a flash of the wrong mode. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('spacera-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
