import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-8 py-4">
      <div className="container mx-auto flex justify-between items-center px-8">
        <p className="text-sm">© 2024 Update Blog. All rights reserved.</p>
        <nav className="lg:flex md:flex lg:space-x-4 space-x-2">
          <a href="#" className="text-sm hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:text-gray-300">
            Terms of Service
          </a>
          <a href="#" className="text-sm hover:text-gray-300">
            Sitemap
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
