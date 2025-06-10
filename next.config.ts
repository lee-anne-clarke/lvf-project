import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // Required in order to use the <Image /> component
  images: {
    remotePatterns: [new URL("https://covers.openlibrary.org/**")],
  },
};

export default nextConfig;
