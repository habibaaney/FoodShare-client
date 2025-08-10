// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router";
// // // import axios from "axios";
// // // import { useAuth } from "../../providers/AuthProvider";
// // // import Swal from "sweetalert2";

// // // const FoodDetails = () => {
// // //   const { id } = useParams();
// // //   const [food, setFood] = useState(null);
// // //   const [showModal, setShowModal] = useState(false);
// // //   const [additionalNotes, setAdditionalNotes] = useState("");

// // //   const { user } = useAuth();
// // //   const userEmail = user?.email;

// // //   useEffect(() => {
// // //     axios
// // //       .get(`https://mission-scic11-server.vercel.app/foods/${id}`, {
// // //         headers: {
// // //           Authorization: `Bearer ${user.accessToken}`,
// // //         },
// // //       })
// // //       .then((res) => setFood(res.data))
// // //       .catch((err) => console.error("Error fetching food details:", err));
// // //   }, [id]);

// // //   const handleRequestSubmit = async () => {
// // //     const requestData = {
// // //       foodId: food._id,
// // //       foodName: food.name,
// // //       foodImage: food.image,
// // //       userEmail,
// // //       foodStatus: food.status,
// // //       donorName: food.donorName || "Unknown Donor",
// // //       pickupLocation: food.location,
// // //       expireDate: food.expireDate || new Date().toISOString(),
// // //       notes: additionalNotes,
// // //     };

// // //     try {
// // //       const response = await axios.post(
// // //         "https://mission-scic11-server.vercel.app/food-requests",
// // //         requestData
// // //       );

// // //       if (response.data.success) {
// // //         Swal.fire("✅ Success", "Food requested successfully", "success");
// // //         setShowModal(false);
// // //       } else {
// // //         Swal.fire("Failed", "Failed to request food", "error");
// // //       }
// // //     } catch (error) {
// // //       console.error("Request error:", error);
// // //       Swal.fire(
// // //         "Error",
// // //         error.response?.data?.error || "Something went wrong",
// // //         "error"
// // //       );
// // //     }
// // //   };

// // //   if (!food) return <p>Loading food details...</p>;

// // //   const requestDate = new Date().toISOString().slice(0, 16).replace("T", " ");

// // //   return (
// // //     <div className="p-10 max-w-3xl mx-auto">
// // //       <h2 className="text-2xl font-bold mb-4">{food.name}</h2>
// // //       <img
// // //         src={food.image}
// // //         alt={food.name}
// // //         className="w-full md:w-1/2 rounded"
// // //       />
// // //       <p>
// // //         <strong>Quantity:</strong> {food.quantity}
// // //       </p>
// // //       <p>
// // //         <strong>Location:</strong> {food.location}
// // //       </p>
// // //       <p>
// // //         <strong>Status:</strong> {food.status}
// // //       </p>
// // //       <p>
// // //         <strong>Donor:</strong> {food.donorName || "N/A"}
// // //       </p>

// // //       <button
// // //         onClick={() => setShowModal(true)}
// // //         className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
// // //       >
// // //         Request This Food
// // //       </button>

// // //       {/* Modal */}
// // //       {showModal && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //           <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
// // //             <button
// // //               onClick={() => setShowModal(false)}
// // //               className="absolute top-2 right-3 text-xl text-red-600 hover:text-red-800"
// // //             >
// // //               &times;
// // //             </button>
// // //             <h3 className="text-xl font-bold mb-4">Request Food</h3>
// // //             <div className="grid gap-3">
// // //               <input
// // //                 type="text"
// // //                 value={food.name}
// // //                 readOnly
// // //                 className="input input-bordered w-full"
// // //               />
// // //               <input
// // //                 type="text"
// // //                 value={food.image}
// // //                 readOnly
// // //                 className="input input-bordered w-full"
// // //               />
// // //               <input
// // //                 type="text"
// // //                 value={food._id}
// // //                 readOnly
// // //                 className="input input-bordered w-full"
// // //               />
// // //               <input
// // //                 type="text"
// // //                 value={food.donorEmail || "donor@example.com"}
// // //                 readOnly
// // //                 className="input input-bordered w-full"
// // //               />
// // //               <input
// // //                 type="text"
// // //                 value={food.donorName || "Unknown Donor"}
// // //                 readOnly
// // //                 className="input input-bordered w-full"
// // //               />
// // //               <input
// // //                 type="text"
// // //                 value={userEmail}
// // //                 readOnly
// // //                 className="input input-bordered w-full"
// // //               />
// // //               <input
// // //                 type="text"
// // //                 value={requestDate}
// // //                 readOnly
// // //                 className="input input-bordered w-full"
// // //               />
// // //               <input
// // //                 type="text"
// // //                 value={food.location}
// // //                 readOnly
// // //                 className="input input-bordered w-full"
// // //               />
// // //               <input
// // //                 type="text"
// // //                 value={food.expireDate || "Not provided"}
// // //                 readOnly
// // //                 className="input input-bordered w-full"
// // //               />

