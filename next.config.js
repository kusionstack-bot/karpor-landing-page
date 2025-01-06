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
}

module.exports = nextConfig
