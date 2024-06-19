import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gaurab magar",
  description: "gaurab magar portfolio created using nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
            <main className="">
              {children}
            </main>
          <Footer />
      </body>
    </html>
  );
}
