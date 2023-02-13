const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPWA(nextConfig)
