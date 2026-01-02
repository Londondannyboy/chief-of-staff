import Link from "next/link";
import { Metadata } from "next";
import { chiefOfStaffJobs } from "../../lib/jobs-data";

export const metadata: Metadata = {
  title: "Chief of Staff Jobs UK 🇬🇧 London, Manchester & Remote CoS Roles",
  description: "🎯 Browse Chief of Staff jobs across the UK. Our specialist CoS recruitment agency connects you with roles at top companies in London, Manchester, Edinburgh & remote positions.",
  keywords: [
    "chief of staff jobs uk",
    "chief of staff recruitment agency uk",
    "chief of staff london",
    "cos jobs uk",
    "chief of staff manchester",
    "chief of staff edinburgh",
    "uk chief of staff roles",
    "chief of staff jobs london",
    "remote chief of staff uk",
    "cos recruitment agency uk",
  ],
  openGraph: {
    title: "Chief of Staff Jobs UK 🇬🇧 London, Manchester & Remote",
    description: "🎯 Browse Chief of Staff jobs across the UK. Connect with CoS roles at top companies in London, Manchester, Edinburgh & remote.",
    locale: "en_GB",
  },
  alternates: {
    canonical: "https://chiefofstaff.quest/chief-of-staff-jobs-uk",
  },
};

// Page-specific structured data
const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://chiefofstaff.quest/chief-of-staff-jobs-uk",
      url: "https://chiefofstaff.quest/chief-of-staff-jobs-uk",
      name: "Chief of Staff Jobs UK | Chief of Staff Recruitment Agency",
      description: "Find Chief of Staff jobs in the UK through our specialist Chief of Staff recruitment agency.",
      isPartOf: { "@id": "https://chiefofstaff.quest/#website" },
      breadcrumb: { "@id": "https://chiefofstaff.quest/chief-of-staff-jobs-uk#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://chiefofstaff.quest/chief-of-staff-jobs-uk#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Chief of Staff Recruitment Agency",
          item: "https://chiefofstaff.quest"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Chief of Staff Jobs UK",
          item: "https://chiefofstaff.quest/chief-of-staff-jobs-uk"
        }
      ]
    },
    {
      "@type": "ItemList",
      name: "UK Chief of Staff Jobs",
      description: "Chief of Staff job listings in the United Kingdom",
      itemListElement: chiefOfStaffJobs
        .filter(job => job.country === "United Kingdom")
        .slice(0, 10)
        .map((job, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "JobPosting",
            title: job.title,
            description: job.description,
            datePosted: job.postedDate,
            hiringOrganization: {
              "@type": "Organization",
              name: job.company,
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: job.location,
                addressCountry: "GB"
              }
            },
            employmentType: job.type.toUpperCase().replace("-", "_"),
          }
        }))
    }
  ]
};

// Filter UK jobs
const ukJobs = chiefOfStaffJobs.filter(job =>
  job.country === "United Kingdom" ||
  job.location.toLowerCase().includes("uk") ||
  job.location.toLowerCase().includes("london") ||
  job.location.toLowerCase().includes("united kingdom")
);

// Also include remote jobs that could work for UK candidates
const remoteJobs = chiefOfStaffJobs.filter(job =>
  job.workMode === "Remote" && !ukJobs.includes(job)
).slice(0, 6);

