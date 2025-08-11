import React from "react";
import { FaHandsHelping, FaUtensils, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaUtensils className="text-green-600 text-5xl" />,
    title: "Share Surplus Food",
    desc: "Donors can easily list leftover or extra food for sharing.",
  },
  {
    icon: <FaHandsHelping className="text-yellow-500 text-5xl" />,
    title: "Find Available Meals",
    desc: "Users in need can browse and request food near them.",
  },
  {
    icon: <FaTruck className="text-blue-600 text-5xl" />,
    title: "Coordinate Pickup",
    desc: "Pickup is arranged with details shared securely between users.",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(to right, #e8f5e9, #fff3e0)",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-700">How It Works</h2>
        <p className="text-gray-700 mt-3 text-lg">
          A simple 3-step process to reduce food waste
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-t-4 border-green-500 hover:border-orange-500"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
