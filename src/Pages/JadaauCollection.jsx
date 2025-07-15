import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMedal,
  FaGem,
  FaCrown,
  FaCertificate,
  FaStar,
  FaShieldAlt,
  FaTrophy,
  FaAward,
  FaCheckCircle,
  FaLeaf,
  FaFire,
  FaYinYang,
  FaSun,
  FaHeart,
  FaFeather,
  FaBolt,
} from "react-icons/fa";
import HeroJadauJewellery from "../Components/HeroJadaauJewellery";

// Images
import g1 from "../assets/images/jadaau/j1.jpg";
import g2 from "../assets/images/jadaau/j2.jpg";
import g3 from "../assets/images/jadaau/j3.jpg";
import g4 from "../assets/images/jadaau/j4.jpg";
import g5 from "../assets/images/jadaau/j5.jpg";
import g6 from "../assets/images/jadaau/j6.jpg";
import g7 from "../assets/images/jadaau/j7.jpg";
import g8 from "../assets/images/jadaau/j8.jpg";
import g9 from "../assets/images/jadaau/j9.jpg";

const jadaauItems = [
  {
    title: "Royal Jadaau Choker Set",
    image: g1,
    badge: "Certified Polki Work",
    icon: <FaMedal className="text-yellow-500 text-xl" />,
    tag: "Regal Charm",
    tagIcon: <FaLeaf className="text-green-600 text-sm" />,
  },
  {
    title: "Heritage Jadaau Earrings",
    image: g2,
    badge: "Artisan Crafted",
    icon: <FaCrown className="text-pink-500 text-xl" />,
    tag: "Cultural Grace",
    tagIcon: <FaYinYang className="text-purple-400 text-sm" />,
  },
  {
    title: "Jadaau Maang Tikka",
    image: g3,
    badge: "Temple Style Finish",
    icon: <FaGem className="text-purple-600 text-xl" />,
    tag: "Divine Beauty",
    tagIcon: <FaSun className="text-orange-400 text-sm" />,
  },
  {
    title: "Jadaau Necklace & Earrings Set",
    image: g4,
    badge: "Bridal Premium",
    icon: <FaCertificate className="text-green-600 text-xl" />,
    tag: "Elegant Radiance",
    tagIcon: <FaFeather className="text-pink-400 text-sm" />,
  },
  {
    title: "Antique Jadaau Hathphool",
    image: g5,
    badge: "Handcrafted Beauty",
    icon: <FaStar className="text-orange-400 text-xl" />,
    tag: "Vintage Bloom",
    tagIcon: <FaHeart className="text-red-400 text-sm" />,
  },
  {
    title: "Classic Jadaau Bangles",
    image: g6,
    badge: "Legacy Design",
    icon: <FaShieldAlt className="text-red-500 text-xl" />,
    tag: "Cultural Glow",
    tagIcon: <FaFire className="text-red-500 text-sm" />,
  },
  {
    title: "Bridal Jadaau Bajuband",
    image: g7,
    badge: "Deity Motif Art",
    icon: <FaTrophy className="text-yellow-600 text-xl" />,
    tag: "Sacred Craft",
    tagIcon: <FaCheckCircle className="text-green-500 text-sm" />,
  },
  {
    title: "Temple Style Jadaau Haar",
    image: g8,
    badge: "South Heritage Touch",
    icon: <FaAward className="text-amber-500 text-xl" />,
    tag: "Traditional Legacy",
    tagIcon: <FaBolt className="text-amber-500 text-sm" />,
  },
  {
    title: "Jadaau Nath (Nose Ring)",
    image: g9,
    badge: "Floral Luxury",
    icon: <FaCheckCircle className="text-emerald-500 text-xl" />,
    tag: "Feminine Grace",
    tagIcon: <FaHeart className="text-rose-400 text-sm" />,
  },
];

const JadaauCollection = () => {
  return (
    <>
      <HeroJadauJewellery />
      <div className="px-4 md:px-16 py-16 bg-gradient-to-b from-[#fdfbf7] to-white font-sans">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2C2C2C] italiana-font">
            Jadaau Collection
          </h1>
          <p className="mt-4 text-gray-700 text-xl md:text-2xl signature-font tracking-wider">
            Experience the timeless beauty of Jadaau jewellery — handcrafted elegance blending tradition and artistry.
          </p>
        </div>

        {/* Responsive Grid for All Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {jadaauItems.map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300"
    >
      {/* Bigger Image */}
      <div className="h-84 sm:h-72 md:h-80 lg:h-72 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
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

export default JadaauCollection;
