import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLink,
  FaCircleNotch,
  FaInfinity,
  FaLayerGroup,
  FaRegGem,
  FaDotCircle,
  FaAlignCenter,
  FaGripLinesVertical,
  FaShoePrints,
  FaStar,
  FaGem,
} from "react-icons/fa";

import g1 from "../assets/images/italian/i1.jpg";
import g2 from "../assets/images/italian/i2.jpg";
import g3 from "../assets/images/italian/i3.jpg";
import g4 from "../assets/images/italian/i4.jpg";
import g5 from "../assets/images/italian/i5.jpg";
import g6 from "../assets/images/italian/i6.jpg";
import g7 from "../assets/images/italian/i7.jpg";
import g8 from "../assets/images/italian/i8.jpg";
import g9 from "../assets/images/italian/i9.jpg";

import HeroItalianCollection from "../Components/HeroItalianCollection";

const italianItems = [
  {
    title: "Italian Rose Gold Chain",
    image: g1,
    badge: "Minimal Polish",
    icon: <FaLink className="text-rose-500 text-xl" />,
    tag: "18K Rose Gold",
    tagIcon: <FaRegGem className="text-amber-500 text-sm" />,
  },
  {
    title: "Geometric Italian Earrings",
    image: g2,
    badge: "Contemporary Cuts",
    icon: <FaCircleNotch className="text-indigo-600 text-xl" />,
    tag: "White Gold",
    tagIcon: <FaStar className="text-indigo-400 text-sm" />,
  },
  {
    title: "Two-Tone Italian Bracelet",
    image: g3,
    badge: "Dual Finish",
    icon: <FaInfinity className="text-gray-700 text-xl" />,
    tag: "Dual Tone",
    tagIcon: <FaGem className="text-gray-700 text-sm" />,
  },
  {
    title: "Italian Mesh Gold Necklace",
    image: g4,
    badge: "Mesh Texture",
    icon: <FaLayerGroup className="text-yellow-500 text-xl" />,
    tag: "18K Gold",
    tagIcon: <FaStar className="text-yellow-500 text-sm" />,
  },
  {
    title: "Classic Italian Hoops",
    image: g5,
    badge: "Polished Gold",
    icon: <FaRegGem className="text-orange-400 text-xl" />,
    tag: "Pure Gold",
    tagIcon: <FaRegGem className="text-orange-400 text-sm" />,
  },
  {
    title: "Italian Oval Pendant Set",
    image: g6,
    badge: "Elegant Ovals",
    icon: <FaDotCircle className="text-pink-500 text-xl" />,
    tag: "18K Design",
    tagIcon: <FaStar className="text-pink-400 text-sm" />,
  },
  {
    title: "Textured Italian Ring",
    image: g7,
    badge: "Hammer Finish",
    icon: <FaAlignCenter className="text-gray-800 text-xl" />,
    tag: "Hammer Polish",
    tagIcon: <FaGem className="text-gray-800 text-sm" />,
  },
  {
    title: "Italian Curb Chain Bracelet",
    image: g8,
    badge: "Bold Links",
    icon: <FaGripLinesVertical className="text-gray-500 text-xl" />,
    tag: "Premium Chain",
    tagIcon: <FaLink className="text-gray-500 text-sm" />,
  },
  {
    title: "Italian Gold Anklet",
    image: g9,
    badge: "Elegant Fit",
    icon: <FaShoePrints className="text-lime-600 text-xl" />,
    tag: "Comfort Fit",
    tagIcon: <FaShoePrints className="text-lime-500 text-sm" />,
  },
];

const ItalianJewelleryCollection = () => {
  return (
    <>
      <HeroItalianCollection />
      <div className="px-4 md:px-16 py-16 bg-gradient-to-b from-[#fffaef] to-[#fff7f7] font-sans">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2C2C2C] italiana-font">
            Italian Jewellery Collection
          </h1>
          <p className="mt-4 text-gray-700 text-xl md:text-2xl signature-font tracking-wider">
            Discover sleek modernity and timeless sophistication — crafted the Italian way.
          </p>
        </div>

        {/* Responsive Grid for All Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {italianItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300"
            >
              <div className="h-88 sm:h-72 md:h-80 lg:h-72 overflow-hidden">
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

export default ItalianJewelleryCollection;
