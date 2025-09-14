/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'imgix.cosmicjs.com',
      'cdn.cosmicjs.com',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cosmicjs.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Disable typedRoutes to prevent complex TypeScript errors
  typedRoutes: false,
}

module.exports = nextConfig