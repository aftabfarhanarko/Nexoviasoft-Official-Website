import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import BackToTop from "@/Share/BackToTop";
import AppShell from "@/components/AppShell";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Squadlog",
  description: "squadlog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${baiJamjuree.variable} antialiased`}
      >
        <AppShell>{children}</AppShell>
        <BackToTop />
      </body>
    </html>
  );
}
