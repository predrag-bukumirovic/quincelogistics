import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Jedna 404 strana za oba jezika (sajt ima dva root layout-a).
    globalNotFound: true,
  },
};

export default nextConfig;
