import { Bai_Jamjuree, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/Share/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const baijamjuree = Bai_Jamjuree({

// })

export const metadata = {
  title: "Squadlog",
  description: "squadlog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <Navbar />
        </nav>


        {children}
        <footer>
          <Footer />
        </footer>
        <BackToTop />
      </body>
    </html>
  );
}
