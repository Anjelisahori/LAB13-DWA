import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AÑADE ESTO:
  // Forzamos a Turbopack a usar el directorio actual como la raíz
  turbopack: {
    root: __dirname,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;