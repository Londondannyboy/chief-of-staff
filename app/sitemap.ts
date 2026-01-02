import { MetadataRoute } from 'next'
import { getAllJobSlugs } from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://chiefofstaff.quest'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    // Homepage - primary target for "chief of staff recruitment agency"
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Jobs pages
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/chief-of-staff-jobs-uk`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/chief-of-staff-jobs-london`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Career guides
    {
      url: `${baseUrl}/how-to-become-chief-of-staff`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/chief-of-staff-salary-uk`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Contact
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic job pages
  let jobPages: MetadataRoute.Sitemap = []
  try {
    const slugs = await getAllJobSlugs()
    jobPages = slugs.map((slug) => ({
      url: `${baseUrl}/job/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }))
  } catch (error) {
    console.error('Error fetching job slugs for sitemap:', error)
  }

  return [...staticPages, ...jobPages]
}
