import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

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
  {
    name: "Nusrat Jahan",
    quote:
      "FoodShare connected me to local donors and helped feed dozens of people.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center py-16 px-4"
      style={{
        background: "linear-gradient(to right, #e8f5e9, #fff3e0)", // light green to light orange
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-700">
          What People Say
        </h2>
        <p className="text-gray-700 mt-3 text-lg">
          Real stories from our community
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // start position
            whileInView={{ opacity: 1, y: 0 }} // animation
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg p-6 rounded-2xl flex flex-col items-center text-center border-t-4 border-green-500 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl"
          >
            <FaQuoteLeft className="text-3xl text-green-500 mb-3" />
            <p className="text-gray-700 mb-4 italic leading-relaxed">
              "{t.quote}"
            </p>
            <h4 className="text-lg font-semibold text-green-800">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
