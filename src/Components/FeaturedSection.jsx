import React from "react";
import { motion } from "framer-motion";
import model from "../assets/images/f1.jpg"; // left image
import product from "../assets/images/f2.jpg"; // right image
import { FaStar } from "react-icons/fa";

const FeaturedSection = () => {
  return (
    <section className="w-full py-20 px-4 bg-[#FDFBF7] overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Image Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full max-w-md"
        >
          <img
            src={model}
            alt="Elegant Model"
            className="rounded-2xl h-[500px] md:h-[400px] shadow-xl object-cover w-full"
          />
          {/* Rating */}
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm font-semibold text-gray-800">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#D4AF37]" />
            ))}
            <span className="ml-1 text-[12px] text-gray-500">(5/5)</span>
          </div>
        </motion.div>

        {/* Middle Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-xl"
        >
          <h2 className="signature-font tracking-wider text-3xl md:text-4xl font-['Playfair_Display'] text-[#2C2C2C] mb-4 leading-snug">
            The Art of <span className="text-[#D4AF37]">Radiant Refinement</span>
          </h2>
          <p className="italiana-fonttext-gray-600 text-base leading-relaxed tracking-wide mb-6">
            Discover timeless jewellery at Jain Jewellers — where every creation
            is crafted with passion, precision, and purpose. From radiant gold to
            elegant diamonds, each piece tells a story of excellence and trust.
          </p>
          <button className="mt-2 inline-block px-6 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full font-medium hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full max-w-sm"
        >
          <img
            src={product}
            alt="Golden Ring"
            className="rounded-xl h-[300px] shadow-lg object-cover w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
