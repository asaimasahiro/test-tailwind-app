"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Works', href: '/works' },
    { name: 'CV', href: '/cv' },
    { name: 'Exhibitions', href: '/exhibitions' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-10 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-900">
          Asai Masahiro
        </Link>
        <nav>
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
      </div>
    </header>
  );
};

export default Header;