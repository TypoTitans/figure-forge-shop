/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tsumeart-1d733.kxcdn.com",
      },
      {
        protocol: "https",
        hostname: "www.sideshow.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "daweebstop.com",
      },
      {
        protocol: "https",
        hostname: "onepiecetreasuregk.net",
      },
      {
        protocol: "https",
        hostname: "figureforgeapp.azurewebsites.net",
      },
      {
        protocol: "https",
        hostname: "figurestorage.blob.core.windows.net",
      },
    ],
    domains: ["i.etsystatic.com"],
  },
};
