import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUtensils, FaLeaf, FaUsers } from "react-icons/fa";

const stats = [
  {
    icon: <FaUtensils className="text-green-600 text-5xl mb-3" />,
    label: "Meals Shared",
    value: 5200,
    suffix: "+",
    color: "bg-green-50",
  },
  {
    icon: <FaLeaf className="text-orange-500 text-5xl mb-3" />,
    label: "Kg Food Saved",
    value: 2800,
    suffix: " kg",
    color: "bg-orange-50",
  },
  {
    icon: <FaUsers className="text-green-600 text-5xl mb-3" />,
    label: "Families Helped",
    value: 1500,
    suffix: "+",
    color: "bg-green-50",
  },
];

const OurImpact = () => {
  return (
    <section className="py-16 bg-gray-100 w-full">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl font-bold text-green-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Impact
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          See how we’re making a difference together
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`rounded-lg p-8 text-center shadow-md ${stat.color}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {stat.icon}
            <h3 className="text-4xl font-bold text-green-700">
              <CountUp
                end={stat.value}
                duration={2}
                separator=","
                suffix={stat.suffix}
                enableScrollSpy
              />
            </h3>
            <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurImpact;
