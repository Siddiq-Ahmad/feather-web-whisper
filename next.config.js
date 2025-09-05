/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true, // Fix for static export
    domains: ['*'], // Allow images from all domains
  },
  trailingSlash: true, // Adds trailing slashes to URLs for better compatibility
}

module.exports = nextConfig 