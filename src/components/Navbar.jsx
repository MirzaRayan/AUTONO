// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Navbar flex absolute items-center justify-between w-full px-[7rem] lg:px-[7rem] md:px-[3rem] sm:px-[1.5rem] py-[1.5rem] font-light">
      <div className="Logo font-semibold text-xl tracking-[.5rem]">
        <Link to="/">AUTONO</Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden cursor-pointer z-20" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 translate-y-[-8px]' : ''}`}></div>
      </div>

      {/* Desktop navigation */}
      <div className="Navitems hidden md:flex items-center gap-12">
        {["technology", "about", "careers", "subscribe"].map((item, index) => {
          return (
            <Link
              to={`/${item}`}
              key={index}
              className={`${
                index === 3
                  ? "text-white bg-black px-4 py-1.5 rounded-lg"
                  : "text-black capitalize hover:text-red-200 transition-all duration-300"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      {/* Mobile navigation overlay */}
      <div className={`fixed inset-0 bg-white z-10 flex flex-col items-center justify-center transition-opacity duration-300 ${
        menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-8">
          {["technology", "about", "careers", "subscribe"].map((item, index) => {
            return (
              <Link
                to={`/${item}`}
                key={index}
                onClick={() => setMenuOpen(false)}
                className={`${
                  index === 3
                    ? "text-white bg-black px-6 py-2 rounded-lg"
                    : "text-black capitalize text-xl hover:text-red-200 transition-all duration-300"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;