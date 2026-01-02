'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'

interface Job {
  id: string
  title: string
  company: string
  location: string
  country: string
  salary: string
  type: string
  category: string
  skills: string[]
  description: string
  heroImage: string
  workMode?: string
}

interface JobsFilterProps {
  jobs: Job[]
  categories: string[]
  categoryLabels: Record<string, string>
  categoryColors: Record<string, { bg: string; border: string; text: string }>
}

export function JobsFilter({ jobs, categories, categoryLabels, categoryColors }: JobsFilterProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initialQuery = searchParams.get('q') || ''
  const initialCountry = searchParams.get('country') || 'UK'

  const [query, setQuery] = useState(initialQuery)
  const [country, setCountry] = useState(initialCountry)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Country filter
      if (country && country !== 'All') {
        if (country === 'UK' && job.country !== 'United Kingdom') return false
        if (country === 'US' && job.country !== 'United States') return false
        if (country === 'EU' && !['Germany', 'France', 'Netherlands', 'Spain', 'Italy', 'Ireland'].includes(job.country) && job.country !== 'United Kingdom') return false
        if (country === 'Remote' && job.workMode !== 'Remote') return false
      }

      // Search query filter
      if (query.trim()) {
        const searchLower = query.toLowerCase()
        const matchesTitle = job.title.toLowerCase().includes(searchLower)
        const matchesCompany = job.company.toLowerCase().includes(searchLower)
        const matchesSkills = job.skills.some(s => s.toLowerCase().includes(searchLower))
        const matchesLocation = job.location.toLowerCase().includes(searchLower)
        if (!matchesTitle && !matchesCompany && !matchesSkills && !matchesLocation) return false
      }

      // Category filter
      if (activeCategory && job.category !== activeCategory) return false

      return true
    })
  }, [jobs, query, country, activeCategory])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    if (country && country !== 'All') params.set('country', country)
    router.push(`/jobs${params.toString() ? `?${params.toString()}` : ''}`)
  }

  const getTypeBadgeClass = (type: string) => {
    switch (type) {
      case 'Full-time': return 'badge-fulltime'
      case 'Part-time': return 'badge-parttime'
      case 'Contract': return 'badge-contract'
      default: return 'badge-fulltime'
    }
  }

  const getWorkModeBadgeClass = (mode: string) => {
    switch (mode) {
      case 'Remote': return 'bg-purple-500/20 border-purple-500/50 text-purple-400'
      case 'Hybrid': return 'bg-blue-500/20 border-blue-500/50 text-blue-400'
      default: return 'bg-gray-500/20 border-gray-500/50 text-gray-400'
    }
  }

  // Get job counts by category for filtered results
  const getCategoryCount = (cat: string) => filteredJobs.filter(j => j.category === cat).length

  return (
    <>
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, company, or skill..."
            className="flex-1 px-6 py-4 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
          />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            aria-label="Filter by country"
            className="px-4 py-4 bg-gray-900/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-amber-500 min-w-[160px]"
          >
            <option value="UK">🇬🇧 United Kingdom</option>
            <option value="US">🇺🇸 United States</option>
            <option value="EU">🇪🇺 Europe</option>
            <option value="Remote">🌍 Remote</option>
            <option value="All">🌐 All Countries</option>
          </select>
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-xl transition-all whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </form>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            !activeCategory
              ? 'bg-amber-500/30 border border-amber-500 text-amber-400'
              : 'bg-amber-500/10 border border-amber-500/50 text-amber-400 hover:bg-amber-500/20'
          }`}
        >
          All Jobs ({filteredJobs.length})
        </button>
        {categories.map((category) => {
          const colors = categoryColors[category]
          const count = getCategoryCount(category)
          if (count === 0 && !activeCategory) return null
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? `${colors.bg} border-2 ${colors.border} ${colors.text}`
                  : `${colors.bg} border ${colors.border} ${colors.text} opacity-70 hover:opacity-100`
              }`}
            >
              {categoryLabels[category]} ({count})
            </button>
          )
        })}
      </div>

      {/* Results Summary */}
      {(query || country !== 'All') && (
        <div className="text-center mb-6">
          <p className="text-gray-400">
            Showing <span className="text-amber-400 font-bold">{filteredJobs.length}</span> jobs
            {query && <> matching &quot;<span className="text-white">{query}</span>&quot;</>}
            {country && country !== 'All' && <> in <span className="text-white">{country === 'UK' ? 'United Kingdom' : country === 'US' ? 'United States' : country}</span></>}
          </p>
        </div>
      )}

      {/* Jobs Grid */}
      <div className="grid gap-4">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No jobs found matching your criteria.</p>
            <button
              onClick={() => {
                setQuery('')
                setCountry('All')
                setActiveCategory(null)
              }}
              className="mt-4 text-amber-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <Link
              key={job.id}
              href={`/job/${job.id}`}
              className="job-card bg-gray-900/50 rounded-xl overflow-hidden flex flex-col md:flex-row hover:bg-gray-800/50 transition-colors group"
            >
              {/* Hero Image */}
              <div className="relative w-full md:w-48 h-32 md:h-auto flex-shrink-0">
                <img
                  src={job.heroImage}
                  alt={`${job.title} at ${job.company}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 md:block hidden" />
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {job.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mb-3">
                    <span className="font-medium text-amber-400">{job.company}</span>
                    <span>📍 {job.location}</span>
                    <span>💷 {job.salary}</span>
                  </div>
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
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs rounded-full border ${getTypeBadgeClass(job.type)}`}>
                    {job.type}
                  </span>
                  {job.workMode && (
                    <span className={`px-3 py-1 text-xs rounded-full border ${getWorkModeBadgeClass(job.workMode)}`}>
                      {job.workMode}
                    </span>
                  )}
                  <span className="bg-amber-500 group-hover:bg-amber-400 text-black font-bold py-2 px-5 rounded transition-all">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  )
}
