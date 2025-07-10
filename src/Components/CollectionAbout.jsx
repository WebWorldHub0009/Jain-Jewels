import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/p1.jpg";
import img2 from "../assets/images/p1.jpg";
import img3 from "../assets/images/p1.jpg";
import img4 from "../assets/images/p1.jpg";
import img5 from "../assets/images/p1.jpg";
import img6 from "../assets/images/p1.jpg";
import img7 from "../assets/images/p1.jpg";
import img8 from "../assets/images/p1.jpg";
import img9 from "../assets/images/p1.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CollectionAbout = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 py-20 bg-[#fdfbf7]">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl italiana-font font-bold text-[#2C2C2C] mb-4">
          The Art of Jewellery
        </h2>
        <p className="text-gray-600 text-lg md:text-xl trackcing-wider signature-font">
          Where craftsmanship meets timeless luxury.
        </p>
      </motion.div>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src={img1} alt="Jewellery 1" className="w-full h-full object-cover rounded-md shadow-lg" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="bg-white flex flex-col items-center justify-center text-center p-8 rounded-md shadow-xl"
        >
          <h2 className="text-xl font-bold uppercase mb-2 text-[#2C2C2C]">Up To 50% Off</h2>
          <p className="text-sm text-gray-700 mb-4">
            Discover exquisite gold and diamond sets that radiate tradition and opulence.
          </p>
          <button className="bg-black text-white px-6 py-2 text-sm uppercase hover:bg-[#D4AF37] hover:text-black transition rounded-full">
            Shop Now
          </button>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <img src={img2} alt="Jewellery 2" className="w-full h-full object-cover rounded-md shadow-lg" />
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src={img3} alt="Jewellery 3" className="w-full h-full object-cover rounded-md shadow-lg" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="bg-white flex flex-col items-center justify-center text-center p-8 rounded-md shadow-xl"
        >
          <h2 className="text-xl font-bold uppercase mb-2 text-[#2C2C2C]">Timeless Heritage</h2>
          <p className="text-sm text-gray-700 mb-4">
            Inspired by royalty. Designed for modern elegance.
          </p>
          <button className="bg-black text-white px-6 py-2 text-sm uppercase hover:bg-[#D4AF37] hover:text-black transition rounded-full">
            Explore More
          </button>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <img src={img4} alt="Jewellery 4" className="w-full h-full object-cover rounded-md shadow-lg" />
        </motion.div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <motion.img
            src={img5}
            alt="Jewellery 5"
            className="w-full h-full object-cover rounded-md shadow-lg"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.img
            src={img6}
            alt="Jewellery 6"
            className="w-full h-full object-cover rounded-md shadow-lg"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          />
        </div>
        <motion.div
          className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-md shadow-xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h2 className="text-xl font-bold uppercase mb-2 text-[#2C2C2C]">Make A Statement</h2>
          <p className="text-sm text-gray-700">
            Bold, beautiful, and unforgettable — jewellery that defines you.
          </p>
        </motion.div>
      </div>

     

      {/* CTA Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-[#D4AF37] hover:text-black transition duration-300 tracking-wide shadow-lg">
          Explore Full Collection
        </button>
      </motion.div>
    </div>
  );
};

export default CollectionAbout;
