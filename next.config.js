const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app', 'styles')],
  },
  images: {
    domains: ['img.jamesedition.com', 'www.hdcarwallpapers.com'],
  },
};

module.exports = nextConfig;
