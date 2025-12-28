import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Site-wide schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://chiefofstaff.quest/#website",
      name: "Chief of Staff Quest",
      alternateName: "Chief of Staff Recruitment Agency",
      url: "https://chiefofstaff.quest",
      description: "Chief of Staff recruitment agency connecting ambitious professionals with Chief of Staff roles at top companies. Find CoS jobs in tech, startups, enterprise, and consulting.",
      publisher: {
        "@id": "https://chiefofstaff.quest/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://chiefofstaff.quest/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://chiefofstaff.quest/#organization",
      name: "Chief of Staff Quest",
      alternateName: "Chief of Staff Recruitment Agency",
      url: "https://chiefofstaff.quest",
      logo: "https://chiefofstaff.quest/logo.svg",
      description: "Chief of Staff recruitment agency specialising in placing high-calibre professionals in strategic CoS roles at leading organisations across tech, finance, consulting, and startups.",
      areaServed: [
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United States" }
      ],
      knowsAbout: [
        "Chief of Staff Recruitment",
        "Chief of Staff Jobs",
        "CoS Careers",
        "Executive Support Roles",
        "Strategic Operations",
        "CEO Right Hand",
        "Executive Assistant Careers"
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Chief of Staff Recruitment Agency | Chief of Staff Jobs",
  description:
    "Chief of Staff recruitment agency connecting ambitious professionals with CoS roles at top companies. Find Chief of Staff jobs in tech, startups, enterprise, consulting, and more.",
  authors: [{ name: "Chief of Staff Quest" }],
  keywords: [
    "chief of staff recruitment agency",
    "chief of staff jobs",
    "chief of staff recruitment",
    "cos jobs",
    "chief of staff careers",
    "chief of staff roles",
    "ceo chief of staff",
    "chief of staff tech",
    "chief of staff startup",
    "executive operations",
    "strategic operations",
    "chief of staff salary",
    "chief of staff job board",
    "cos recruitment",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Chief of Staff Recruitment Agency | Chief of Staff Jobs",
    description:
      "Chief of Staff recruitment agency connecting ambitious professionals with strategic CoS roles at leading companies worldwide.",
    siteName: "Chief of Staff Quest",
    locale: "en_GB",
    images: [
      {
        url: "https://chiefofstaff.quest/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chief of Staff Recruitment Agency - Find CoS Jobs",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chief of Staff Recruitment Agency | CoS Jobs",
    description:
      "Chief of Staff recruitment agency connecting professionals with strategic CoS roles at top companies.",
    images: ["https://chiefofstaff.quest/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://chiefofstaff.quest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
