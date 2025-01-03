import React from "react";

function AboutUs() {
  return (
    <section className="bg-gray-100 text-center py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Your Digital Growth Partner
      </h2>
      <p className="text-gray-600 mt-4">
        At [Your Agency Name], we’re a team of passionate designers, skilled
        developers, and strategic marketers committed to helping businesses
        thrive online.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="font-semibold text-lg">Proven Track Record</h3>
          <p className="text-gray-500 mt-2">
            We deliver successful projects tailored to your needs.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="font-semibold text-lg">Tailor-Made Solutions</h3>
          <p className="text-gray-500 mt-2">
            Every project is customized for your unique business.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="font-semibold text-lg">Dedicated Team</h3>
          <p className="text-gray-500 mt-2">
            We’re invested in your success from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
