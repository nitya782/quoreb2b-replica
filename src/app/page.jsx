import Footer from "../components/footer";
import './globals.css';
import Cards from "../components/cards";
import Contact from "../components/contact";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <main>
        <Contact />
        <Cards />
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}


