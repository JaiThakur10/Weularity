import React from "react";
import { motion } from "framer-motion";

function Testimonial() {
  return (
    <section className="bg-white text-center py-16 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
      </motion.div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Client 1", "Client 2"].map((client, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-lg shadow-md"
          >
            <p className="text-gray-600 italic">
              &ldquo;{client} left a glowing review about your work.&rdquo;
            </p>
            <cite className="block mt-4 text-gray-800 font-semibold">
              &ndash; {client}
            </cite>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
