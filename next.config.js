/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/wedding-invite-page/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/wedding-invite-page" : "",
  output: "export",
};

module.exports = nextConfig;
