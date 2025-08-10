import React from "react";
import { FaHandsHelping, FaUtensils, FaTruck } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUtensils className="text-green-600 text-4xl" />,
      title: "Share Surplus Food",
      desc: "Donors can easily list leftover or extra food for sharing.",
    },
    {
      icon: <FaHandsHelping className="text-yellow-500 text-4xl" />,
      title: "Find Available Meals",
      desc: "Users in need can browse and request food near them.",
    },
    {
      icon: <FaTruck className="text-blue-600 text-4xl" />,
      title: "Coordinate Pickup",
      desc: "Pickup is arranged with details shared securely between users.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-700">How It Works</h2>
        <p className="text-gray-600 mt-2">
          A simple 3-step process to reduce food waste
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg text-center"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
