import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Serve standalone static client landing pages (in /public/landings)
      // at clean URLs without the trailing /index.html.
      {
        source: "/landings/clients/:client",
        destination: "/landings/clients/:client/index.html",
      },
    ];
  },
};

export default nextConfig;
