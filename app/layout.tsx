"use client";

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

// Metadata is not allowed in client components, so remove it or move to a layout.js (server component)
// export const metadata: Metadata = {
//   title: "Asai Masahiro | Portfolio",
//   description: "The official website of Asai Masahiro",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {/* Overlay for dimming content */}
        <div
          className={`fixed inset-0 bg-white bg-opacity-50 z-40 transition-opacity duration-300 ${ // Changed to white overlay
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu} // Close menu when clicking overlay
        ></div>

        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <main id="main-content" className={`pt-20 flex-grow ${isMenuOpen ? 'blurred-content' : ''}`}> {/* Apply blurred-content class */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
