import Navbar from "@/components/Demo/Navbar";
import Footer from "@/components/Demo/Footer";

export default function DemoLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
