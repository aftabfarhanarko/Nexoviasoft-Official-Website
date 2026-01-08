import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
