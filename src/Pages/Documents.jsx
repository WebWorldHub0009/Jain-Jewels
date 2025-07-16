import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEye,
  FaDownload
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import DocumentsHero from "../Components/DocumentsHero";

// Certificates
import gst from "../assets/documents/gst.pdf";
import appreciation from "../assets/documents/certificate.pdf";

const certificates = [
  {
    id: 1,
    name: "Certificate of Appreciation",
    description:
      "A prestigious recognition awarded to Jain Jewels for excellence in craftsmanship and commitment to customer satisfaction.",
    file: appreciation,
  },
  {
    id: 2,
    name: "GST Certificate",
    description:
      "Official Goods and Services Tax certificate of Jain Jewels, ensuring legal compliance and financial transparency.",
    file: gst,
  },
];

const Documents = () => {
  const [openPdfId, setOpenPdfId] = useState(null);

  const togglePdf = (id) => {
    setOpenPdfId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <DocumentsHero />

      <section className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 px-4 py-16">
        {/* Stylish Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 italiana-font">
            Legal and Recognition Documents
          </h1>
          <p className="text-xl md:text-2xl trackcing-widest text-gray-600 signature-font font-medium">
            “Certifications aren’t just papers — they’re the proof of trust we’ve earned.”
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          {certificates.map(({ id, name, description, file }) => (
            <div
              key={id}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-2xl p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Title */}
              <div className="flex items-center gap-4 mb-4">
                <HiDocumentText className="text-[#D4AF37] text-4xl" />
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <button
                  onClick={() => togglePdf(id)}
                  className="w-full sm:w-auto flex-1 bg-[#D4AF37] hover:bg-yellow-600 text-white transition font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow"
                >
                  <FaEye />
                  {openPdfId === id ? "Hide" : "View"}
                </button>

                <a
                  href={file}
                  download
                  className="w-full sm:w-auto flex-1 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow"
                >
                  <FaDownload />
                  Download
                </a>
              </div>

              {/* PDF Preview */}
              {openPdfId === id && (
                <div className="mt-6">
                  <iframe
                    src={file}
                    title={name}
                    className="w-full h-96 border rounded-lg shadow-inner"
                  />
                </div>
              )}

              {/* Contact */}
              <div className="mt-6 pt-4 flex items-center gap-3 border-t">
                <FaPhoneAlt className="text-gray-900 text-lg" />
                <p className="text-gray-700 text-sm">
                  Need help?{" "}
                  <a
                    href="tel:+919891872601"
                    className="text-gray-900 font-semibold hover:underline"
                  >
                    Contact Now
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Documents;
