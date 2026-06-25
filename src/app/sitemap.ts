import type { MetadataRoute } from 'next'
import { industries } from '@/data/industries'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://talira.com'
    const lastModified = new Date()

    const staticPaths = [
        { path: '/', priority: 1, changeFrequency: 'weekly' as const },
        { path: '/features', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/integrations', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/no-code-platform', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/phone-numbers', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/available-languages', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
        { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
        { path: '/site-map', priority: 0.3, changeFrequency: 'monthly' as const },
        { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
        { path: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' as const },
    ]

    const staticEntries: MetadataRoute.Sitemap = staticPaths.map(({ path, priority, changeFrequency }) => ({
        url: `${baseUrl}${path}`,
        lastModified,
        changeFrequency,
        priority,
    }))

    const industryEntries: MetadataRoute.Sitemap = Object.keys(industries).map((slug) => ({
        url: `${baseUrl}/industries/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    return [...staticEntries, ...industryEntries]
}
