import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/navbar/site-header";
import { Footer } from "@/components/footer/footer";
import { Providers } from "@/components/providers/Providers";
import { company, formatAddressInline } from "@/data/company";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "JOWAY COMMERCE LLC",
    "contemporary coastal living",
    "modern home",
    "lifestyle retail",
    "Cocoa Beach",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    images: [{ url: "/hero/hero-1.jpg", width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    images: ["/hero/hero-1.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: company.name,
      email: company.email,
      description: company.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${company.address.street}, ${company.address.street2}`,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.zip,
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      name: company.name,
      description: company.description,
      potentialAction: {
        "@type": "SearchAction",
        target: "/shop?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Store",
      name: company.name,
      description: company.description,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${company.address.street}, ${company.address.street2}`,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.zip,
        addressCountry: "US",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
        <span className="sr-only">{formatAddressInline()}</span>
      </body>
    </html>
  );
}
