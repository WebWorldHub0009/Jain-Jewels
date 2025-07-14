import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/images/abouthero.jpg";

const shimmerText = {
  background: "linear-gradient(90deg, #D4AF37, #f5e7be, #D4AF37)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 3s linear infinite",
};

const HeroAbout = () => {
  return (
    <section
  className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center px-6 py-20 md:py-28"
  style={{ backgroundImage: `url(${heroImage})` }}
>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-0"></div>

      {/* Floating animated shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#D4AF37]/30 rounded-full blur-[100px] animate-float"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-center text-white"
      >
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 italiana-font"
          style={shimmerText}
        >
          Our Story, Your Legacy
        </h1>

        <motion.p
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="text-xl md:text-2xl tracking-widest leading-relaxed text-white signature-font mb-6"
        >
          With roots deep in tradition, Jain Jewellers blends timeless artistry
          with modern elegance. Each piece we craft tells a story of brilliance,
          devotion, and heritage.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <Link
            to="/gallery"
            className="inline-block px-8 py-3 bg-black text-white font-semibold border border-[#ffe89b] hover:bg-black hover:text-white transition-all duration-300 rounded-full tracking-wider shadow-lg"
          >
            View Our Gallery
          </Link>
        </motion.div>
      </motion.div>

      {/* Animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroAbout;
