import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useAuth } from "../../providers/AuthProvider";

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [gridCols, setGridCols] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("https://mission-scic11-server.vercel.app/available-foods", {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      })
      .then((res) => {
        const available = res.data.filter(
          (food) => food.status === "available"
        );
        setFoods(available);
        setFilteredFoods(available);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching available foods:", err);
        setLoading(false);
      });
  }, [user?.accessToken]);

  // Sorting
  useEffect(() => {
    const sorted = [...filteredFoods].sort((a, b) => {
      const dateA = new Date(a.expiredAt);
      const dateB = new Date(b.expiredAt);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setFilteredFoods(sorted);
  }, [sortOrder]);

  // Searching
  useEffect(() => {
    const results = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(results);
  }, [searchTerm, foods]);

  const handleSortChange = (e) => setSortOrder(e.target.value);
  const toggleGrid = () => setGridCols((prev) => (prev === 3 ? 2 : 3));

  return (
    <section className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        Available Foods
      </h2>

      {/* Search & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Food Name"
          className="input input-bordered w-full md:max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium">Sort by Expiry:</label>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="select select-sm select-bordered"
          >
            <option value="asc">Earliest First</option>
            <option value="desc">Latest First</option>
          </select>

          <button onClick={toggleGrid} className="btn btn-sm btn-outline">
            Change Layout ({gridCols === 3 ? "2 Columns" : "3 Columns"})
          </button>
        </div>
      </div>

      {/* Loading / Empty States */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg animate-pulse">
          Loading foods...
        </p>
      ) : filteredFoods.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No foods found.</p>
      ) : (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridCols} gap-6`}
        >
          {filteredFoods.map((food) => (
            <motion.div
              key={food._id}
              className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-700 mb-1">
                  {food.name}
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  Quantity: {food.quantity}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  Location: {food.location}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  Expire At: {new Date(food.expireDate).toLocaleString()}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  Donor: {food.addedBy?.name || "Unknown"}
                </p>

                <Link
                  to={`/food/${food._id}`}
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AvailableFood;
