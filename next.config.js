/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
