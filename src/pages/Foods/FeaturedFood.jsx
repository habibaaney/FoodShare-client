// import React from "react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router";
// import { motion } from "framer-motion";

// const FeaturedFoods = () => {
//   const [featuredFoods, setFeaturedFoods] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://mission-scic11-server.vercel.app/featured-foods")
//       .then((res) => res.json())
//       .then((data) => {
//         setFeaturedFoods(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching featured foods:", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section className="w-11/12 mx-auto py-10">
//       <h2 className="text-3xl font-bold text-center mb-6">
//         Featured Foods (Top Quantity)
//       </h2>

//       {loading ? (
//         <p className="text-center text-gray-500 text-lg animate-pulse">
//           Loading featured foods...
//         </p>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredFoods.map((food) => (
//               <motion.div
//                 key={food._id}
//                 className="card shadow-md rounded-lg bg-white overflow-hidden border"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <img
//                   src={food.image}
//                   alt={food.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold">{food.name}</h3>
//                   <p className="text-slate-600 mb-2">
//                     Quantity: {food.quantity}
//                   </p>
//                   <Link
//                     to={`/food/${food._id}`}
//                     className="text-orange-500 hover:underline text-sm"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="text-center mt-8">
//             <Link to="/available-foods">
//               <button className="btn btn-outline text-orange-500 hover:bg-orange-500 hover:text-white transition-all">
//                 Show All Foods
//               </button>
//             </Link>
//           </div>
//         </>
//       )}
//     </section>
//   );
// };

// export default FeaturedFoods;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const FeaturedFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mission-scic11-server.vercel.app/featured-foods")
      .then((res) => res.json())
      .then((data) => {
        // Only keep top 8
        setFeaturedFoods(data.slice(0, 8));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching featured foods:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section
      className="w-full mx-auto py-12 bg-gray-50"
      style={{
        background:
          "linear-gradient(135deg, #f0fdf4 0%, #fef3c7 50%, #ffffff 100%)",
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
        Featured Foods <span className="text-orange-500">(Top Quantity)</span>
      </h2>

      {loading ? (
        <p className="text-center text-gray-500 text-lg animate-pulse">
          Loading featured foods...
        </p>
      ) : (
        <>
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFoods.map((food, index) => (
              <motion.div
                key={food._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {food.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Quantity:{" "}
                    <span className="font-medium text-gray-800">
                      {food.quantity}
                    </span>
                  </p>
                  <Link
                    to={`/food/${food._id}`}
                    className="text-orange-500 hover:underline text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show All Button */}
          <div className="text-center mt-10">
            <Link to="/available-foods">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all"
              >
                Show All Foods
              </motion.button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedFoods;
