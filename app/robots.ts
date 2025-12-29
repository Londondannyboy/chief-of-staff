import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
    ],
    sitemap: 'https://chiefofstaff.quest/sitemap.xml',
    host: 'https://chiefofstaff.quest',
  }
}
