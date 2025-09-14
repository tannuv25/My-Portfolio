"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-purple-100 shadow-md top-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-purple-600 cursor-pointer">
            tannuuv
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
