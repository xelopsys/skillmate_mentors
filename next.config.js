const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["unsplash.com", "images.unsplash.com"],
  },

  assetPrefix: process.env.NEXT_PUBLIC_SITE_URL ?? undefined,
};
