"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Removed useState and useEffect imports as they will be managed in layout.tsx

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Works', href: '/works' },
    { name: 'CV', href: '/cv' },
    { name: 'Exhibitions', href: '/exhibitions' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"> {/* Increased z-index */}
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-900">
          Asai Masahiro
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-gray-800 hover:text-gray-900 ${pathname.startsWith(link.href) ? 'font-semibold border-b-2 border-gray-800' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu} // Use toggleMenu from props
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Drawer) */}
      <div
        className={`md:hidden fixed inset-0 bg-white/90 backdrop-blur-md z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu} // Use toggleMenu from props
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-bold text-gray-800 hover:text-gray-900 ${pathname.startsWith(link.href) ? 'border-b-2 border-gray-800' : ''}`}
              onClick={toggleMenu} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
