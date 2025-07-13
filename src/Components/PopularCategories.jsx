import React from "react";
import { Link } from "react-router-dom";

// Category Icons
import italianIcon from "../assets/images/popular/italian.png";
import diamondIcon from "../assets/images/popular/diamond.png";
import goldIcon from "../assets/images/popular/gold.png";
import antiqueIcon from "../assets/images/popular/antique.png";
import jadaauIcon from "../assets/images/popular/jadaav.png";

// Banner Images
import offerBanner from "../assets/images/p1.jpg";
import braceletBanner from "../assets/images/p2.jpg";

const categories = [
  {
    img: italianIcon,
    label: "Italian Grace",
    subtext: "Luxury in Every Curve",
    path: "/collection/italian",
  },
  {
    img: diamondIcon,
    label: "Diamond Sparkle",
    subtext: "Shine That Lasts Forever",
    path: "/collection/diamond",
  },
  {
    img: goldIcon,
    label: "Golden Radiance",
    subtext: "Tradition Meets Style",
    path: "/collection/gold",
  },
  {
    img: antiqueIcon,
    label: "Antique Charm",
    subtext: "Vintage with a Soul",
    path: "/collection/antique",
  },
  {
    img: jadaauIcon,
    label: "Jadaau Royale",
    subtext: "Crafted for Queens",
    path: "/collection/jadaau",
  },
];

const PopularCategories = () => {
  return (
    <section className="w-full py-20 px-4 bg-[#fffcf5] text-[#2C2C2C]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold italiana-font mb-2 tracking-wide">
            JAIN JEWELS
          </h2>
          <p className="text-base sm:text-2xl text-gray-600 max-w-xl mx-auto signature-font tracking-widest">
            Explore our exclusive collections crafted with timeless elegance and radiant beauty. Every piece speaks a story of legacy and luxury.
          </p>
        </div>

        {/* Category Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16">
          {categories.map((cat, idx) => (
            <Link
              to={cat.path}
              key={idx}
              className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-[#FAF9F6] flex items-center justify-center overflow-hidden shadow-md floating-icon transition duration-500 group-hover:shadow-lg group-hover:shadow-black/50">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-semibold uppercase text-[#2C2C2C] text-center">{cat.label}</p>
              <p className="text-xs text-gray-500 text-center">{cat.subtext}</p>
            </Link>
          ))}
        </div>

        {/* Banners */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Banner */}
          <div className="relative overflow-hidden rounded-xl group shadow-md hover:shadow-xl transition duration-500">
            <img
              src={offerBanner}
              alt="Special Offer"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40 z-10"></div>
            <div className="absolute right-5 bottom-6 z-20 text-white text-right">
              <p className="text-xl sm:text-xl signature-font tracking-widest text-[#EFD9A5]">Timeless Designs</p>
              <h3 className="text-2xl sm:text-3xl font-bold italiana-font">Unveil the Art of Elegance</h3>
            </div>
          </div>

          {/* Right Banner */}
          <div className="relative overflow-hidden rounded-xl group shadow-md hover:shadow-xl transition duration-500">
            <img
              src={braceletBanner}
              alt="New Collection"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40 z-10"></div>
            <div className="absolute right-5 bottom-6 z-20 text-white text-right">
              <p className="text-xl sm:text-xl signature-font tracking-widest text-[#EFD9A5]">Crafted for Elegance</p>
              <h3 className="text-2xl sm:text-3xl font-bold italiana-font">Gold that Glows Gracefully</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
