import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import HamburgerIcon from "../assets/icons/hamburger.svg";
import CloseIcon from "../assets/icons/CloseIcon.svg";

const NavLink = ({ children }) => (
  <a
    href="#"
    className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full overflow-hidden fixed z-50">
      {/* Main Navbar */}
      <nav className="bg-white w-full px-4 sm:px-20 py-2.5 sm:py-3 flex items-center justify-between">

        {/* Left: Menu Button */}
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-md transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "bg-[#A7A7FF] border-indigo-200 text-indigo-700"
                : "border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="block sm:hidden">
              <img
                src={isMenuOpen ? CloseIcon : HamburgerIcon}
                alt="Menu"
                className="h-5 w-5"
              />
            </span>
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={Logo} alt="Logo" className="h-8 sm:h-10 w-auto hidden sm:block" />
        </div>

        {/* Right: CTA */}
        <div className="flex items-center">
          <button className="bg-black text-white px-5 py-2.5 text-sm  font-medium rounded-md hover:bg-[#54547E] active:scale-95 transform transition-all duration-200 ">
            Get a Quotation
          </button>
        </div>
      </nav>

      {/* Secondary Navbar (shows only when menu is open) */}
      {isMenuOpen && (
        <div className="bg-gray-50 flex flex-col sm:flex-row sm:justify-center gap-4 p-4 border-t border-gray-200">
          <NavLink>Services</NavLink>
          <NavLink>Career</NavLink>
          <NavLink>Our Team</NavLink>
          <NavLink>Our Works</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