export default function ChiefOfStaffJobsUK() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-bold text-xl">
                <span className="text-amber-400">Chief of Staff</span> Quest
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/jobs" className="text-gray-300 hover:text-amber-400 transition-colors">All Jobs</Link>
              <Link href="/chief-of-staff-jobs-uk" className="text-amber-400">UK Jobs</Link>
              <Link href="/#faq" className="text-gray-300 hover:text-amber-400 transition-colors">FAQ</Link>
              <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-lg transition-all">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-400">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-amber-400">Chief of Staff Recruitment Agency</Link></li>
              <li>/</li>
              <li className="text-amber-400">Chief of Staff Jobs UK</li>
            </ol>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-400 text-sm font-medium mb-6">
              🇬🇧 United Kingdom
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Chief of Staff Jobs <span className="text-amber-400">UK</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find Chief of Staff jobs across the United Kingdom. Our <strong>Chief of Staff recruitment agency</strong> aggregates CoS roles in London, Manchester, Edinburgh, and remote UK positions from top employers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-gray-800 rounded-full">📍 London</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full">📍 Manchester</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full">📍 Edinburgh</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full">🌐 Remote UK</span>
            </div>
          </div>
        </div>
      </section>

      {/* UK Market Stats */}
      <section className="py-12 bg-gradient-to-r from-amber-900/20 via-yellow-900/10 to-amber-900/20 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2">{ukJobs.length}+</div>
              <div className="text-gray-400 text-sm">UK CoS Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2">£70K-£150K</div>
              <div className="text-gray-400 text-sm">Typical UK Salary</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2">65%</div>
              <div className="text-gray-400 text-sm">FTSE 100 with CoS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-amber-400 mb-2">London</div>
              <div className="text-gray-400 text-sm">Top UK Location</div>
            </div>
          </div>
        </div>
      </section>

      {/* UK Jobs List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black mb-8">
            Chief of Staff Jobs in the <span className="text-amber-400">United Kingdom</span>
          </h2>

          {ukJobs.length > 0 ? (
            <div className="grid gap-4 mb-12">
              {ukJobs.map((job) => (
                <a
                  key={job.id}
                  href={job.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
                        <span className="font-medium text-amber-400">{job.company}</span>
                        <span>📍 {job.location}</span>
                        <span>💷 {job.salary}</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                          {job.workMode}
                        </span>
                      </div>
                    </div>
                    <span className="bg-amber-500 group-hover:bg-amber-400 text-black font-bold py-2 px-6 rounded transition-all whitespace-nowrap">
                      Apply Now
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 text-center mb-12">
              <p className="text-gray-400 mb-4">No UK-specific jobs currently listed. Check back soon or browse remote opportunities below.</p>
              <Link href="/jobs" className="text-amber-400 hover:underline">View All Jobs</Link>
            </div>
          )}

          {/* Remote Jobs for UK */}
          {remoteJobs.length > 0 && (
            <>
              <h2 className="text-3xl font-black mb-8">
                Remote Jobs <span className="text-amber-400">Available to UK</span>
              </h2>
              <div className="grid gap-4">
                {remoteJobs.map((job) => (
                  <a
                    key={job.id}
                    href={job.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/50 transition-all group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
                          <span className="font-medium text-amber-400">{job.company}</span>
                          <span>🌍 {job.location}</span>
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
                            Remote
                          </span>
                        </div>
                      </div>
                      <span className="bg-amber-500 group-hover:bg-amber-400 text-black font-bold py-2 px-6 rounded transition-all whitespace-nowrap">
                        Apply Now
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* UK Market Content */}
      <section className="py-16 bg-[#0d0d15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black mb-8">
            About Chief of Staff Jobs in the <span className="text-amber-400">UK</span>
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              The UK Chief of Staff job market has grown significantly over the past five years. Our <strong>Chief of Staff recruitment agency</strong> has observed that London remains the primary hub, with increasing opportunities in Manchester, Edinburgh, Birmingham, and fully remote positions.
            </p>
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">UK Chief of Staff Salary Expectations</h3>
            <p className="text-gray-400 mb-6">
              Chief of Staff salaries in the UK typically range from £70,000 to £150,000 for mid to senior-level roles. Startup CoS positions often include equity packages, while FTSE 100 and PE-backed companies may offer packages exceeding £200,000 including bonuses.
            </p>
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Top UK Industries Hiring Chiefs of Staff</h3>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>• <strong>Technology & SaaS</strong> - London's tech ecosystem is a major employer</li>
              <li>• <strong>Financial Services</strong> - Investment banks, hedge funds, and PE firms</li>
              <li>• <strong>Consulting</strong> - Big 4 and boutique firms</li>
              <li>• <strong>Healthcare & Biotech</strong> - Growing sector for CoS roles</li>
              <li>• <strong>Nonprofits & Government</strong> - Mission-driven organisations</li>
            </ul>
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Why Use a Chief of Staff Recruitment Agency?</h3>
            <p className="text-gray-400">
              Our Chief of Staff recruitment agency aggregates jobs from multiple sources so you can find all UK opportunities in one place. We understand the unique requirements of the CoS role and focus exclusively on this niche, making it easier to find roles that match your experience and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-900/30 to-yellow-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Looking to Hire a Chief of Staff in the UK?</h2>
          <p className="text-gray-300 mb-8">
            Post your Chief of Staff role for free on our recruitment agency job board.
          </p>
          <Link href="/contact" className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-10 rounded-lg transition-all">
            Post a Job Free
          </Link>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold mb-6">Explore More</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
              Chief of Staff Recruitment Agency
            </Link>
            <Link href="/jobs" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
              All Chief of Staff Jobs
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0f] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🎯</span>
            <span className="font-bold text-xl">
              <span className="text-amber-400">Chief of Staff</span> Quest
            </span>
          </Link>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Chief of Staff Quest - UK&apos;s Leading <Link href="/" className="hover:text-amber-400">Chief of Staff Recruitment Agency</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
