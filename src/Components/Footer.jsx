import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import logo from "../assets/images/logo.png";
import footerBg from "../assets/images/whychoose-bg.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="bg-cover bg-center text-gray-800 px-6 md:px-16 pt-20 pb-10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      {/* Glowing Accents */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-yellow-300 blur-[130px] opacity-10 rounded-full -z-10" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-yellow-300 blur-[150px] opacity-10 rounded-full -z-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm z-10 relative">
        {/* About */}
        <div className="flex flex-col space-y-3">
          <img src={logo} alt="Jain Jewellers Logo" className="w-[80px] md:w-[150px]" />
          <h4 className="text-gray-900 font-semibold mb-2">About Jain Jewellers</h4>
          <p className="leading-relaxed">
            Jain Jewellers, located in the heritage-rich Chandni Chowk, is trusted for hallmark-certified jewellery. We specialize in gold, kundan, antique, and custom-made pieces, reflecting decades of elegance, purity, and craftsmanship.
          </p>
          <div className="mt-4">
            <a
              href="https://jainjewels.in/webmail"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-yellow-500 text-yellow-700 rounded hover:bg-yellow-600 hover:text-white transition duration-300 text-sm font-medium"
            >
              Web Mail
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Collection", "/collection"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
              ["Documents", "/documents"],
            ].map(([text, link], i) => (
              <li key={i}>
                <Link to={link} className="hover:text-yellow-600 transition duration-300">
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-gray-900 font-semibold">Emails</h4>
          <ul className="mt-2 space-y-2">
            {["Info@jainjewels.in", "JainJewels4@gmail.com"].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 hover:text-yellow-600 transition duration-300"
                >
                  <FaEnvelope className="text-yellow-600" />
                  <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Collection */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Our Collection</h4>
          <ul className="space-y-2">
            {[
              "Gold Jewellery",
              "Kundan Sets",
              "Antique Collection",
              "Polki Bridal Wear",
              "Custom Designs",
              "Diamond Elegance",
              "Temple Jewellery",
              "Modern Fusion Styles",
            ].map((item, i) => (
              <li key={i}>
                <Link to="/collection" className="hover:text-yellow-600 transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Socials */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Our Address</h4>
          <address className="not-italic leading-relaxed mb-4">
            Building No.1153, Shop No.6-7, 2nd Floor,<br />
            Kucha Mahajani, Chandni Chowk,<br />
            Delhi – 110006
          </address>
          <div className="flex items-center gap-4 mb-4">
            <div><Translator /></div>
          </div>
          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.facebook.com/aakashgargjain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-yellow-600 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/jain_jewels_delhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-yellow-600 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@aakashgarg4797/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-yellow-600 transition"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-600 border-t border-gray-300 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Jain Jewellers. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-yellow-700 hover:text-yellow-600 transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
