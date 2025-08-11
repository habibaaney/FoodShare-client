import React from "react";
import { Link } from "react-router";
const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 md:p-12 bg-white rounded-lg shadow-lg my-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Our Team"
            className="rounded-lg shadow-lg w-full object-cover h-72 md:h-full"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-green-700">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to FoodShare! We’re passionate about connecting generous
            donors with people in need. Our mission is to reduce food waste
            while ensuring nutritious meals reach those who need them most.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded by a team dedicated to social impact, we provide a
            user-friendly platform that makes donating and requesting food
            simple, safe, and effective. Join us in building a community where
            kindness and sustainability go hand in hand.
          </p>
          <Link to="/contact">
            <button
              onClick={() => alert("Thanks for your interest!")}
              className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
