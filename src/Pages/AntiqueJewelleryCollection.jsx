import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFeatherAlt,
  FaGopuram,
  FaStar,
  FaBalanceScale,
  FaTint,
  FaLeaf,
  FaChessQueen,
  FaGem,
  FaCrown,
  FaHeart,
  FaPalette,
  FaTree,
  FaRegSnowflake,
  FaYinYang,
  FaFire,
  FaSun,
  FaGlobeAsia,
} from "react-icons/fa";

import g1 from "../assets/images/antique/a1.jpg";
import g2 from "../assets/images/antique/a2.jpg";
import g3 from "../assets/images/antique/a3.jpg";
import g4 from "../assets/images/antique/a4.jpg";
import g5 from "../assets/images/antique/a5.jpg";
import g6 from "../assets/images/antique/a6.jpg";
import g7 from "../assets/images/antique/a7.jpg";
import g8 from "../assets/images/antique/a8.jpg";
import g9 from "../assets/images/antique/a9.jpg";

import HeroAntiqueCollection from "../Components/HeroAntiqueJewellery";

const antiqueItems = [
  {
    title: "Antique Peacock Haar",
    image: g1,
    badge: "Peacock Motif",
    icon: <FaFeatherAlt className="text-blue-500 text-xl" />,
    tag: "Royal Aesthetic",
    tagIcon: <FaCrown className="text-blue-400 text-sm" />,
  },
  {
    title: "Vintage Temple Pendant Set",
    image: g2,
    badge: "Temple Carving",
    icon: <FaGopuram className="text-red-500 text-xl" />,
    tag: "Sacred Art",
    tagIcon: <FaGlobeAsia className="text-red-400 text-sm" />,
  },
  {
    title: "Antique Finish Chandbalis",
    image: g3,
    badge: "Royal Gold Polish",
    icon: <FaStar className="text-yellow-500 text-xl" />,
    tag: "Elegant Finish",
    tagIcon: <FaPalette className="text-yellow-400 text-sm" />,
  },
  {
    title: "Antique Bridal Waist Belt",
    image: g4,
    badge: "Layered Chainwork",
    icon: <FaBalanceScale className="text-gray-600 text-xl" />,
    tag: "Bridal Essential",
    tagIcon: <FaHeart className="text-pink-500 text-sm" />,
  },
  {
    title: "Gold Antique Nethi Chutti",
    image: g5,
    badge: "Ruby Inlay",
    icon: <FaTint className="text-rose-500 text-xl" />,
    tag: "Gem Accents",
    tagIcon: <FaFire className="text-rose-400 text-sm" />,
  },
  {
    title: "Antique Gold Kada Pair",
    image: g6,
    badge: "Floral Engraving",
    icon: <FaLeaf className="text-green-600 text-xl" />,
    tag: "Nature Inspired",
    tagIcon: <FaTree className="text-green-500 text-sm" />,
  },
  {
    title: "Vintage Lakshmi Vanki",
    image: g7,
    badge: "Lakshmi Icon",
    icon: <FaChessQueen className="text-orange-500 text-xl" />,
    tag: "Divine Beauty",
    tagIcon: <FaSun className="text-orange-400 text-sm" />,
  },
  {
    title: "Antique Jhumkas with Pearls",
    image: g8,
    badge: "Pearl Drop Finish",
    icon: <FaGem className="text-indigo-500 text-xl" />,
    tag: "Graceful Craft",
    tagIcon: <FaRegSnowflake className="text-indigo-400 text-sm" />,
  },
  {
    title: "Temple Heritage Necklace",
    image: g9,
    badge: "Heirloom Craft",
    icon: <FaCrown className="text-purple-600 text-xl" />,
    tag: "Cultural Legacy",
    tagIcon: <FaYinYang className="text-purple-400 text-sm" />,
  },
];

const AntiqueJewelleryCollection = () => {
  return (
    <>
      <HeroAntiqueCollection />
      <div className="px-4 md:px-16 py-16 bg-gradient-to-b from-[#fdfbf7] to-white font-sans">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2C2C2C] italiana-font">
            Antique Jewellery Collection
          </h1>
          <p className="mt-4 text-gray-700 text-xl md:text-2xl signature-font tracking-wider">
            Discover the charm of antique treasures — each piece is a tribute to India’s rich heritage and artistry.
          </p>
        </div>

        {/* Responsive Grid Layout for All Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {antiqueItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300"
            >
              <div className="h-96 sm:h-72 md:h-80 lg:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#2C2C2C] italic mb-3">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  {item.icon}
                  <span>{item.badge}</span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    {item.tagIcon}
                    <span>{item.tag}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="px-5 py-2 text-sm font-semibold bg-black text-white rounded-full hover:bg-gray-800 transition"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AntiqueJewelleryCollection;
