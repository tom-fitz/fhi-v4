/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/fhi-v4' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fhi-v4/' : '',
}

module.exports = nextConfig 