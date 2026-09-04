import type { Metadata, Viewport } from "next";
import { Barlow, Oswald } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { getSiteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import { resolveTheme } from "@/lib/theme";
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

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: site.metaTitle,
      template: `%s | ${site.businessName}`,
    },
    description: site.metaDescription,
    applicationName: site.businessName,
    keywords: [
      site.businessName,
      site.tagline,
      site.serviceArea,
      ...site.services.map((service) => service.title),
    ],
    authors: [{ name: site.businessName, url: siteUrl }],
    creator: site.businessName,
    publisher: site.businessName,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "/",
      siteName: site.businessName,
      title: site.metaTitle,
      description: site.metaDescription,
      images: [
        {
          url: site.ogImage,
          width: 1920,
          height: 1080,
          alt: site.businessName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.metaTitle,
      description: site.metaDescription,
      images: [site.ogImage],
    },
    icons: { icon: "/favicon.svg" },
  };
}

export const viewport: Viewport = {
  themeColor: resolveTheme(site.themeId).themeColor,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const theme = resolveTheme(site.themeId);
  const headerStyle = site.headerStyle || theme.headerStyle;

  return (
    <html
      lang="en"
      data-theme={site.themeId}
      data-header={headerStyle}
      className={`${barlow.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-cream">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
