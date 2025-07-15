import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGem,
  FaCrown,
  FaStar,
  FaCertificate,
  FaMedal,
  FaAward,
  FaFireAlt,
  FaShieldAlt,
  FaRing,
  FaLeaf,
  FaHeart,
  FaFire,
  FaSun,
  FaYinYang,
  FaCheckCircle,
  FaSnowflake,
} from "react-icons/fa";
import HeroJewelleryCollection from "../Components/HeroJeweleryCollection";

import g1 from "../assets/images/gold/g1.jpg";
import g2 from "../assets/images/gold/g2.jpg";
import g3 from "../assets/images/gold/g3.jpg";
import g4 from "../assets/images/gold/g4.jpg";
import g5 from "../assets/images/gold/g5.jpg";
import g6 from "../assets/images/gold/g6.jpg";
import g7 from "../assets/images/gold/g7.jpg";
import g8 from "../assets/images/gold/g8.jpg";
import g9 from "../assets/images/gold/g9.jpg";

const goldItems = [
  {
    title: "24K Pure Gold Coin Necklace",
    image: g1,
    badge: "24K Pure Gold",
    icon: <FaCertificate className="text-yellow-600 text-xl" />,
    tag: "Luxury Investment",
    tagIcon: <FaGem className="text-yellow-400 text-sm" />,
  },
  {
    title: "18K Diamond Gold Ring",
    image: g2,
    badge: "Diamond Cut Clarity",
    icon: <FaRing className="text-pink-500 text-xl" />,
    tag: "Modern Romance",
    tagIcon: <FaSnowflake className="text-pink-400 text-sm" />,
  },
  {
    title: "22K Traditional Jhumka",
    image: g3,
    badge: "Ethnic Heritage",
    icon: <FaCrown className="text-purple-500 text-xl" />,
    tag: "Cultural Grace",
    tagIcon: <FaYinYang className="text-purple-400 text-sm" />,
  },
  {
    title: "22K Gold Kangan Pair",
    image: g4,
    badge: "Timeless Craft",
    icon: <FaShieldAlt className="text-red-500 text-xl" />,
    tag: "Heirloom Touch",
    tagIcon: <FaSun className="text-red-400 text-sm" />,
  },
  {
    title: "18K Rose Gold Pendant",
    image: g5,
    badge: "Modern Minimal",
    icon: <FaStar className="text-rose-400 text-xl" />,
    tag: "Everyday Style",
    tagIcon: <FaCheckCircle className="text-rose-300 text-sm" />,
  },
  {
    title: "22K Designer Bazuband",
    image: g6,
    badge: "Antique Finish",
    icon: <FaMedal className="text-orange-500 text-xl" />,
    tag: "Royal Detail",
    tagIcon: <FaCrown className="text-orange-400 text-sm" />,
  },
  {
    title: "20K Contemporary Gold Bracelet",
    image: g7,
    badge: "Bold Yet Refined",
    icon: <FaFireAlt className="text-amber-500 text-xl" />,
    tag: "Urban Chic",
    tagIcon: <FaFire className="text-amber-400 text-sm" />,
  },
  {
    title: "22K Antique Temple Haar",
    image: g8,
    badge: "Temple Inspired",
    icon: <FaAward className="text-green-600 text-xl" />,
    tag: "Spiritual Symbol",
    tagIcon: <FaLeaf className="text-green-500 text-sm" />,
  },
  {
    title: "18K Gold Mangalsutra",
    image: g9,
    badge: "Sacred Gold",
    icon: <FaGem className="text-emerald-500 text-xl" />,
    tag: "Traditional Bond",
    tagIcon: <FaStar className="text-emerald-400 text-sm" />,
  },
];

const GoldCollection = () => {
  return (
    <>
      <HeroJewelleryCollection />
      <div className="px-4 md:px-16 py-16 bg-gradient-to-b from-[#fdfbf7] to-white font-sans">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2C2C2C] italiana-font">
            Gold Collection
          </h1>
          <p className="mt-4 text-gray-700 text-xl md:text-2xl tracking-wider signature-font">
            Explore Jain Jewels’ premium range of pure gold jewelry — from bridal classics to everyday elegance.
          </p>
        </div>

        {/* Responsive Grid for all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goldItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300"
            >
              <div className="h-84 sm:h-84 md:h-80 lg:h-72 overflow-hidden">
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

export default GoldCollection;
