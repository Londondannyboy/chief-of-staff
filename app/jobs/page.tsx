import Link from "next/link";
import { Metadata } from "next";
import {
  chiefOfStaffJobs,
  categoryLabels,
  categoryColors,
  JobCategory,
  getJobCountByCategory,
} from "../../lib/jobs-data";

export const metadata: Metadata = {
  title: "Chief of Staff Jobs | Browse CoS Roles | Chief of Staff Quest",
  description:
    "Browse Chief of Staff jobs across tech, finance, healthcare, consulting, and startups. Find CoS roles at top companies in the UK, US, and worldwide.",
  openGraph: {
    title: "Chief of Staff Jobs | Browse CoS Roles",
    description: "Browse Chief of Staff jobs across industries. Find your next CoS role.",
  },
};

// Get badge styling for job type
const getTypeBadgeClass = (type: string) => {
  switch (type) {
    case "Full-time":
      return "badge-fulltime";
    case "Part-time":
      return "badge-parttime";
    case "Contract":
      return "badge-contract";
    default:
      return "badge-fulltime";
  }
};

// Get badge styling for work mode
const getWorkModeBadgeClass = (mode: string) => {
  switch (mode) {
    case "Remote":
      return "bg-purple-500/20 border-purple-500/50 text-purple-400";
    case "Hybrid":
      return "bg-blue-500/20 border-blue-500/50 text-blue-400";
    case "On-site":
      return "bg-gray-500/20 border-gray-500/50 text-gray-400";
    default:
      return "bg-gray-500/20 border-gray-500/50 text-gray-400";
  }
};

export default function JobsPage() {
  const jobCounts = getJobCountByCategory();
  const categories = Object.keys(categoryLabels) as JobCategory[];

  // Group jobs by category
  const jobsByCategory = categories.reduce((acc, category) => {
    acc[category] = chiefOfStaffJobs.filter((job) => job.category === category);
    return acc;
  }, {} as Record<JobCategory, typeof chiefOfStaffJobs>);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
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
              <Link
                href="/jobs"
                className="text-amber-400 transition-colors"
              >
                Browse Jobs
              </Link>
              <Link
                href="/#categories"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/#careers"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                Career Paths
              </Link>
              <Link
                href="/#faq"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-lg transition-all"
              >
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-amber-900/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-amber-400">Chief of Staff</span> Jobs
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse {chiefOfStaffJobs.length} Chief of Staff opportunities across
              tech, finance, healthcare, consulting, and startups.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search by title, company, or skill..."
                className="flex-1 px-6 py-4 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
              />
              <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-xl transition-all">
                Search
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#all"
              className="px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 font-medium hover:bg-amber-500/30 transition-all"
            >
              All Jobs ({chiefOfStaffJobs.length})
            </a>
            {categories.map((category) => {
              const colors = categoryColors[category];
              const count = jobCounts[category] || 0;
              if (count === 0) return null;
              return (
                <a
                  key={category}
                  href={`#${category}`}
                  className={`px-4 py-2 rounded-full ${colors.bg} border ${colors.border} ${colors.text} font-medium hover:opacity-80 transition-all`}
                >
                  {categoryLabels[category]} ({count})
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jobs by Category */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const jobs = jobsByCategory[category];
            if (!jobs || jobs.length === 0) return null;

            const colors = categoryColors[category];

            return (
              <div key={category} id={category} className="mb-16">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {categoryLabels[category]}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${colors.bg} border ${colors.border} ${colors.text}`}
                  >
                    {jobs.length} {jobs.length === 1 ? "job" : "jobs"}
                  </span>
                </div>

                {/* Jobs Grid */}
                <div className="grid gap-4">
                  {jobs.map((job) => (
                    <a
                      key={job.id}
                      href={job.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="job-card bg-gray-900/50 rounded-xl overflow-hidden flex flex-col lg:flex-row hover:bg-gray-800/50 transition-colors group"
                    >
                      {/* Hero Image */}
                      <div className="relative w-full lg:w-56 h-40 lg:h-auto flex-shrink-0">
                        <img
                          src={job.heroImage}
                          alt={job.heroImageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 lg:block hidden" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent lg:hidden" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-5">
                        <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                          {/* Main Info */}
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                                {job.title}
                              </h3>
                              <span
                                className={`px-2 py-0.5 text-xs rounded-full ${colors.bg} border ${colors.border} ${colors.text}`}
                              >
                                {categoryLabels[job.category]}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mb-3">
                              <span className="font-medium text-amber-400">
                                {job.company}
                              </span>
                              <span>📍 {job.location}</span>
                              <span>💰 {job.salary}</span>
                            </div>

                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                              {job.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {job.skills.slice(0, 4).map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 text-xs rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Badges & CTA */}
                          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2">
                            <span
                              className={`px-3 py-1 text-xs rounded-full border ${getTypeBadgeClass(
                                job.type
                              )}`}
                            >
                              {job.type}
                            </span>
                            <span
                              className={`px-3 py-1 text-xs rounded-full border ${getWorkModeBadgeClass(
                                job.workMode
                              )}`}
                            >
                              {job.workMode}
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-gray-700/50 border border-gray-600 text-gray-300">
                              {job.executiveType} CoS
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-gray-700/50 border border-gray-600 text-gray-300">
                              {job.companyStage}
                            </span>
                            <span className="mt-2 bg-amber-500 group-hover:bg-amber-400 text-black font-bold py-2 px-5 rounded transition-all whitespace-nowrap">
                              Apply →
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Transparency Notice */}
      <section className="py-12 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            <strong className="text-gray-300">Transparency:</strong> We aggregate
            Chief of Staff job listings from LinkedIn, company career pages, and
            public job boards. Clicking &quot;Apply&quot; takes you directly to the
            original posting. We do not handle applications.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-900/30 to-yellow-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">
            Hiring a Chief of Staff?
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Post your role for free and reach qualified CoS candidates.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-8 rounded-lg transition-all"
          >
            Post a Job
            <span>→</span>
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
              <Link href="/" className="hover:text-amber-400">
                Home
              </Link>
              <Link href="/jobs" className="hover:text-amber-400">
                Jobs
              </Link>
              <Link href="/chief-of-staff-salary" className="hover:text-amber-400">
                Salary Guide
              </Link>
              <Link href="/contact" className="hover:text-amber-400">
                Contact
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Chief of Staff Quest
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
