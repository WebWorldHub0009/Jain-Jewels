import React from "react";
import { FaGem } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

import modelImg from "../assets/images/jhumka.jpg";
import ringImg from "../assets/images/neckless.jpg";
import badgeIcon from "../assets/images/earings-1.jpg";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-[1300px] mx-auto grid md:grid-cols-3 items-start gap-4 relative"
      >
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-6xl italiana-font text-[#2C2C2C] leading-tight">
  Experience the <br />
  Brilliance of{" "}
  <span className="inline-flex items-center gap-2">
    Craftsmanship
    <motion.img
      src={badgeIcon}
      alt="badge"
      className="w-8 h-8 inline-block"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  </span>
</h1>

          <p className="text-xl text-gray-700 max-w-md tracking-widest signature-font">
            Discover a world where beauty meets craftsmanship, where every piece of jewelry tells a story.
          </p>

          {/* Button + Badge */}
          <div className="flex items-center gap-6 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-7 py-2.5 bg-[#2C2C2C] text-white text-sm rounded hover:bg-[#D4AF37] transition duration-300"
            >
              Shop Now <IoIosArrowForward />
            </motion.button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="border border-[#2C2C2C] px-4 py-2 rounded-full flex items-center gap-2 text-sm text-[#2C2C2C]"
            >
              <FaGem className="text-[#D4AF37]" />
              <span>100% Original</span>
            </motion.div>
          </div>
        </motion.div>

        {/* CENTER IMAGE WITH ANIMATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative flex justify-center translate-y-6 group"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.5 }}
            className="w-[250px] h-[380px] bg-[#EADFC4] overflow-hidden rounded-t-[999px] rounded-b-[0px] shadow-md relative transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#d4af37]/30"
          >
            <img
              src={modelImg}
              alt="Model"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />

            {/* Floating Diamond */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 80 }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-[#D4AF37] text-2xl"
            >
              <FaGem />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex justify-center -translate-y-6 group"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.5 }}
            className="w-[250px] h-[380px] overflow-hidden rounded-t-[0px] rounded-b-[999px] shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#d4af37]/30"
          >
            <img
              src={ringImg}
              alt="Ring"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </motion.div>

        {/* ANIMATED DIVIDER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute left-1/2 top-[28%] -translate-x-1/2 hidden md:flex flex-col items-center space-y-1 z-10"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-1 ${
                i % 2 === 0 ? "bg-[#D4AF37]" : "bg-[#2C2C2C]"
              } rounded-full`}
              style={{ height: `${6 + i * 2}px` }}
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
