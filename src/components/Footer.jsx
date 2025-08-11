// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-base-200 text-base-content mt-10 p-6">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//         <div>
//           <h2 className="text-xl font-bold">🍲 FoodShare</h2>
//           <p className="text-sm">
//             Sharing surplus food to reduce waste & feed the hungry.
//           </p>
//         </div>
//         <div className="flex space-x-4">
//           <a href="/about" className="hover:underline">
//             About
//           </a>
//           <a href="/contact" className="hover:underline">
//             Contact
//           </a>
//           <a href="/privacy" className="hover:underline">
//             Privacy
//           </a>
//         </div>
//         <div className="text-sm">
//           © {new Date().getFullYear()} FoodShare. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white w-full">
      {/* Orange top border accent */}
      <div className="h-1 bg-orange-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            🍲 FoodShare
          </h2>
          <p className="mt-2 text-sm text-gray-200 leading-relaxed">
            Sharing surplus food to reduce waste & feed the hungry. Together, we
            can create a world with zero food waste.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-orange-300 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-orange-300 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-orange-300 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-400 p-2 rounded-full transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-400 p-2 rounded-full transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-400 p-2 rounded-full transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-green-800 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} FoodShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
