import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <h2 className="text-xl font-bold">🍲 FoodShare</h2>
          <p className="text-sm">
            Sharing surplus food to reduce waste & feed the hungry.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} FoodShare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
