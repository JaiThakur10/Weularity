import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <section id="portfolio" className=" text-center py-16 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800">
          Our Work Speaks for Itself
        </h2>
        <p className="text-gray-600 mt-4">
          Discover how we’ve helped businesses achieve their digital goals.
        </p>
        <Button
          variant="default"
          className="mt-6 bg-blue-500 text-white hover:bg-blue-600"
        >
          View Portfolio
        </Button>
      </motion.div>
    </section>
  );
}

export default Portfolio;
