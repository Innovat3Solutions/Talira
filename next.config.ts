import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "ui.aceternity.com" },
      { hostname: "assets.aceternity.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "svgl.app" },
    ],
  },
};

export default nextConfig;
