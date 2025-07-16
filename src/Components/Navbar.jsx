import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoDiamondOutline, IoChevronDownOutline } from "react-icons/io5";
import logo from "../assets/images/jjlogo.png";

const ElegantNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // mobile dropdown state
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false); // desktop dropdown state

  const [searchQuery, setSearchQuery] = useState("");
  const navRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Collection",
      dropdown: true,
      items: [
        { name: "Jadaau", path: "/collection/jadaau" },
        { name: "Diamond Jewellery", path: "/collection/diamond" },
        { name: "Gold Jewellery", path: "/collection/gold" },
        { name: "Antique Jewellery", path: "/collection/antique" },
        { name: "Italian Collection", path: "/collection/italian" },
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
      {/* Top Notice */}
      <div className="w-full bg-[#FDFDFD] border-b border-gray-200 text-xs text-[#2C2C2C] py-1 px-4 text-center tracking-wide">
        ✨ Luxury crafted jewellery. Free shipping on orders above ₹5,000 ✨
      </div>

      {/* Header */}
      <header className="w-full z-[100] bg-white shadow-md border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-[#2C2C2C] text-sm font-medium relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <span className="flex items-center gap-1 hover:text-[#D4AF37] transition">
                    {link.name}
                    <IoChevronDownOutline className="mt-[1px] text-sm group-hover:rotate-180 transition-transform duration-300" />
                  </span>
                  <div
                    className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-md border border-gray-100 z-50 transition-all duration-300 ${
                      desktopDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
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

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-1.5 pr-9 text-sm rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none placeholder:text-sm"
              />
              <button type="submit">
                <FaSearch className="absolute right-3 top-2.5 text-[#D4AF37] text-sm" />
              </button>
            </form>

            <div className="flex gap-3 text-[#2C2C2C] ml-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D4AF37] text-lg"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-xl text-[#2C2C2C] z-50" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>

        {/* Mobile Nav Panel */}
        <div
          ref={navRef}
          className={`fixed top-0 left-0 h-screen w-[85%] max-w-xs bg-white z-99 transform transition-transform duration-500 ease-in-out shadow-lg border-r border-gray-200 p-4 overflow-y-auto ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo + Close */}
          <div className="flex justify-between items-center mb-4">
            <img src={logo} alt="Logo" className="w-10" />
            <FaTimes
              className="text-xl cursor-pointer text-[#2C2C2C]"
              onClick={toggleMenu}
            />
          </div>

          <hr className="border-gray-200 mb-4" />

          {/* Mobile Links */}
          <ul className="space-y-4 text-[#2C2C2C] text-sm font-medium">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name}>
                  <div
                    onClick={() => toggleDropdown(link.name)}
                    className="flex items-center justify-between cursor-pointer hover:text-[#D4AF37] transition-all duration-200"
                  >
                    {link.name}
                    <IoChevronDownOutline
                      className={`transition-transform duration-300 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <ul
                    className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                      openDropdown === link.name ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    {link.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          onClick={() => {
                            toggleMenu();
                            setOpenDropdown(null);
                          }}
                          className="block py-1 hover:text-[#D4AF37]"
                        >
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
                    className="block hover:text-[#D4AF37] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="my-4 border-t border-gray-200" />

          {/* Contact */}
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>Email:</strong> contact@jainjewels.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98918 72601
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6 text-lg">
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
      </header>
    </>
  );
};

export default ElegantNavbar;
