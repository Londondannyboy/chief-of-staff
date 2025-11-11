import type { APIRoute } from 'astro';
import { sql } from '../lib/db';

export const GET: APIRoute = async ({ site }) => {
  // Remove trailing slash to prevent double slashes in URLs
  const siteUrl = (site || 'https://chiefofstaff.quest').replace(/\/$/, '');

  // Fetch all published articles with their published dates
  const articles = await sql`
    SELECT
      slug,
      published_at,
      updated_at,
      created_at
    FROM articles
    WHERE app = 'chief-of-staff'
      AND status = 'published'
    ORDER BY published_at DESC NULLS LAST, created_at DESC
  `;

  // Fetch all published companies
  const companies = await sql`
    SELECT
      slug,
      updated_at,
      created_at
    FROM companies
    WHERE app = 'chief-of-staff'
      AND status = 'published'
    ORDER BY name ASC
  `;

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Articles page -->
  <url>
    <loc>${siteUrl}/articles</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Companies page -->
  <url>
    <loc>${siteUrl}/companies</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Individual articles -->
${articles.map((article: any) => {
  const lastmod = article.updated_at || article.published_at || article.created_at;

  return `  <url>
    <loc>${siteUrl}/${article.slug}</loc>
    <lastmod>${new Date(lastmod).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n')}

  <!-- Individual companies -->
${companies.map((company: any) => {
  const lastmod = company.updated_at || company.created_at;

  return `  <url>
    <loc>${siteUrl}/companies/${company.slug}</loc>
    <lastmod>${new Date(lastmod).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    }
  });
};