// // //               <textarea
// // //                 placeholder="Additional Notes (optional)"
// // //                 className="textarea textarea-bordered"
// // //                 value={additionalNotes}
// // //                 onChange={(e) => setAdditionalNotes(e.target.value)}
// // //               />

// // //               <button
// // //                 onClick={handleRequestSubmit}
// // //                 className="btn btn-primary mt-3"
// // //               >
// // //                 Request
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default FoodDetails;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import { useAuth } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [relatedFoods, setRelatedFoods] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const { user } = useAuth();
  const userEmail = user?.email;

  // Fetch food details
  useEffect(() => {
    if (!user?.accessToken) return;
    axios
      .get(`https://mission-scic11-server.vercel.app/foods/${id}`, {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      })
      .then((res) => setFood(res.data))
      .catch((err) => console.error("Error fetching food details:", err));
  }, [id, user?.accessToken]);

  // Fetch related foods
  useEffect(() => {
    if (!user?.accessToken) return;
    const fetchRelatedFoods = async () => {
      try {
        const res = await axios.get(
          `https://mission-scic11-server.vercel.app/available-foods`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setRelatedFoods(res.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching related foods:", error);
      } finally {
        setRelatedLoading(false);
      }
    };
    fetchRelatedFoods();
  }, [user?.accessToken]);

  const handleRequestSubmit = async () => {
    const requestData = {
      foodId: food._id,
      foodName: food.name,
      foodImage: food.image,
      userEmail,
      foodStatus: food.status,
      donorName: food.donorName || "Unknown Donor",
      pickupLocation: food.location,
      expireDate: food.expireDate || new Date().toISOString(),
      notes: additionalNotes,
    };

    try {
      const response = await axios.post(
        "https://mission-scic11-server.vercel.app/food-requests",
        requestData
      );
      if (response.data.success) {
        Swal.fire("✅ Success", "Food requested successfully", "success");
        setShowModal(false);
        setAdditionalNotes("");
      } else {
        Swal.fire("❌ Failed", "Failed to request food", "error");
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.error || "Something went wrong",
        "error"
      );
    }
  };

  if (!food) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-gray-500">
        Loading food details...
      </div>
    );
  }

  const requestDate = new Date().toISOString().slice(0, 16).replace("T", " ");

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      {/* Food Details Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="w-full">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-700">
              {food.name}
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Quantity:</strong> {food.quantity}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Location:</strong> {food.location}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Status:</strong>{" "}
              <span
                className={`px-2 py-1 rounded text-white ${
                  food.status === "available" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {food.status}
              </span>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Donor:</strong> {food.donorName || "N/A"}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Expires At:</strong>{" "}
              {food.expireDate
                ? new Date(food.expireDate).toLocaleString("en-GB")
                : "Not provided"}
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Request This Food
            </button>
          </div>
        </div>
      </div>

      {/* Modal
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-600"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4 text-green-700">
              Request Food
            </h3>
            <div className="space-y-3">
              <input
                value={food.name}
                readOnly
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
              <input
                value={userEmail}
                readOnly
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
              <input
                value={requestDate}
                readOnly
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
              <textarea
                placeholder="Additional Notes (optional)"
                className="w-full border rounded px-3 py-2"
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
              />
              <button
                onClick={handleRequestSubmit}
                className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-600"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4 text-green-700">
              Request Food
            </h3>
            <div className="space-y-3">
              <input
                value={food.name}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                value={food._id}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                value={food.donorEmail || "donor@example.com"}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                value={food.donorName || "Unknown Donor"}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                value={userEmail}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                value={requestDate}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                value={food.location}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                value={food.expireDate || "Not provided"}
                readOnly
                className="input input-bordered w-full"
              />

              <textarea
                placeholder="Additional Notes (optional)"
                className="textarea textarea-bordered w-full"
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
              />

              <button
                onClick={handleRequestSubmit}
                className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Related Foods Section */}

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Related Foods You May Like
        </h2>
        {relatedLoading ? (
          <p className="text-center text-gray-500 text-lg animate-pulse">
            Loading related foods...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedFoods.map((related) => (
              <motion.div
                key={related._id}
                className="rounded-lg bg-white shadow-md overflow-hidden hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{related.name}</h3>
                  <p className="text-gray-600 mb-2">
                    Quantity: {related.quantity}
                  </p>
                  <Link
                    to={`/food/${related._id}`}
                    className="text-orange-500 hover:underline text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default FoodDetails;
