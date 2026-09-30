import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { tajawal } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { CallFloat } from "@/components/shared/CallFloat";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "شركة أبشر لنقل الأثاث | نقل عفش بالرياض وجدة والدمام",
    template: "%s | شركة أبشر لنقل الأثاث",
  },
  description:
    "شركة أبشر لنقل الأثاث - أفضل شركة نقل عفش في السعودية منذ 2014. نقل وفك وتركيب وتغليف في الرياض وجدة والدمام. معاينة مجانية وخصم 15%. اتصل 0536796607",
  keywords: [
    "نقل أثاث",
    "نقل عفش",
    "شركة نقل أثاث بالرياض",
    "نقل عفش جدة",
    "دينا نقل عفش",
    "نقل أثاث السعودية",
    "شركة أبشر",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "شركة أبشر لنقل الأثاث | نقل عفش بالرياض وجدة والدمام",
    description:
      "أفضل شركة نقل أثاث في السعودية منذ 2014. معاينة مجانية وخصم 15%.",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة أبشر لنقل الأثاث",
    description: "أفضل شركة نقل أثاث في السعودية. معاينة مجانية وخصم 15%.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: ["أبشر لنقل الأثاث", "Abshir Moving", "نقل عفش أبشر"],
      inLanguage: "ar-SA",
    },
    {
      "@type": "MovingCompany",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.nameEn,
      url: siteConfig.url,
      telephone: siteConfig.phoneInternational,
      email: siteConfig.email,
      foundingDate: "2014",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.countryCode,
      },
      areaServed: siteConfig.cities.map((c) => ({ "@type": "City", name: c })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "2347",
        bestRating: "5",
      },
      sameAs: Object.values(siteConfig.social),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen bg-background font-sans antialiased flex flex-col"
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="GTM"
          />
        </noscript>

        <AnnouncementBar />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CallFloat />

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: { direction: "rtl", fontFamily: "var(--font-sans)" },
          }}
        />

        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>
      </body>
    </html>
  );
}