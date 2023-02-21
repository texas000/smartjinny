/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')();
const nextConfig = {
    experimental: {
      appDir: true,
    },
  }
  
  module.exports = removeImports(nextConfig);