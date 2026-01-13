import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.yudiganeko.com',
      },
    ],
  },
};

export default nextConfig;
