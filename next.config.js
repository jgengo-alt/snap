/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  reactStrictMode: true,
  optimizeFonts: false,
  assetPrefix: isProd ? "/snap/" : "",
};

module.exports = nextConfig;
