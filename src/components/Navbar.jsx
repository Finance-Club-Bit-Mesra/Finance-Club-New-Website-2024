"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation ,Link} from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const LINKS = [
    { id: "/", name: "Home" },
    { id: "/#about", name: "About" },
    { id: "/#events", name: "Events" },
    { id: "/publications", name: "Publication" },
    { id: "/team", name: "Team" },
    { id: "/#contact", name: "Contact" },
  ];

  const scrollToSection = (hash) => {
    if (!hash) return;

    const sectionId = hash.replace("#", "");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (link) => {
    const [path, hash] = link.split("#");

    if (location.pathname !== path) {
      navigate(path, { replace: true });

      if (hash) {
        setTimeout(() => scrollToSection(`#${hash}`), 100);
      }
    } else {
      if (hash) {
        scrollToSection(`#${hash}`);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-md"
          : "lg:bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center py-4 px-2">
            <img src="/fc_2.png" alt="Logo" className="h-10 w-auto mr-2" />
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`px-3 py-2 rounded-md text-md font-medium ${
                  isScrolled
                    ? "text-gray-800 hover:text-white hover:bg-gray-700"
                    : "text-gray-800 hover:text-white hover:bg-gray-700"
                } transition-all duration-300`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              to={"/login"}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                isScrolled
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-white text-green-600 hover:bg-green-500 hover:text-white"
              } transition-all duration-300`}
            >
              Join Us
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? "text-gray-700 hover:text-black hover:bg-gray-100"
                  : "text-gray-500 hover:text-white hover:bg-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-all duration-300`}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isScrolled
                  ? "text-gray-700 hover:text-black hover:bg-gray-400"
                  : "text-black hover:text-white hover:bg-gray-700"
              } transition-all duration-300`}
            >
              {link.name}
            </button>
          ))}
          <Link
            to={"/login"}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isScrolled
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-white text-green-600 hover:bg-green-500 hover:text-white"
            } transition-all duration-300`}
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
