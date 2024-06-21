import { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { AuthContext } from "../../../providers/AuthProvider";
import updateBlog from "/public/updateBlog.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const { user } = useContext(AuthContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="text-gray-600 border-b-[1px]">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <NavLink to="/" className="hover:text-gray-300">
            <img
              className="w-36 relative flex-1 object-contain"
              src={updateBlog}
              alt="update blog"
            />
          </NavLink>
        </div>
        {/* Navigation Links */}
        <nav className="hidden text-md font-semibold md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-900" : "hover:text-gray-800"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-900" : "hover:text-gray-800"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-900" : "hover:text-gray-800"
            }
          >
            Contact
          </NavLink>
          {user ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-blue-900" : "hover:text-gray-300"
                }
              >
                Dashboard
              </NavLink>
              <LogoutButton />
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-900" : "hover:text-gray-300"
                }
              >
                Login
              </NavLink>
            </>
          )}
        </nav>
        {/* Mobile Menu Button (Hidden on larger screens) */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-gray-700 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu (Hidden on larger screens) */}
      <div
        className={`fixed top-0 right-0 h-full font-semibold bg-blue-300 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-3/4 md:hidden z-50 text-center`}
      >
        {/* Close Button */}
        <button
          className="text-gray-700 hover:text-white focus:outline-none absolute top-4 right-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>
        <div className="mt-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block py-2 px-4 bg-gray-700 text-white"
                : "block py-2 px-4 hover:bg-gray-700"
            }
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block py-2 px-4 bg-gray-700 text-white"
                : "block py-2 px-4 hover:bg-gray-700"
            }
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block py-2 px-4 bg-gray-700 text-white"
                : "block py-2 px-4 hover:bg-gray-700"
            }
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
          {user ? (
            <LogoutButton />
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-4 bg-gray-700 text-white"
                  : "block py-2 px-4 hover:bg-gray-700"
              }
              onClick={handleLinkClick}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
