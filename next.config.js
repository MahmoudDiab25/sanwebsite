/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  env: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    databaseURL: process.env.DATABASE_URL,
  },
};

module.exports = nextConfig;
