import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaUserTie, FaGem, FaStar, FaChevronDown } from 'react-icons/fa';
import aboutImg from '../assets/images/shop.jpg'; // Replace with Jain Jewels image
import aboutBg from '../assets/images/whychoose-bg.jpg'; // Replace if needed
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-white/90 via-gray-100/90 to-white/90 bg-[length:200%_200%] animate-[gradientFlow_15s_ease_infinite]"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#ffffff49]"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-700 mb-1">Welcome to Jain Jewels</p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug italiana-font">
            <span className="text-[#D4AF37]">Jain Jewels</span> – Crafting Legacy in Gold & Diamonds
          </h2>
          <p className="text-gray-600 text-xl max-w-md tracking-wider signature-font mt-3">
            For decades, we’ve celebrated tradition and elegance by designing exquisite jewellery that defines heritage and luxury.
          </p>
          <Link to="/collection">
            <button className="cursor-pointer mt-6 bg-[#D4AF37] hover:bg-[#ffe797] transition px-6 py-3 rounded-full text-white text-sm font-medium shadow-md">
              Explore Collection
            </button>
          </Link>

          {/* Services */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { title: 'Gold Ornaments', icon: <FaGem />, desc: 'Timeless Designs in 22K Gold' },
              { title: 'Diamond Collection', icon: <FaStar />, desc: 'Certified Brilliance & Clarity' },
              { title: 'Custom Jewellery', icon: <FaUserTie />, desc: 'Tailored to your Traditions' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="text-[#D4AF37] text-3xl transition-transform duration-300 hover:scale-110 hover:-rotate-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center items-center"
        >
          {/* Dotted Pattern */}
          <div className="absolute w-26 h-26 -top-6 -left-4 z-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" className="text-gray-400" fill="currentColor" />
              </pattern>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>

          {/* Tilted Image */}
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareColor="#fff" glareMaxOpacity={0.1}>
            <div className="relative z-10 w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutImg}
                alt="Jain Jewels Showcase"
                className="object-cover w-full h-auto"
              />
            </div>
          </Tilt>

          {/* Floating Cards */}
          <div className="absolute -top-6 -left-6 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20">
            <FaGem className="text-[#D4AF37]" />
            <div>
              <p className="font-semibold text-gray-800">5000+ Designs</p>
            </div>
          </div>

          <div className="absolute top-4 right-0 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20">
            <FaStar className="text-[#D4AF37]" />
            <p className="font-semibold text-gray-800">4.9 Trust Score</p>
          </div>

          <div className="absolute bottom-0 left-4 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl shadow-xl px-4 py-2 flex items-center gap-2 text-sm z-20">
            <FaUserTie className="text-[#D4AF37]" />
            <div>
              <p className="font-semibold text-gray-800">3 Generations</p>
              <p className="text-gray-500 text-xs">of Trust & Craft</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-10 flex justify-center relative z-10"
      >
        <FaChevronDown className="text-[#D4AF37] text-xl" />
      </motion.div>
    </section>
  );
};

export default AboutSection;
