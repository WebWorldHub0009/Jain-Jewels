import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Import images for leadership
import ankur from "../assets/images/owner/ankur.jpg";
import sandeep from "../assets/images/owner/sandeep.jpg";
import vikas from "../assets/images/owner/vikas.jpg";
import nilesh from "../assets/images/owner/nilesh.jpg";

// Import images for creative team
import akash from "../assets/images/owner/akash.jpg";
import bhawna from "../assets/images/owner/bhawna.jpg";
import jitender from "../assets/images/owner/jitender.jpg";
import satish from "../assets/images/owner/satish.jpg";
import mukesh from "../assets/images/owner/mukesh.jpg";
import yogendra from "../assets/images/owner/yogendra.jpg";

// Background image import
import teamBg from "../assets/images/bg-team.jpg";

const leadershipTeam = [
  {
    name: "Ankur Jain",
    position: "CEO",
    image: ankur,
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
  {
    name: "Sandeep Sharma",
    position: "Manager",
    image: sandeep,
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
  {
    name: "Vikas Kumar",
    position: "Accountant",
    image: vikas,
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
  {
    name: "Nilesh Jain",
    position: "Accountant",
    image: nilesh,
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
];

const creativeTeam = [
  {
    name: "Akash Garg",
    position: "Team Member",
    image: akash,
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
  {
    name: "Bhawna Gupta",
    position: "Team Member",
    image: bhawna,
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
  {
    name: "Jitender Kumar",
    position: "Team Member",
    image: jitender,
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
  {
    name: "Satish Yadav",
    position: "Team Member",
    image: satish,
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
  {
    name: "Mukesh Yadav",
    position: "Team Member",
    image: mukesh,
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
  {
    name: "Yogendra Kumar",
    position: "Team Member",
    image: yogendra,
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
];

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function OurTeam() {
  return (
    <section
      className="py-20 px-4 md:px-20 text-[#2C2C2C] font-sans bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${teamBg})` }}
    >
      {/* Section Header */}
      <div className="text-center mb-4 rounded-xl py-10 px-4 backdrop-blur-sm">
        <h4 className="text-sm text-[#D4AF37] uppercase tracking-widest font-semibold mb-2 italiana-font">
          Jain Jewels
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold italiana-font mb-4">
          Meet the Team Behind{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#f0e6c0] to-[#D4AF37] bg-clip-text text-transparent">
            JAIN JEWELS
          </span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-xl md:text-2xl tracking-wider signature-font">
          From visionary leadership to artistic designers, our team unites heritage and elegance to craft timeless jewelry.
        </p>
      </div>

      {/* Leadership Team */}
      <div className="mb-20">
        <h3 className="italiana-font text-xl md:text-2xl font-semibold text-[#2C2C2C] mb-8 text-center uppercase tracking-wide">
          Core Leadership
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-3 text-center "
            >
              <motion.div
                variants={floatAnimation}
                animate="animate"
                className="w-28 h-28 flex items-center justify-center bg-white border border-[#f0e6c0] shadow-md rounded-full overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
              </motion.div>
              <h4 className="font-semibold text-lg text-[#2C2C2C]">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.position}</p>
              <div className="flex gap-4 mt-2 text-xl text-gray-400">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition">
                  <FaLinkedin />
                </a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#3b5998] transition">
                  <FaFacebookF />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#1da1f2] transition">
                  <FaXTwitter />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Creative Team */}
      <div>
        <h3 className="italiana-font text-xl md:text-2xl font-semibold text-[#2C2C2C] mb-8 text-center uppercase tracking-wide">
          Creative Team
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 justify-items-center">
          {creativeTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-2 text-center "
            >
              <motion.div
                variants={floatAnimation}
                animate="animate"
                className="w-24 h-24 flex items-center justify-center  rounded-full overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
              </motion.div>
              <h4 className="font-semibold text-md text-[#2C2C2C]">{member.name}</h4>
              <p className="text-xs text-gray-600">{member.position}</p>
              <div className="flex gap-3 mt-2 text-lg text-gray-400">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition">
                  <FaLinkedin />
                </a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#3b5998] transition">
                  <FaFacebookF />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#1da1f2] transition">
                  <FaXTwitter />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
