import React, { useState } from 'react';
import logo from '../../../public/images/image 2.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 mb-4 z-50 bg-white shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 relative pb-2">
        <div className="flex justify-between items-center py-5">
          {/* Desktop Left Nav */}
          <nav className="hidden md:flex gap-6 text-md font-medium text-black">
            <a href="/" className="hover:text-green-700">Home</a>
            <a href="/about" className="hover:text-green-700">About Center</a>
            <a href="/books" className="hover:text-green-700">Books</a>
            <a href="/gallery" className="hover:text-green-700">Gallery</a>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 bg-white rounded-full p-1 shadow-md">
            <img
              src={logo}
              alt="Maula Ali Research Centre Logo"
              width={64}
              height={64}
              className="rounded-full object-contain"
            />
          </div>

          {/* Desktop Right Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-black">
            <a href="/news" className="hover:text-green-700">News</a>
            <a href="/article" className="hover:text-green-700">Articles</a>
            <a href="/question" className="hover:text-green-700">Questions</a>
            <a href="/contact" className="hover:text-green-700">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2 text-sm font-medium text-black">
            <a href="/" className="block hover:text-green-700">Home</a>
            <a href="/about" className="block hover:text-green-700">About Center</a>
            <a href="/books" className="block hover:text-green-700">Books</a>
            <a href="/gallery" className="block hover:text-green-700">Gallery</a>
            <a href="/news" className="block hover:text-green-700">News</a>
            <a href="/article" className="block hover:text-green-700">Articles</a>
            <a href="/questions" className="block hover:text-green-700">Questions</a>
            <a href="/contact" className="block hover:text-green-700">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
