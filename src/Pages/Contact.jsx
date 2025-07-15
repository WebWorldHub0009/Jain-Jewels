import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaDochub,
} from "react-icons/fa";
import bgContact from "../assets/images/contact-bg.jpg";
import MapSection from "../Components/MapSection";
import HeroContact from "../Components/ContactHero";

const ContactPage = () => {
  return (
    <>
      <HeroContact />
      <section className="w-full min-h-screen py-16 flex flex-col lg:flex-row bg-[#f5eedb] text-[#2C2C2C]">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold italiana-font mb-6 border-b-4 border-[#83817b] inline-block pb-2">
                Let’s get in touch
              </h1>
              <p className="text-xl tracking-widest signature-font text-gray-700 mb-10">
                Reach out to Jain Jewels for custom orders, partnerships, or just to say hello.
              </p>

              <div className="space-y-6 text-sm sm:text-base text-gray-700">
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>+91 85128 20222</p>
                  <p>+91 98918 72601</p>
                  <p>+91 97112 96071</p>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>Info@jainjewels.in</p>
                  <p>JainJewels4@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p>
                    Building No.1153, Shop No.6-7, 2nd Floor,<br />
                    Kucha Mahajani, Chandni Chowk - 110006, Delhi, India
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-10 flex flex-wrap gap-4 text-xl text-[#2C2C2C]">
              <a href="https://www.facebook.com/aakashgargjain/" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/jain_jewels_delhi/" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@aakashgarg4797/videos" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition">
                <FaYoutube />
              </a>
              <a href="https://g.co/kgs/NdtZAV7" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition">
                <FaMapMarkerAlt />
              </a>
              <a href="https://www.justdial.com/Delhi/Jain-Jewels-Chandni-Chowk/011PX129-X129-110414210243-H5N8_BZDET" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition">
                <FaDochub />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM SECTION */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center"
        >
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgContact})` }}></div>
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* FORM */}
          <form
            action="https://formsubmit.co/info@jainjewels.in"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-16 text-white"
          >
            <h3 className="text-2xl font-bold uppercase border-b-2 border-white pb-2 mb-6 italiana-font">
              Contact Form
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />
              <textarea
                name="message"
                placeholder="Tell us what you're interested in"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-white p-2 focus:outline-none resize-none h-24 text-white placeholder-gray-300"
              ></textarea>
              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 bg-[#ffe89b] text-black font-semibold py-3 mt-4 rounded-full hover:bg-black hover:text-[#ffe89b] transition-all duration-300"
              >
                Send Message
              </button>
            </div>

            {/* HIDDEN INPUTS */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
          </form>
        </motion.div>
      </section>

      {/* MAP SECTION */}
      <MapSection />
    </>
  );
};

export default ContactPage;
