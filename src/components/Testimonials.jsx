import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayesha Rahman",

    quote:
      "This platform helped my family during a crisis. I’m so thankful for the support!",
  },
  {
    name: "Farhan Ahmed",

    quote:
      "I donated food and it felt great to know it didn’t go to waste. A wonderful initiative!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-700">What People Say</h2>
        <p className="text-gray-600 mt-2">Real stories from our community</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md p-6 rounded-lg flex flex-col items-center text-center"
          >
            <FaQuoteLeft className="text-2xl text-green-500 mb-2" />
            <p className="text-gray-700 mb-4 italic">"{t.quote}"</p>

            <h4 className="text-lg font-semibold text-green-800">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
