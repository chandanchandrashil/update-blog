import  { useState } from "react";
import {Link} from "react-router-dom"

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="#" className="hover:text-gray-300">
            Update Blog
          </a>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>

          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
        </nav>
        {/* Mobile Menu Button (Hidden on larger screens) */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu (Hidden on larger screens) */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-gray-800`}
      >
        <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
          Home
        </Link>
        <Link to="/about" className="block py-2 px-4 hover:bg-gray-700">
          About
        </Link>
        <Link to="/blog" className="block py-2 px-4 hover:bg-gray-700">
          Blog
        </Link>
        <Link
          to="/contact"
          href="#"
          className="block py-2 px-4 hover:bg-gray-700"
        >
          Contact
        </Link>
        <Link to="/login" className="block py-2 px-4 hover:text-gray-300">
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
