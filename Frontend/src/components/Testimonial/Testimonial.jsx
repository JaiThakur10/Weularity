import React from "react";

function Testimonial() {
  return (
    <section className="bg-white text-center py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <blockquote className="p-6 bg-gray-50 rounded-lg shadow-md">
          <p className="text-gray-600 italic">
            &ldquo;[Your Agency Name] transformed our website into a
            lead-generating machine. Their team was professional, creative, and
            always on time. Highly recommend!&rdquo;
          </p>
          <cite className="block mt-4 text-gray-800 font-semibold">
            &ndash; [Client Name]
          </cite>
        </blockquote>
        <blockquote className="p-6 bg-gray-50 rounded-lg shadow-md">
          <p className="text-gray-600 italic">
            &ldquo;They exceeded our expectations. The new website looks
            fantastic, and our traffic has significantly increased!&rdquo;
          </p>
          <cite className="block mt-4 text-gray-800 font-semibold">
            &ndash; [Client Name]
          </cite>
        </blockquote>
      </div>
    </section>
  );
}

export default Testimonial;
