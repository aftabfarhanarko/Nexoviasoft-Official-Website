"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DemoFooter from "@/components/Demo/Footer";
import { usePathname } from "next/navigation";

export default function AppShell({ children }) {
  const pathname = usePathname() || "";
  const isProducts = pathname.startsWith("/products");

  return (
    <>
      <nav className={isProducts ? "text-black" : undefined}>
        <Navbar />
      </nav>
      {children}
      {isProducts ? <DemoFooter /> : <Footer />}
    </>
  );
}
