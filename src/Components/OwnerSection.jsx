import React from "react";
import { FaPhoneAlt, FaEnvelope, FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import ownerImage from "../assets/images/owner/owner.png";

const testimonials = [
  {
    name: "Priya Kapoor",
    feedback:
      "Jain Jewels crafted a necklace for my wedding that became the highlight of the ceremony. Elegant, traditional, and timeless!",
  },
  {
    name: "Rahul Mehta",
    feedback:
      "Their diamond collection is stunning. The team was professional and helped me pick the perfect engagement ring.",
  },
  {
    name: "Sunita Agarwal",
    feedback:
      "I’ve been a customer for years. Every design feels personal and rich in heritage. Highly recommend Jain Jewels!",
  },
];

const OwnerSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 px-4 sm:px-8 overflow-hidden">
      {/* Watermark Heading */}
      <h1 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-[15vw] md:text-[10vw] text-[#D4AF37]/10 font-bold signature-font tracking-widest whitespace-nowrap pointer-events-none select-none z-0 leading-none">
        Jain Jewels
      </h1>

      {/* SVG background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 400"
      >
        <path
          fill="#D4AF37"
          d="M0,160 C480,320 1440,0 1920,160 L1920,400 L0,400 Z"
        ></path>
      </svg>

      {/* Heading */}
      <div className="flex justify-center relative z-10 mb-8">
        <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-full shadow text-white font-semibold text-sm sm:text-base">
          <FaQuoteLeft className="text-white text-base" />
          Meet Our Founder
        </div>
      </div>

      {/* Owner Thought + Contact */}
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Thought Section */}
        <motion.div
          className="bg-[#fafafa] flex-1 w-full rounded-2xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <img
              src={ownerImage}
              alt="Paras Jain - CEO"
              className="w-32 h-32 rounded-full object-fit border-4 border-[#D4AF37] shadow-md"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">
            Thought from Our Owner
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-5 leading-relaxed tracking-wider signature-font">
            "Leadership is not about titles, it's about impact."
          </p>
          <p className="text-black font-bold uppercase text-sm tracking-wide">
            — Paras Jain (CEO)
          </p>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="flex-1 w-full text-center md:text-left"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 italiana-font">
            Let’s Connect
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Got something in mind? Reach out and let’s build something timeless together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <a
              href="tel:+918512820222"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] text-white hover:bg-yellow-600 transition"
            >
              <FaPhoneAlt /> +91 85128 20222
            </a>
            <a
              href="mailto:info@jainjewels.in"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <FaEnvelope /> info@jainjewels.in
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="mt-20 relative z-10">
        <h3 className="text-center text-2xl font-semibold text-gray-900 italiana-font mb-6">
          Client Reflections
        </h3>
        <div className="overflow-hidden w-full">
          <div className="testimonial-slider flex gap-6 animate-scrollTestimonial">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg px-6 py-6 flex-shrink-0"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#D4AF37] text-3xl shadow-sm">
                    <FaUserCircle />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {testimonial.name}
                    </h4>
                    <div className="flex text-[#D4AF37] text-sm">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auto-scroll CSS */}
      <style>{`
        .animate-scrollTestimonial {
          display: flex;
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .testimonial-slider::-webkit-scrollbar {
          display: none;
        }

        .italiana-font {
          font-family: 'Italiana', serif;
        }

        .signature-font {
          font-family: 'Great Vibes', cursive;
        }
      `}</style>
    </section>
  );
};

export default OwnerSection;
