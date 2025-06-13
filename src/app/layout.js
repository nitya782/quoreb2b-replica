import './globals.css';
import { Quicksand } from 'next/font/google';
import Footer from "../components/footer";
import './globals.css';
import Cards from "../components/cards";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Customize as needed
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata = {
  title: "Quore B2B",
  description: "Welcome to Quore B2B",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Everything must go inside body */}
        {children}
        <Cards />
      <Footer />
      </body>
    </html>
  );
}

