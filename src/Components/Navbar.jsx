import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoDiamondOutline, IoChevronDownOutline } from "react-icons/io5";

const ElegantNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Collection",
      dropdown: true,
      items: [
        { name: "Necklaces", path: "/collection/necklaces" },
        { name: "Earrings", path: "/collection/earrings" },
        { name: "Bracelets", path: "/collection/bracelets" },
        { name: "Rings", path: "/collection/rings" },
        { name: "Anklets", path: "/collection/anklets" },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Documents", path: "/documents" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@aakashgarg4797/videos" },
    { icon: <FaInstagram />, url: "https://www.facebook.com/aakashgargjain/" },
  ];

  return (
    <>
      {/* Top Strip */}
      <div className="w-full bg-[#FDFDFD] border-b border-gray-200 text-xs text-[#2C2C2C] py-1 px-4 text-center tracking-wide">
        <span>✨ Luxury crafted jewellery. Free shipping on orders above ₹5,000 ✨</span>
      </div>

      {/* Main Navbar */}
      <header className="w-full z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Left Nav */}
          <div className="hidden md:flex gap-6 text-[#2C2C2C] text-sm font-medium">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span className="cursor-pointer flex items-center gap-1 hover:text-[#D4AF37] transition">
                    {link.name}
                    <IoChevronDownOutline className="mt-[1px] text-sm group-hover:rotate-180 transition-transform duration-300" />
                  </span>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-md shadow-md border border-gray-100 z-10">
                      {link.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-[#2C2C2C] hover:bg-[#F5EFE6] hover:text-[#D4AF37] transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-[#D4AF37] transition relative after:block after:h-[2px] after:bg-[#D4AF37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2 text-[#2C2C2C] font-bold text-xl tracking-wide">
            <IoDiamondOutline className="text-[#D4AF37] text-2xl" />
            <span className="uppercase">JAIN JEWELS</span>
          </div>

          {/* Right: Search + Social */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-1.5 pr-9 text-sm rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none placeholder:text-sm"
              />
              <FaSearch className="absolute right-3 top-2.5 text-[#D4AF37] text-sm" />
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 text-[#2C2C2C] ml-2">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition text-lg"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-xl text-[#2C2C2C]" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white px-4 py-4 space-y-4 text-[#2C2C2C] border-t border-gray-200">
            <ul className="space-y-2">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <span className="font-medium flex items-center gap-1">
                      {link.name} <IoChevronDownOutline className="text-sm" />
                    </span>
                    <ul className="pl-4 mt-1 space-y-1 text-sm">
                      {link.items.map((item) => (
                        <li key={item.name}>
                          <Link to={item.path} onClick={toggleMenu}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={toggleMenu}
                      className="block text-sm hover:text-[#D4AF37]"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className="flex gap-4 mt-3 text-lg">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default ElegantNavbar;
