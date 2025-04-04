/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/fhi-v4',
  assetPrefix: '/fhi-v4/',
}

module.exports = nextConfig 