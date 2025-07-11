import React from "react";
import { motion } from "framer-motion";
import certified from "../assets/images/diamond-img.jpg";
import craftsmanship from "../assets/images/owner/platinum.jpg";
import custom from "../assets/images/owner/gold.avif";
import support from "../assets/images/p2.jpg";
import bg from "../assets/images/new-bg.jpg"; // ✅ New BG image path

const features = [
  {
    title: "Certified Purity",
    desc: "Hallmarked and tested to ensure the highest purity and trust.",
    img: certified,
  },
  {
    title: "Exceptional Craftsmanship",
    desc: "Skilled artisans blending tradition with modern elegance.",
    img: craftsmanship,
  },
  {
    title: "Custom Design",
    desc: "Tailored jewellery that reflects your personal story.",
    img: custom,
  },
  {
    title: "Lifetime Support",
    desc: "Repairs, polishing & guidance — anytime you need us.",
    img: support,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="w-full relative bg-center bg-cover py-24 px-4"
      style={{ backgroundImage: `url(${bg})` }} // ✅ New image applied here
    >
      <div className="absolute inset-0 bg-[#ffffff4f]"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#2C2C2C] mb-4 drop-shadow-lg italiana-font">
          Why Choose <span className="text-[#D4AF37] shimmer">Jain Jewelers?</span>
        </h2>
        <p className="text-gray-700 mb-16 text-lg md:text-xl max-w-2xl mx-auto font-sans tracking-widest signature-font">
          Experience trust, excellence, and timeless elegance with every piece we craft.
        </p>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.2)",
              }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image - 70% on md+, full on mobile */}
                <motion.div
                  className="md:w-[70%] h-56 md:h-auto"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 6,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Text - 30% */}
                <div className="p-6 md:w-[30%] bg-white flex flex-col justify-center text-left">
                  <h3 className="text-xl font-semibold text-[#2C2C2C] italiana-font mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 tracking-wide signature-font">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for shimmer effect */}
      <style>{`
        .shimmer {
          background: linear-gradient(90deg, #D4AF37, #f5e7be, #D4AF37);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
