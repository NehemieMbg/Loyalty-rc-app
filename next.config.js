const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app', 'styles')],
  },
  images: {
    domains: [
      'img.jamesedition.com',
      'www.hdcarwallpapers.com',
      'www.dropbox.com',
      'drive.google.com',
      'firebasestorage.googleapis.com',
    ],
  },
};

module.exports = nextConfig;
