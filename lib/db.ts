import { neon } from '@neondatabase/serverless'

export function createDbQuery() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set')
  }
  return neon(databaseUrl)
}

export interface Job {
  id: number
  slug: string
  title: string
  company: string
  hero_image: string | null
  hero_image_alt: string | null
  location: string | null
  country: string | null
  work_mode: string | null
  job_type: string | null
  salary: string | null
  description: string | null
  requirements: string | null
  skills: string[] | null
  posted_date: string | null
  valid_through: string | null
  external_url: string
  source: string | null
  category: string | null
  executive_type: string | null
  company_stage: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export async function getAllJobs(): Promise<Job[]> {
  const sql = createDbQuery()
  const jobs = await sql`
    SELECT * FROM jobs
    WHERE is_active = true
    ORDER BY posted_date DESC NULLS LAST
  `
  return jobs as Job[]
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const sql = createDbQuery()
  const jobs = await sql`
    SELECT * FROM jobs
    WHERE slug = ${slug} AND is_active = true
    LIMIT 1
  `
  return jobs[0] as Job || null
}

export async function getAllJobSlugs(): Promise<string[]> {
  const sql = createDbQuery()
  const jobs = await sql`
    SELECT slug FROM jobs
    WHERE is_active = true
  `
  return jobs.map((j: any) => j.slug)
}

export async function getJobsByCategory(category: string): Promise<Job[]> {
  const sql = createDbQuery()
  const jobs = await sql`
    SELECT * FROM jobs
    WHERE is_active = true AND category = ${category}
    ORDER BY posted_date DESC NULLS LAST
  `
  return jobs as Job[]
}

export async function getRelatedJobs(currentSlug: string, category: string, limit: number = 3): Promise<Job[]> {
  const sql = createDbQuery()
  const jobs = await sql`
    SELECT * FROM jobs
    WHERE is_active = true
      AND slug != ${currentSlug}
      AND category = ${category}
    ORDER BY posted_date DESC NULLS LAST
    LIMIT ${limit}
  `
  return jobs as Job[]
}
