import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";
import {
  chiefOfStaffJobs,
  categoryLabels,
  categoryColors,
  JobCategory,
} from "../../lib/jobs-data";
import { JobsFilter } from "../components/JobsFilter";

export const metadata: Metadata = {
  title: "Chief of Staff Jobs 💼 Browse 40+ Live CoS Roles Worldwide",
  description:
    "🔍 Browse 40+ Chief of Staff jobs. Filter by location, salary & industry. Apply directly to top CoS roles in UK, US & remote.",
  keywords: [
    "chief of staff jobs",
    "chief of staff jobs uk",
    "cos jobs",
    "chief of staff roles",
    "chief of staff vacancies",
    "cos job board",
  ],
  openGraph: {
    title: "Chief of Staff Jobs 💼 Browse 40+ Live CoS Roles",
    description: "🔍 Browse 40+ Chief of Staff jobs. Apply directly to top CoS roles.",
  },
  alternates: {
    canonical: "https://chiefofstaff.quest/jobs",
  },
};

// Page-level structured data
const jobsPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://chiefofstaff.quest/jobs#webpage",
      url: "https://chiefofstaff.quest/jobs",
      name: "Chief of Staff Jobs | Browse CoS Roles",
      description: "Browse Chief of Staff jobs from our recruitment agency. Find CoS roles in tech, finance, healthcare, and startups.",
      isPartOf: { "@id": "https://chiefofstaff.quest/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://chiefofstaff.quest" },
          { "@type": "ListItem", position: 2, name: "Jobs", item: "https://chiefofstaff.quest/jobs" }
        ]
      }
    },
    {
      "@type": "ItemList",
      name: "Chief of Staff Job Listings",
      numberOfItems: chiefOfStaffJobs.length,
      itemListElement: chiefOfStaffJobs.slice(0, 10).map((job, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "JobPosting",
          title: job.title,
          hiringOrganization: { "@type": "Organization", name: job.company },
          jobLocation: { "@type": "Place", address: job.location },
        },
      })),
    },
  ],
};

export default function JobsPage() {
  const categories = Object.keys(categoryLabels) as JobCategory[];
  const ukJobs = chiefOfStaffJobs.filter(j => j.country === "United Kingdom").length;
  const usJobs = chiefOfStaffJobs.filter(j => j.country === "United States").length;
  const remoteJobs = chiefOfStaffJobs.filter(j => j.workMode === "Remote").length;

  // Prepare jobs data for client component
  const jobsData = chiefOfStaffJobs.map(job => ({
    id: job.id,
    title: job.title,
    company: job.company,
    location: job.location,
    country: job.country,
    salary: job.salary,
    type: job.type,
    category: job.category,
    skills: job.skills,
    description: job.description,
    heroImage: job.heroImage,
    workMode: job.workMode,
  }));

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsPageJsonLd) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2" title="Chief of Staff Recruitment Agency">
              <span className="text-2xl">🎯</span>
              <span className="font-bold text-xl">
                <span className="text-amber-400">Chief of Staff</span> Quest
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/jobs" className="text-amber-400 transition-colors">Browse Jobs</Link>
              <Link href="/#categories" className="text-gray-300 hover:text-amber-400 transition-colors">Categories</Link>
              <Link href="/#careers" className="text-gray-300 hover:text-amber-400 transition-colors">Career Paths</Link>
              <Link href="/#faq" className="text-gray-300 hover:text-amber-400 transition-colors">FAQ</Link>
              <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-lg transition-all">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-amber-900/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-amber-400">Chief of Staff</span> Jobs
            </h1>

            {/* TLDR Summary Box */}
            <div className="max-w-3xl mx-auto mb-6 p-4 bg-gray-900/50 border border-amber-500/30 rounded-xl">
              <p className="text-lg text-gray-300">
                <strong className="text-amber-400">TL;DR:</strong> Browse {chiefOfStaffJobs.length} Chief of Staff jobs. {ukJobs} UK positions, {usJobs} US positions, {remoteJobs} remote.
              </p>
            </div>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              <Link href="/" className="text-amber-400 hover:underline">Chief of Staff recruitment agency</Link> aggregating CoS roles from top companies.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs Section with Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-center py-12 text-gray-400">Loading jobs...</div>}>
            <JobsFilter
              jobs={jobsData}
              categories={categories}
              categoryLabels={categoryLabels}
              categoryColors={categoryColors}
            />
          </Suspense>
        </div>
      </section>

      {/* Transparency Notice */}
      <section className="py-12 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            <strong className="text-gray-300">Transparency:</strong> As a <Link href="/" className="text-amber-400 hover:underline">Chief of Staff recruitment agency</Link>, we aggregate job listings from LinkedIn, company career pages, and public job boards.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-900/30 to-yellow-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Hiring a Chief of Staff?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Post your role with our <Link href="/" className="text-amber-400 hover:underline">Chief of Staff recruitment agency</Link> for free.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-8 rounded-lg transition-all"
          >
            Post a Job →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0f] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-bold text-xl">
                <span className="text-amber-400">Chief of Staff</span> Quest
              </span>
            </Link>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <Link href="/jobs" className="hover:text-amber-400">Jobs</Link>
              <Link href="/contact" className="hover:text-amber-400">Post a Job</Link>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Chief of Staff Quest
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
