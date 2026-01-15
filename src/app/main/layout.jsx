import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      {children}
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
