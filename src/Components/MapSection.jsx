import React from 'react';

const MapSection = () => {
  return (
    <section className="px-4 py-20 bg-[#fff8e3] text-[#2C2C2C]">
      <div className="max-w-6xl mx-auto">
        {/* Elegant Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold italiana-font leading-tight">
            Visit Us at the Heart of Brilliance
          </h2>
          <p className="mt-4 text-xl sm:text-lg md:text-2xl text-gray-700 tracking-widest signature-font">
            Where timeless traditions meet shimmering craftsmanship in every corner.
          </p>
        </div>

        {/* Embedded Google Map */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            title="Jain Jewels Location"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112035.31096042413!2d77.14615129389614!3d28.65662046490692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cfd100af85211%3A0x4c6fefa676647813!2s2nd%20Floor%2C%201153%20shop%20No%2C%206%20-7%2C%20Kucha%20Mahajani%2C%20Chandni%20Chowk%2C%20Delhi%2C%20110006!3m2!1d28.6566454!2d77.2285527!5e0!3m2!1sen!2sin!4v1752172549738!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
