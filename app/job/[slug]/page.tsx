import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getJobBySlug, getRelatedJobs, getAllJobSlugs, Job } from '@/lib/db'

export const revalidate = 3600 // Revalidate every hour

// Generate static params for all jobs
export async function generateStaticParams() {
  try {
    const slugs = await getAllJobSlugs()
    return slugs.map((slug) => ({ slug }))
  } catch {
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const job = await getJobBySlug(slug)

  if (!job) {
    return {
      title: 'Job Not Found | Chief of Staff Quest',
    }
  }

  const title = `${job.title} at ${job.company} | Chief of Staff Jobs UK`
  const description = `Apply for ${job.title} at ${job.company}. ${job.work_mode} Chief of Staff role in ${job.location}. ${job.salary || 'Competitive salary'}. Browse more CoS jobs at Chief of Staff Quest.`

  return {
    title,
    description,
    keywords: [
      'chief of staff jobs',
      'chief of staff jobs uk',
      'cos jobs',
      job.company.toLowerCase(),
      job.category || '',
      job.location || '',
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://chiefofstaff.quest/job/${slug}`,
      images: job.hero_image ? [job.hero_image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://chiefofstaff.quest/job/${slug}`,
    },
  }
}

// Generate JobPosting schema
function generateJobPostingSchema(job: Job) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: job.company,
      value: job.slug,
    },
    datePosted: job.posted_date,
    validThrough: job.valid_through || new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    employmentType: job.job_type === 'Full-time' ? 'FULL_TIME' : job.job_type === 'Part-time' ? 'PART_TIME' : 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
      sameAs: job.external_url,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location?.split(',')[0],
        addressCountry: job.country,
      },
    },
    baseSalary: job.salary && !['Competitive', 'Competitive + Equity', 'Competitive + Bonus'].includes(job.salary) ? {
      '@type': 'MonetaryAmount',
      currency: job.salary.includes('£') ? 'GBP' : job.salary.includes('€') ? 'EUR' : 'USD',
      value: {
        '@type': 'QuantitativeValue',
        unitText: 'YEAR',
      },
    } : undefined,
    skills: job.skills?.join(', '),
    image: job.hero_image,
    industry: 'Executive Leadership',
    occupationalCategory: 'Chief of Staff',
    directApply: false,
    url: `https://chiefofstaff.quest/job/${job.slug}`,
  }
}

// Breadcrumb schema
function generateBreadcrumbSchema(job: Job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://chiefofstaff.quest',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Chief of Staff Jobs',
        item: 'https://chiefofstaff.quest/jobs',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: job.title,
        item: `https://chiefofstaff.quest/job/${job.slug}`,
      },
    ],
  }
}

const categoryLabels: Record<string, string> = {
  tech: 'Technology',
  finance: 'Finance & Banking',
  healthcare: 'Healthcare',
  consulting: 'Consulting',
  nonprofit: 'Nonprofit & Government',
  startup: 'Startup',
  enterprise: 'Enterprise',
}

