/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kusionstack.io',
        pathname: '/**',
      },
    ],
  },
  // Add X-Robots-Tag header
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
    ]
  },
  // Enable sitemap generation
  experimental: {
    sitemap: {
      enabled: true,
    },
  },
}

module.exports = nextConfig
