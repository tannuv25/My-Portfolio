
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold text-purple-600">tannuuv</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href} 
                className="text-gray-700 hover:text-purple-600 transition"
              >
                {link.name}
              </Link>
            ))}
            {/* <DarkModeToggle/> */}
            {/* View Resume Button (opens in browser) */}
            <a
              href="https://drive.google.com/file/d/1f2B9dJDmYc6Mze46tVklgqBf3PYeQv0w/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-3 space-y-2 shadow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-purple-600 transition"
            >
              {link.name}
            </a>
          ))}

          {/* View Resume in Mobile Menu */}
          <a
            href="https://drive.google.com/file/d/1f2B9dJDmYc6Mze46tVklgqBf3PYeQv0w/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition text-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
