import type { Metadata, Viewport } from "next";
import { Barlow, Oswald } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: site.businessName,
    description: site.metaDescription,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#101318",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.businessName,
    telephone: site.phoneTel.replace("tel:", ""),
    email: site.email,
    areaServed: site.serviceArea,
    description: site.metaDescription,
  };

  return (
    <html
      lang="en"
      className={`${barlow.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
