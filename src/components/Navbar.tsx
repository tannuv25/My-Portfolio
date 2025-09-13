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
    <nav className="fixed w-full shadow-2xl z-50 bg-white border border-pink-100 top-0">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
      
          <div className="text-2xl font-bold text-purple-600 cursor-pointer">
            Tannuuv
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
