import React from "react";

// Category Icons
import braceletIcon from "../assets/images/popular/antique.png";
import chainIcon from "../assets/images/popular/diamond.png";
import earringIcon from "../assets/images/popular/gold.png";
import ringIcon from "../assets/images/popular/italian.png";
import necklaceIcon from "../assets/images/popular/jadaav.png";
import pendantIcon from "../assets/images/popular/polki.png";

// Banner Images
import offerBanner from "../assets/images/p1.jpg";
import braceletBanner from "../assets/images/p2.jpg";

const categories = [
  { img: braceletIcon, label: "BRACELETS", count: "27 Items" },
  { img: chainIcon, label: "CHAINS & DANGLES", count: "21 Items" },
  { img: earringIcon, label: "EARRINGS", count: "18 Items" },
  { img: ringIcon, label: "ENGAGEMENT RINGS", count: "9 Items" },
  { img: necklaceIcon, label: "NECKLACES", count: "15 Items" },
  { img: pendantIcon, label: "PENDANT", count: "22 Items" },
];

const PopularCategories = () => {
  return (
    <section className="w-full py-20 px-4 bg-white text-[#2C2C2C]">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-16">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FAF9F6] flex items-center justify-center overflow-hidden shadow-md floating-icon transition duration-500 group-hover:shadow-lg group-hover:shadow-[#D4AF37]/50">
                <img src={cat.img} alt={cat.label} className="w-14 h-14 object-contain" />
              </div>
              <p className="mt-3 text-sm font-semibold uppercase text-[#2C2C2C]">{cat.label}</p>
              <p className="text-xs text-gray-500">{cat.count}</p>
            </div>
          ))}
        </div>

        {/* Banners With Always Visible Text and Smooth Zoom */}
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
