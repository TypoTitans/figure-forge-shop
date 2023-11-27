/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "figureforgeapp.azurewebsites.net",
      },
      {
        protocol: "https",
        hostname: "figurestorage.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "onepiecetreasuregk.net",
      },
      {
        protocol: "https",
        hostname: "tsumeart-1d733.kxcdn.com",
      },
    ],
    domains: ["i.etsystatic.com", "onepiecetreasuregk.net"],
  },
};
