/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'dist',
    trailingSlash: true,
    output: 'export',
    images: { unoptimized: true }

};

module.exports = nextConfig
