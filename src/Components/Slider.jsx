import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Desktop Images
import jj1 from "../assets/images/s6hd.png";
import jj2 from "../assets/images/s2hd.png";
import jj3 from "../assets/images/s3hd.jpg";
import jj4 from "../assets/images/s4hd.png";

// Mobile Images
import jm1 from "../assets/images/ms1.jpg";
import jm2 from "../assets/images/ms2.jpg";
import jm3 from "../assets/images/ms3.jpg";
import jm4 from "../assets/images/ms4.jpg";
import { Link } from "react-router-dom";

// Slides
const jainSlidesDesktop = [
  {
    image: jj1,
    title: "Luxury That Feels Effortless Always",
    description:
      "Crafted with precision and care, our jewellery ensures a smooth, lightweight feel that embraces your skin all day while radiating unmatched elegance and timeless luxury.",
  },
  {
    image: jj2,
    title: "Designed To Reflect Your Inner Glow",
    description:
      "Designed for those who value detail, our finely polished surfaces and ergonomic contours guarantee superior comfort along with a look that’s bold, refined, and unforgettable.",
  },
  {
    image: jj3,
    title: "Shine With Grace And Quiet Power",
    description:
      "Experience jewellery that looks grand and feels gentle. Our carefully balanced designs combine style with comfort, making them perfect for both daily wear and special moments.",
  },
  {
    image: jj4,
    title: "Elegance That Moves With You Daily",
    description:
      "Feel the difference in every detail — from smooth finishes to secure fittings, our pieces blend royal appeal with wearable ease for a look that’s as graceful as it is enduring.",
  },
];



const jainSlidesMobile = [
  {
    image: jm1,
    title: "Golden Rings for Every Special Occasion",
    description: "Grace, glow, and grandeur on every screen you hold.",
  },
  {
    image: jm2,
    title: "Timeless Jewellery Crafted with Pure Love",
    description: "Shine bright, sparkle endlessly with our iconic touch.",
  },
  {
    image: jm3,
    title: "Bold Brilliance in Every Elegant Design",
    description: "Where minimal elegance meets timeless majestic beauty.",
  },
  {
    image: jm4,
    title: "Wear the Legacy, Carry the Tradition",
    description: "A heritage of love crafted into every masterpiece.",
  },
];


const JainJewelsSliderCore = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % slides.length);
        setAnimating(true);
      }, 100);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden z-[99] font-sans">
      {/* Background Image */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: animating ? 1.08 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4 }}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentImage].image})`,
          }}
        />
      </AnimatePresence>

      {/* Overlay Content */}
      <div className="absolute inset-0  z-10 flex items-center justify-between md:justify-end px-6 md:px-20">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=" max-w-xl text-gray-100 text-center md:text-left md:text-black "
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 italic font-[500] tracking-wide font-serif"
              style={{ fontFamily: `'Great Vibes', cursive` }}>
            {slides[currentImage].title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 drop-shadow-md leading-relaxed font-light">
            {slides[currentImage].description}
          </p>
          <Link to='/about'>
          <button className="cursor-pointer border px-6 py-2 rounded-sm uppercase tracking-wider transition duration-300
  text-white border-white hover:bg-white hover:text-black 
  md:text-black md:border-black md:hover:bg-gray-100 md:hover:text-black">
  Know More
</button>
          </Link>

        </motion.div>
      </div>
    </section>
  );
};

const JainJewelsSlider = () => {
  return (
    <>
      {/* Desktop & Tablet */}
      <div className="hidden md:block">
        <JainJewelsSliderCore slides={jainSlidesDesktop} />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <JainJewelsSliderCore slides={jainSlidesMobile} />
      </div>
    </>
  );
};

export default JainJewelsSlider;
