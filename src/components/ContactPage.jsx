import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const sections = [
    { name: "Technical", theme: "Udbhav", heads: 4, events: 22 },
    { name: "Cultural", theme: "Sanskriti", heads: 4, events: 20 },
    { name: "Sports", theme: "Krida Sangama", heads: 4, events: 14 },
  ];

  const socialLinks = [
    { platform: "WhatsApp", link: "#" },
    { platform: "LinkedIn", link: "#" },
    { platform: "Instagram", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Core Committee Head */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="src/assets/divyansh.jpg" // Replace with actual image path
          alt="Core Committee Head"
          className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-3xl font-bold">Core Committee Head</h1>
        <p className="text-lg">[Name of Core Head]</p>
        <div className="flex justify-center gap-4 mt-2">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.link} className="text-blue-400 hover:underline">{social.platform}</a>
          ))}
        </div>
      </motion.div>

      {/* Sections Displayed in Rows */}
      <div className="flex flex-col gap-6 w-full max-w-6xl p-4">
        {sections.map((section, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 p-6 rounded-xl shadow-lg w-full text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{section.name} Section</h2>
            <h3 className="text-xl font-medium mb-4">Theme: {section.theme}</h3>
            <p className="mb-4">Heads: {section.heads}</p>
            <p>Total Events: {section.events}</p>
            <div className="mt-4 flex justify-center gap-4 flex-wrap">
              {[...Array(section.heads)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <img
                    src={`/${section.name.toLowerCase()}-head-${i + 1}.jpg`} // Replace with actual image paths
                    alt={`${section.name} Head ${i + 1}`}
                    className="w-24 h-24 rounded-full mx-auto mb-2 border-2 border-white shadow-md"
                  />
                  <p className="font-bold">{section.name} Head {i + 1}</p>
                  <div className="flex justify-center gap-4 mt-2">
                    {socialLinks.map((social, index) => (
                      <a key={index} href={social.link} className="text-blue-400 hover:underline">{social.platform}</a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;