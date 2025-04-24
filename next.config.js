/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['firebasestorage.googleapis.com'],
  },
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/fhi-v4',
    assetPrefix: '/fhi-v4/',
  } : {}),
}

module.exports = nextConfig 