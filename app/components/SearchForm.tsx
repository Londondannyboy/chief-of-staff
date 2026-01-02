'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface SearchFormProps {
  className?: string
  variant?: 'hero' | 'compact'
}

export function SearchForm({ className = '', variant = 'hero' }: SearchFormProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('UK')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    if (country && country !== 'All') params.set('country', country)

    const searchString = params.toString()
    router.push(`/jobs${searchString ? `?${searchString}` : ''}`)
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search jobs..."
          className="flex-1 px-4 py-2 bg-gray-900/80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-lg transition-all"
        >
          Search
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`max-w-3xl mx-auto ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Chief of Staff jobs..."
          className="flex-1 px-6 py-4 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
        />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          aria-label="Select country or region"
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
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-xl transition-all btn-shine whitespace-nowrap"
        >
          Search Jobs
        </button>
      </div>
    </form>
  )
}
