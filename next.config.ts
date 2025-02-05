/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Fixes image loading issues
  },
  basePath: "/Expedia", // Change this to match your GitHub repository name
  assetPrefix: "/Expedia/", // Ensures assets load correctly
};

module.exports = nextConfig;
