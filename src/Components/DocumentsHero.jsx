import React from "react";
import { motion } from "framer-motion";
import docHeroImage from "../assets/images/docbg2.avif"; // Replace with your image

const shimmerText = {
  background: "linear-gradient(90deg, #D4AF37, #f5e7be, #D4AF37)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 3s linear infinite",
};

const DocumentsHero = () => {
  return (
    <section
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center px-6 py-20 md:py-28"
      style={{ backgroundImage: `url(${docHeroImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0"></div>

      {/* Animated Shapes */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-[#D4AF37]/30 rounded-full blur-2xl animate-pulse-slow z-10"></div>
      <div className="absolute bottom-12 right-16 w-36 h-36 bg-[#D4AF37]/20 rounded-full blur-[100px] animate-float z-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-4xl text-center text-white"
      >
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 italiana-font"
          style={shimmerText}
        >
“Paper may fade, but trust doesn’t.”        </h1>

        {/* Quotations */}
        

        <p className="text-xl md:text-2xl text-white tracking-wider signature-font">
          Our certifications speak louder than claims.
        </p>
      </motion.div>

      {/* CSS Animations */}
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

export default DocumentsHero;
