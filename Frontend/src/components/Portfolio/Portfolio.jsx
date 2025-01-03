import React from "react";
import { Button } from "../ui/button";

function Portfolio() {
  return (
    <section className="bg-gray-100 text-center py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Our Work Speaks for Itself
      </h2>
      <p className="text-gray-600 mt-4">
        Discover how we’ve helped businesses achieve their digital goals.
      </p>
      <Button variant="default" className="mt-6 bg-blue-500 text-black">
        View Portfolio
      </Button>
    </section>
  );
}

export default Portfolio;
