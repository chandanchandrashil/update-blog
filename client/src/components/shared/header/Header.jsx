import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { AuthContext } from "../../../providers/AuthProvider";

function Header() {
  const { user } = useContext(AuthContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            Update Blog
          </Link>
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

          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            </>
          )}
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
          isMobileMenuOpen ? "block " : "hidden"
        } bg-gray-600  pb-4 pl-4 pr-4 text-center`}
      >
        <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
          Home
        </Link>
        <Link to="/about" className="block py-2 px-4 hover:bg-gray-700">
          About
        </Link>

        <Link to="/contact" className="block py-2 px-4 hover:bg-gray-700">
          Contact
        </Link>
        {user ? (
          <>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
