/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disableDevLogs: true,

})

const nextConfig = withPWA({
  reactStrictMode: false,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    test: "okee"
  }
})

module.exports = nextConfig
