import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";


import img1 from "../assets/images/advertise-1.jpg";
import img2 from "../assets/images/advertise-2.jpg";
import img3 from "../assets/images/advertise-3.jpg";
import img4 from "../assets/images/advertise-4.jpg";
import img5 from "../assets/images/advertise-8.jpg";
import img6 from "../assets/images/advertise-5.jpg";
import img7 from "../assets/images/advertise-6.jpg";
import img8 from "../assets/images/advertise-7.jpg";
import img9 from "../assets/images/advertise-hindi-2.jpg";
import img10 from "../assets/images/advertise-hindi.jpg";
import img11 from "../assets/images/earings-1.jpg";
import img12 from "../assets/images/group.jpg";
import img13 from "../assets/images/group2.jpg";
import img14 from "../assets/images/jain-image.jpg";
import img15 from "../assets/images/catalogue/cat1.jpg";
import img16 from "../assets/images/catalogue/cat2.jpg";
import img17 from "../assets/images/catalogue/cat4.jpg";
import img18 from "../assets/images/catalogue/cat5.jpg";
import img19 from "../assets/images/catalogue/cat6.jpg";

import HeroGallery from "../Components/GalleryHero";

const galleryImages = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img14 },
  { src: img15 },
  { src: img16 },
  { src: img17 },
  { src: img18 },
  { src: img19 },
];

const PremiumGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <HeroGallery />

      <section className="w-full bg-[#FAF9F6] py-20 px-6 text-[#2C2C2C]">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-5xl md:text-6xl italiana-font text-[#5a4d23] mb-3">
            A Glimpse Into Our World of Elegance
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 signature-font tracking-widest">
            Discover timeless styles, crafted with passion and precision
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 max-w-7xl mx-auto">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl shadow-md shadow-[#D4AF37]/30 break-inside-avoid relative group cursor-pointer border border-[#2C2C2C]/10"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={img.src}
                alt={`Gallery Image ${i + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={galleryImages}
            index={index}
            plugins={[Captions]}
          />
        )}
      </section>
    </>
  );
};

export default PremiumGallery;
