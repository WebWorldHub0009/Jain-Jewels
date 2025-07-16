import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <>
      <div className="fixed bottom-5 right-5 flex flex-col gap-4 z-50">
        {/* Call Button */}
        <a
          href="tel:+919891872601"
          title="Call Jain Jewels"
          className="w-14 h-14 flex items-center justify-center rounded-full
          bg-gradient-to-br from-[#019b53] to-green-900 text-white
          shadow-2xl ring-2 ring-white/20 transition-all duration-300
          hover:ring-offset-2 hover:scale-105 hover:rotate-2
          animate-float-slow"
        >
          <FaPhoneAlt size={20} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+919416511973"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-14 h-14 flex items-center justify-center rounded-full
          bg-gradient-to-br from-green-500 to-green-600 text-white
          shadow-2xl ring-2 ring-white/20 transition-all duration-300
          hover:ring-offset-2 hover:scale-105 hover:-rotate-2
          animate-float-slow"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Float Animation Styles */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingButtons;
