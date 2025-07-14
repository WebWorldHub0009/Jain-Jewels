import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/gold/g3.jpg";
import img2 from "../assets/images/gold/g6.jpg";
import img3 from "../assets/images/diamond/d3.jpg";
import img4 from "../assets/images/diamond/d8.jpg";
import img5 from "../assets/images/gold/g7.jpg";
import img6 from "../assets/images/antique/a8.jpg";
import img7 from "../assets/images/p1.jpg";
import img8 from "../assets/images/p1.jpg";
import img9 from "../assets/images/p1.jpg";
import { Link } from "react-router-dom";

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
    <img
      src={img1}
      alt="Jewellery 1"
      className="w-full h-[300px] object-cover rounded-md shadow-md"
    />
  </motion.div>
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={1}
    className="bg-white flex flex-col items-center justify-center text-center p-6 rounded-md shadow-md min-h-[300px]"
  >
    <h2 className="text-lg font-bold italiana-font uppercase mb-2 text-[#2C2C2C]">Up To 30% Off</h2>
    <p className="text-lg text-gray-700 mb-3 signature-font tracking-wider">
      Discover exquisite gold and diamond sets that radiate tradition and opulence.
    </p>
    <Link to='/contact'>
    <button className="cursor-pointer font-semibold bg-white border-[1px] border-black text-black px-5 py-2 text-xs uppercase hover:bg-black hover:text-white transition rounded-full">
      Get Enquiry
    </button>
    </Link>
  </motion.div>
  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
    <img
      src={img2}
      alt="Jewellery 2"
      className="w-full h-[300px] object-cover rounded-md shadow-md"
    />
  </motion.div>
</div>

{/* Second Row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <img
      src={img3}
      alt="Jewellery 3"
      className="w-full h-[220px] object-cover rounded-md shadow-md"
    />
  </motion.div>
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={1}
    className="bg-white flex flex-col items-center justify-center text-center p-6 rounded-md shadow-md min-h-[220px]"
  >
    <h2 className="text-lg font-bold uppercase mb-2 italiana-font text-[#2C2C2C]">Timeless Heritage</h2>
    <p className="text-lg text-gray-700 mb-3 signature-font tracking-wider">
      Inspired by royalty. Designed for modern elegance.
    </p>
    <Link to='/gallery'>
    <button className="bg-white text-black border-[1px] border-black font-semibold px-5 py-2 text-xs uppercase hover:bg-black hover:text-white transition rounded-full">
      Unveil Beauty
    </button>
    </Link>
  </motion.div>
  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
    <img
      src={img4}
      alt="Jewellery 4"
      className="w-full h-[220px] object-cover rounded-md shadow-md"
    />
  </motion.div>
</div>

{/* Third Row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  <div className="col-span-2 grid grid-cols-2 gap-4">
    <motion.img
      src={img5}
      alt="Jewellery 5"
      className="w-full h-[280px] object-cover rounded-md shadow-md"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
    <motion.img
      src={img6}
      alt="Jewellery 6"
      className="w-full h-[280px] object-cover rounded-md shadow-md"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
    />
  </div>
  <motion.div
    className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-md shadow-md min-h-[280px]"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={2}
  >
    <h2 className="text-lg font-bold uppercase mb-2 text-[#2C2C2C] italiana-font">Make A Statement</h2>
    <p className="text-lg text-gray-700 tracking-wider signature-font">
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
       <Link to='/about'>
        <button className="italiana-font cursor-pointer px-8 py-3 bg-white text-black border-[1px] border-black font-semibold rounded-full hover:bg-black hover:text-white transition duration-300 tracking-wide shadow-lg">
          Explore Our Legacy
        </button>
       </Link>
      </motion.div>
    </div>
  );
};

export default CollectionAbout;
