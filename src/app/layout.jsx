import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";


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
        {children}

      </body>
    </html>
  );
}
