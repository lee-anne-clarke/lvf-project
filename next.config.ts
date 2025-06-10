import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deploy the app as a static export (no back-end server)
  output: 'export', 

  // Because the app is being deployed as a static export, this property is required in order to use the <Image /> component
  images: { unoptimized: true }, 

  // Necessary for direct links to site pages to work
  trailingSlash: true,
};

export default nextConfig;
