/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  output: 'export',
  images: {
    unoptimized: true, // https://nextjs.org/docs/messages/export-image-api
  },
};

module.exports = nextConfig;
