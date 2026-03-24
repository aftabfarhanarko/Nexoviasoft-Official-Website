// app/layout.js
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

// Load the Bai Jamjuree font with multiple weights and styles
const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Enhanced SEO metadata
export const metadata = {
  title: "NexoviaSoft – Web Development, Software Solutions & Digital Innovation",
  description:
    "NexoviaSoft provides cutting-edge web development, custom software solutions, and digital innovation services to help your business grow online.",
  keywords:
    "web development, software solutions, digital innovation, custom software, IT services, app development, NexoviaSoft",
  openGraph: {
    title: "NexoviaSoft – Web Development & Digital Solutions",
    description:
      "Delivering innovative software solutions and web development services to elevate your business digitally.",
    url: "https://www.nexoviasoft.com",
    siteName: "NexoviaSoft",
    images: [
      {
        url: "https://www.nexoviasoft.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexoviaSoft Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexoviaSoft – Web & Software Solutions",
    description:
      "Innovative digital solutions and custom software development for your business success.",
    images: ["https://www.nexoviasoft.com/twitter-image.png"],
    creator: "@NexoviaSoft",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
      </head>
      <body className={`${baiJamjuree.variable} antialiased`}>{children}</body>
    </html>
  );
}