import React from "react";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <section id="about" className=" text-center py-16 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800">
          Your Digital Growth Partner
        </h2>
        <p className="text-gray-600 mt-4">
          At [Your Agency Name], we’re a team of passionate designers, skilled
          developers, and strategic marketers committed to helping businesses
          thrive online.
        </p>
      </motion.div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Proven Track Record", "Tailor-Made Solutions", "Dedicated Team"].map(
          (title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}

export default AboutUs;
