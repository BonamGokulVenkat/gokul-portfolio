import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows this development server to hydrate client components on the local LAN.
  // This option applies only to `next dev`; production origins remain unchanged.
  allowedDevOrigins: ["10.37.30.248"],
};

export default nextConfig;
