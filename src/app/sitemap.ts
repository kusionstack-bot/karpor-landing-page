import { MetadataRoute } from 'next'

// Function to generate sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL from your environment
  const baseUrl = 'https://karpor.kusionstack.io'

  // List all your static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    // Add more static pages as needed
    // {
    //   url: `${baseUrl}/docs`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.8,
    // },
  ]

  return [...staticPages]
}
