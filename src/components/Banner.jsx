import { useEffect, useState } from "react";
import animation from "../assets/cooking.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="bg-gray-50 overflow-hidden">
      <div
        className={`flex min-h-screen flex-col-reverse md:flex-row items-center justify-between gap-10 w-11/12 mx-auto py-12 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Share <span className="text-orange-500">Surplus Food</span> with
            Your Community
          </h1>

          {/* Custom Marquee */}
          <div className="bg-orange-500 text-white py-2 px-4 rounded-full text-sm shadow-md overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              Reduce waste • Help others • Spread kindness 🌱
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl text-gray-600 font-medium">
            Make an Impact with Every Meal
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link to="/registration">
              <button className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Join Now
              </button>
            </Link>
            <Link to="/available-foods">
              <button className="px-5 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
                Explore Foods
              </button>
            </Link>
          </div>
        </div>

        {/* Animation */}
        <div className="max-w-sm md:max-w-md w-full flex justify-center">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .animate-marquee {
            display: inline-block;
            animation: marquee 8s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </section>
  );
};

export default Banner;
