import React from "react";
import { motion } from "framer-motion";
import statsImage1 from "../assets/images/n1.jpg";
import statsImage2 from "../assets/images/n2.jpg";
import bgDiamond from "../assets/images/bg-new.jpg"; // Background image

import { FaRegGem, FaSmileBeam, FaRing, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const stats = [
  { label: "Years of Legacy", value: "25+", icon: <FaRegGem className="text-4xl text-gray-600" /> },
  { label: "Happy Customers", value: "50K+", icon: <FaSmileBeam className="text-4xl text-gray-600" /> },
  { label: "Jewellery Sold", value: "200K+", icon: <FaRing className="text-4xl text-gray-600" /> },
  { label: "Artisan Experts", value: "100+", icon: <FaUsers className="text-4xl text-gray-600" /> },
];

const WebsiteStats = () => {
  return (
    <section
      className="w-full relative bg-cover bg-center bg-no-repeat py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${bgDiamond})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#ffffffd0]"></div>

      {/* Watermark */}
      <h1 className="italiana-font absolute text-[6rem] sm:text-[10rem] font-bold text-[#00000010] top-10 left-5 pointer-events-none z-90 uppercase tracking-widest italic hidden sm:block">
        ELEGANCE
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-20">

        {/* LEFT: Overlapping Images & Center Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center items-center min-h-[420px] sm:min-h-[480px]"
        >
          {/* Top Left Image */}
          <motion.div
            whileHover={{ scale: 1.05, zIndex: 30, y: -10 }}
            className="absolute -top-2 left-2 w-[300px] h-[250px] rounded-xl overflow-hidden shadow-xl transition-all duration-500"
          >
            <img src={statsImage1} alt="Jewelry 1" className="w-full h-full object-cover" />
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            whileHover={{ scale: 1.05, zIndex: 30, y: 10 }}
            className="absolute bottom-4 right-2 w-[300px] h-[250px] rounded-xl overflow-hidden shadow-xl transition-all duration-500"
          >
            <img src={statsImage2} alt="Jewelry 2" className="w-full h-full object-cover" />
          </motion.div>

          {/* Text Box */}
          <div className="relative bg-white/80 backdrop-blur-xl border border-[#f0e8d8] py-6 px-8 rounded-2xl shadow-xl z-20 text-center w-[280px] md:w-[320px]">
            <svg className="absolute -top-4 -left-4 w-16 h-16 opacity-10" fill="#D4AF37" viewBox="0 0 24 24">
              <path d="M12 0L15.09 8H24L17.45 12.36L20.54 20.36L12 15L3.45 20.36L6.54 12.36L0 8H8.91L12 0Z" />
            </svg>

            <p className="text-2xl text-black font-semibold mb-2 tracking-wider signature-font">Top Collection</p>
            <h3 className="text-base font-semibold text-[#2C2C2C] leading-snug tracking-wide italiana-font">
              Jewelry That Boosts Your Morals And Lights Up Your Day
            </h3>
            <Link to='/gallery'>
            <button className="mt-4 px-5 py-2 border border-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-all duration-300 text-sm font-semibold rounded-full">
              Showcase
            </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: Stats */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-5xl font-['Playfair_Display'] text-[#2C2C2C] mb-6 leading-snug italiana-font">
            Our <span className="text-black shimmer">Glorious Journey</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-xl leading-relaxed tracking-wide signature-font">
            Jain Jewellers has become a symbol of trust and timeless elegance. Every piece is a testament to excellence, reflecting our legacy of brilliance.
          </p>

          <div className="grid grid-cols-2 gap-6 sm:gap-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="p-4 bg-[#fffbf4] rounded-full shadow-md"
                >
                  {stat.icon}
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold text-[#2C2C2C]">{stat.value}</h3>
                  <p className="text-sm text-gray-600 tracking-wide uppercase">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Styles */}
      <style>{`
        .shimmer {
          background: linear-gradient(90deg, #D4AF37, #f3e3b3, #D4AF37);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        .shimmer-gold {
          color: #D4AF37;
        }

        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default WebsiteStats;
