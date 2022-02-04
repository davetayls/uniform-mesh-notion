const withTM = require('next-transpile-modules')([
  'uniform-mesh-notion-react',
])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
