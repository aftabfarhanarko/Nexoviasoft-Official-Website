import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "ibb.co",
      },
    ],
    // bbbsdsdsds
  },
  async redirects() {
    return [
      { source: "/pages/about", destination: "/about", permanent: true },
      {
        source: "/pages/case-studies",
        destination: "/case-studies",
        permanent: true,
      },
      { source: "/pages/contact", destination: "/contact", permanent: true },
      { source: "/pages/services", destination: "/services", permanent: true },
      { source: "/pages/policy", destination: "/policy", permanent: true },
      { source: "/pages/terms", destination: "/terms", permanent: true },
      { source: "/privacy", destination: "/policy", permanent: true },
    ];
  },
  reactCompiler: false,
};
// hhhhh
export default nextConfig;
