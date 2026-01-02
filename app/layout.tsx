import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Site-wide schema - truthful representation as job aggregator
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://chiefofstaff.quest/#website",
      name: "Chief of Staff Recruitment Agency Quest",
      alternateName: ["Chief of Staff Quest", "ChiefOfStaffQuest"],
      url: "https://chiefofstaff.quest",
      description: "Chief of Staff recruitment agency aggregating CoS job opportunities from top companies. Browse Chief of Staff jobs in London, UK and remote.",
      inLanguage: "en-GB",
      publisher: {
        "@id": "https://chiefofstaff.quest/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://chiefofstaff.quest/jobs?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://chiefofstaff.quest/#organization",
      name: "Chief of Staff Recruitment Agency Quest",
      alternateName: ["Chief of Staff Quest", "ChiefOfStaffQuest"],
      url: "https://chiefofstaff.quest",
      logo: "https://chiefofstaff.quest/icon.svg",
      description: "UK-based Chief of Staff recruitment agency aggregating CoS job opportunities from LinkedIn, company career pages, and job boards. Free job board for Chief of Staff professionals.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB"
      },
      areaServed: [
        { "@type": "Country", "name": "United Kingdom" }
      ],
      knowsAbout: [
        "Chief of Staff Recruitment",
        "Chief of Staff Jobs UK",
        "CoS Careers",
        "Executive Support Roles",
        "Strategic Operations"
      ],
      founder: {
        "@id": "https://chiefofstaff.quest/#dankeegan"
      }
    },
    {
      "@type": "Person",
      "@id": "https://chiefofstaff.quest/#dankeegan",
      name: "Dan Keegan",
      jobTitle: "Founder",
      description: "Former Head of Global Operations at Transmission Agency with 20+ years of strategic operations leadership experience. Founded Chief of Staff Recruitment Agency Quest to help professionals discover CoS opportunities.",
      image: {
        "@type": "ImageObject",
        url: "https://chiefofstaff.quest/dan-keegan.webp",
        width: 400,
        height: 400
      },
      worksFor: {
        "@id": "https://chiefofstaff.quest/#organization"
      },
      alumniOf: {
        "@type": "Organization",
        name: "Transmission Agency"
      },
      knowsAbout: [
        "Strategic Operations",
        "Executive Partnership",
        "Cross-Functional Leadership"
      ],
      sameAs: [
        "https://www.linkedin.com/in/dankeegan"
      ]
    }
  ],
};

export const metadata: Metadata = {
  title: "Chief of Staff Recruitment Agency 🎯 UK CoS Jobs",
  description:
    "Chief of Staff recruitment agency 🚀 Browse CoS jobs in London, UK & remote. Free job board aggregating opportunities from top companies. Find your next Chief of Staff role.",
  authors: [{ name: "Dan Keegan", url: "https://chiefofstaff.quest" }],
  keywords: [
    "chief of staff recruitment agency",
    "chief of staff jobs",
    "chief of staff recruitment",
    "cos jobs",
    "chief of staff careers",
    "chief of staff roles uk",
    "chief of staff london",
    "chief of staff job board",
    "cos recruitment uk",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Chief of Staff Recruitment Agency 🎯 UK CoS Jobs",
    description:
      "Chief of Staff recruitment agency 🚀 Browse CoS jobs in London, UK & remote. Free job board aggregating opportunities from top companies.",
    siteName: "Chief of Staff Recruitment Agency Quest",
    locale: "en_GB",
    images: [
      {
        url: "https://chiefofstaff.quest/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chief of Staff Recruitment Agency Quest - UK CoS Jobs",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chief of Staff Recruitment Agency 🎯 UK CoS Jobs",
    description:
      "Chief of Staff recruitment agency 🚀 Browse CoS jobs in London, UK & remote. Free job board for CoS professionals.",
    images: ["https://chiefofstaff.quest/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
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
    <html lang="en-GB">
      <head>
        {/* Preconnect to external image sources for faster loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://videos.pexels.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        {/* Hreflang for UK targeting */}
        <link rel="alternate" hrefLang="en-GB" href="https://chiefofstaff.quest" />
        <link rel="alternate" hrefLang="en" href="https://chiefofstaff.quest" />
        <link rel="alternate" hrefLang="x-default" href="https://chiefofstaff.quest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