const categoryColors: Record<string, string> = {
  tech: 'bg-blue-500/20 border-blue-500/50 text-blue-400',
  finance: 'bg-green-500/20 border-green-500/50 text-green-400',
  healthcare: 'bg-red-500/20 border-red-500/50 text-red-400',
  consulting: 'bg-purple-500/20 border-purple-500/50 text-purple-400',
  nonprofit: 'bg-teal-500/20 border-teal-500/50 text-teal-400',
  startup: 'bg-orange-500/20 border-orange-500/50 text-orange-400',
  enterprise: 'bg-indigo-500/20 border-indigo-500/50 text-indigo-400',
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const job = await getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  const relatedJobs = await getRelatedJobs(slug, job.category || 'tech', 3)
  const categoryColor = categoryColors[job.category || 'tech'] || categoryColors.tech
  const categoryLabel = categoryLabels[job.category || 'tech'] || 'Technology'

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJobPostingSchema(job)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(job)) }}
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
              <Link href="/jobs" className="text-gray-300 hover:text-amber-400 transition-colors">
                Browse Jobs
              </Link>
              <Link href="/#categories" className="text-gray-300 hover:text-amber-400 transition-colors">
                Categories
              </Link>
              <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-lg transition-all">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="pt-20 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/jobs" className="hover:text-amber-400 transition-colors">Chief of Staff Jobs</Link>
            <span>›</span>
            <span className="text-gray-300 truncate max-w-[200px]">{job.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        {job.hero_image && (
          <div className="absolute inset-0 h-64 overflow-hidden">
            <img
              src={job.hero_image}
              alt={job.hero_image_alt || `${job.title} at ${job.company}`}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/50 to-[#0a0a0f]" />
          </div>
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 text-xs rounded-full border ${categoryColor}`}>
              {categoryLabel}
            </span>
            {job.work_mode && (
              <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-400">
                {job.work_mode}
              </span>
            )}
            {job.job_type && (
              <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400">
                {job.job_type}
              </span>
            )}
            {job.company_stage && (
              <span className="px-3 py-1 text-xs rounded-full bg-gray-700/50 border border-gray-600 text-gray-300">
                {job.company_stage}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            {job.title}
          </h1>

          {/* Company & Location */}
          <div className="flex flex-wrap items-center gap-4 text-lg text-gray-300 mb-6">
            <span className="font-semibold text-amber-400">{job.company}</span>
            {job.location && <span>📍 {job.location}</span>}
            {job.salary && <span className="font-semibold">💰 {job.salary}</span>}
          </div>

          {/* Apply Button */}
          <a
            href={job.external_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-xl transition-all text-lg"
          >
            Apply for this Role
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12 bg-[#0d0d15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About this Chief of Staff Role</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-300 whitespace-pre-wrap">{job.description}</p>
              </div>

              {job.requirements && (
                <>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Requirements</h2>
                  <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-gray-300 whitespace-pre-wrap">{job.requirements}</p>
                  </div>
                </>
              )}

              {job.skills && job.skills.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-bold mb-4">Quick Info</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Company</dt>
                    <dd className="text-white font-medium">{job.company}</dd>
                  </div>
                  {job.location && (
                    <div>
                      <dt className="text-gray-500">Location</dt>
                      <dd className="text-white">{job.location}</dd>
                    </div>
                  )}
                  {job.work_mode && (
                    <div>
                      <dt className="text-gray-500">Work Mode</dt>
                      <dd className="text-white">{job.work_mode}</dd>
                    </div>
                  )}
                  {job.job_type && (
                    <div>
                      <dt className="text-gray-500">Employment Type</dt>
                      <dd className="text-white">{job.job_type}</dd>
                    </div>
                  )}
                  {job.salary && (
                    <div>
                      <dt className="text-gray-500">Salary</dt>
                      <dd className="text-white font-semibold">{job.salary}</dd>
                    </div>
                  )}
                  {job.executive_type && (
                    <div>
                      <dt className="text-gray-500">Reports To</dt>
                      <dd className="text-white">{job.executive_type}</dd>
                    </div>
                  )}
                  {job.posted_date && (
                    <div>
                      <dt className="text-gray-500">Posted</dt>
                      <dd className="text-white">{new Date(job.posted_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Apply Card */}
              <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/30">
                <h3 className="text-lg font-bold mb-2">Ready to Apply?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Click below to apply directly on the company&apos;s website.
                </p>
                <a
                  href={job.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-lg transition-all text-center"
                >
                  Apply Now →
                </a>
              </div>

              {/* Back to Jobs */}
              <div className="text-center">
                <Link href="/jobs" className="text-amber-400 hover:underline text-sm">
                  ← Browse All Chief of Staff Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Jobs */}
      {relatedJobs.length > 0 && (
        <section className="py-12 bg-[#0a0a0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Similar Chief of Staff Jobs</h2>
            <div className="grid gap-4">
              {relatedJobs.map((relatedJob) => (
                <Link
                  key={relatedJob.slug}
                  href={`/job/${relatedJob.slug}`}
                  className="bg-gray-900/50 rounded-xl p-5 border border-gray-800 hover:border-amber-500/50 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {relatedJob.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mt-1">
                        <span className="font-medium text-amber-400">{relatedJob.company}</span>
                        {relatedJob.location && <span>📍 {relatedJob.location}</span>}
                        {relatedJob.salary && <span>💰 {relatedJob.salary}</span>}
                      </div>
                    </div>
                    <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEO Internal Linking Section */}
      <section className="py-12 bg-[#0d0d15]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            This Chief of Staff job is listed by <Link href="/" className="text-amber-400 hover:underline font-medium">Chief of Staff Quest</Link> - the UK&apos;s leading <Link href="/" className="text-amber-400 hover:underline">Chief of Staff recruitment agency</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/jobs" className="text-gray-400 hover:text-amber-400">Browse All CoS Jobs</Link>
            <span className="text-gray-600">•</span>
            <Link href="/chief-of-staff-jobs-uk" className="text-gray-400 hover:text-amber-400">UK Chief of Staff Jobs</Link>
            <span className="text-gray-600">•</span>
            <Link href="/contact" className="text-gray-400 hover:text-amber-400">Post a Job</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0f] border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2" title="Chief of Staff Recruitment Agency">
              <span className="text-2xl">🎯</span>
              <span className="font-bold text-xl">
                <span className="text-amber-400">Chief of Staff</span> Quest
              </span>
            </Link>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-amber-400">Home</Link>
              <Link href="/jobs" className="hover:text-amber-400">Jobs</Link>
              <Link href="/contact" className="hover:text-amber-400">Contact</Link>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Chief of Staff Quest
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
