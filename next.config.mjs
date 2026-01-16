import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["example.com","i.ibb.co"],
    // domains: ["https://cdn.nextbyteitinstitute.com"],
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
      {
        source: "/pages/policy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/pages/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      { source: "/policy", destination: "/privacy-policy", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      {
        source: "/squadcart",
        destination: "/products/squadcart",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/", destination: "/main" },
      { source: "/about", destination: "/main/about" },
      { source: "/case-studies", destination: "/main/case-studies" },
      { source: "/contact", destination: "/main/contact" },
      { source: "/services", destination: "/main/services" },
      { source: "/products", destination: "/main/products" },
      {
        source: "/terms-and-conditions",
        destination: "/main/terms-and-conditions",
      },
      { source: "/privacy-policy", destination: "/main/privacy-policy" },
      { source: "/refund-policy", destination: "/main/refund-policy" },
      { source: "/faq", destination: "/main/faq" },
    ];
  },
  reactCompiler: false,
};
// hhhhh
export default nextConfig;
