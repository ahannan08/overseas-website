import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        // Prevent CDN from caching HTML for months — stale HTML breaks CSS/JS after deploys
        source:
          "/((?!_next/static|_next/image|images|videos|api|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
