import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGem,
  FaCertificate,
  FaRing,
  FaCrown,
  FaStar,
  FaFireAlt,
  FaMedal,
  FaShieldAlt,
  FaAward,
  FaHeart,
  FaSnowflake,
  FaYinYang,
  FaLeaf,
  FaBolt,
  FaFire,
  FaSun,
  FaCheckCircle,
} from "react-icons/fa";
import HeroDiamondCollection from "../Components/HeroDiamondCollection";

import d1 from "../assets/images/diamond/d1.jpg";
import d2 from "../assets/images/diamond/d2.jpg";
import d3 from "../assets/images/diamond/d3.jpg";
import d4 from "../assets/images/diamond/d4.jpg";
import d5 from "../assets/images/diamond/d5.jpg";
import d6 from "../assets/images/diamond/d6.jpg";
import d7 from "../assets/images/diamond/d7.jpg";
import d8 from "../assets/images/diamond/d8.jpg";
import d9 from "../assets/images/diamond/d9.jpg";

const diamondItems = [
  {
    title: "18K Solitaire Diamond Ring",
    image: d1,
    badge: "Solitaire Certified",
    icon: <FaGem className="text-blue-600 text-xl" />,
    tag: "Timeless Promise",
    tagIcon: <FaHeart className="text-pink-500 text-sm" />,
  },
  {
    title: "Diamond Stud Earrings",
    image: d2,
    badge: "Cut Grade: Excellent",
    icon: <FaStar className="text-yellow-500 text-xl" />,
    tag: "Brilliant Shine",
    tagIcon: <FaSnowflake className="text-blue-300 text-sm" />,
  },
  {
    title: "Luxury Diamond Choker",
    image: d3,
    badge: "Princess Cut",
    icon: <FaCrown className="text-purple-500 text-xl" />,
    tag: "Regal Aura",
    tagIcon: <FaYinYang className="text-purple-400 text-sm" />,
  },
  {
    title: "18K Diamond Bracelet",
    image: d4,
    badge: "Tennis Design",
    icon: <FaRing className="text-pink-600 text-xl" />,
    tag: "Luxury Wrap",
    tagIcon: <FaLeaf className="text-green-500 text-sm" />,
  },
  {
    title: "Halo Diamond Pendant Set",
    image: d5,
    badge: "Halo Setting",
    icon: <FaAward className="text-teal-600 text-xl" />,
    tag: "Radiant Circle",
    tagIcon: <FaBolt className="text-teal-500 text-sm" />,
  },
  {
    title: "Classic Diamond Nose Pin",
    image: d6,
    badge: "Petite Elegance",
    icon: <FaCertificate className="text-rose-400 text-xl" />,
    tag: "Tiny Spark",
    tagIcon: <FaSun className="text-orange-400 text-sm" />,
  },
  {
    title: "Contemporary Diamond Mangalsutra",
    image: d7,
    badge: "Fusion Style",
    icon: <FaMedal className="text-orange-500 text-xl" />,
    tag: "Tradition Reimagined",
    tagIcon: <FaCheckCircle className="text-orange-400 text-sm" />,
  },
  {
    title: "Pear-Shaped Diamond Necklace",
    image: d8,
    badge: "Pear-Cut Masterpiece",
    icon: <FaShieldAlt className="text-green-500 text-xl" />,
    tag: "Elegant Drop",
    tagIcon: <FaFire className="text-red-500 text-sm" />,
  },
  {
    title: "Diamond Cocktail Ring",
    image: d9,
    badge: "Statement Luxury",
    icon: <FaFireAlt className="text-red-500 text-xl" />,
    tag: "Evening Glam",
    tagIcon: <FaStar className="text-yellow-500 text-sm" />,
  },
];

const DiamondCollection = () => {
  return (
    <>
      <HeroDiamondCollection />
      <div className="px-4 md:px-16 py-16 bg-gradient-to-b from-[#fdfbf7] to-white font-sans">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold italiana-font text-[#2C2C2C]">
            Diamond Collection
          </h1>
          <p className="mt-4 text-gray-700 text-xl md:text-2xl tracking-wider signature-font">
            Discover brilliance and elegance in every facet — explore Jain Jewels’ handcrafted diamond jewelry in 18K white, yellow & rose gold.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diamondItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300"
            >
              {/* Enlarged Image Section */}
              <div className="h-84 sm:h-72 md:h-80 lg:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Text Content */}
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

export default DiamondCollection;
