// // import React, { useState } from "react";
// // import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// // import { useAuth } from "../../providers/AuthProvider";
// // import Swal from "sweetalert2";

// // const fetchMyFoods = async (email) => {
// //   const res = await fetch(`https://mission-scic11-server.vercel.app/foods`);
// //   const data = await res.json();
// //   return data.filter((food) => food.addedBy?.email === email);
// // };

// // const ManageMyFoods = () => {
// //   const { user } = useAuth();
// //   const queryClient = useQueryClient();
// //   const [editingFood, setEditingFood] = useState(null);

// //   const { data: myFoods = [], isLoading } = useQuery({
// //     queryKey: ["myFoods", user.email],
// //     queryFn: () => fetchMyFoods(user.email),
// //   });

// //   const deleteMutation = useMutation({
// //     mutationFn: async (id) => {
// //       await fetch(`https://mission-scic11-server.vercel.app/foods/${id}`, {
// //         method: "DELETE",
// //       });
// //     },
// //     onSuccess: () => {
// //       Swal.fire("Deleted!", "", "success");
// //       queryClient.invalidateQueries(["myFoods"]);
// //     },
// //   });

// //   const updateMutation = useMutation({
// //     mutationFn: async ({ id, updatedFood }) => {
// //       await fetch(`https://mission-scic11-server.vercel.app/foods/${id}`, {
// //         method: "PATCH",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(updatedFood),
// //       });
// //     },
// //     onSuccess: () => {
// //       Swal.fire("Updated!", "", "success");
// //       queryClient.invalidateQueries(["myFoods"]);
// //       setEditingFood(null);
// //     },
// //   });

// //   if (isLoading) return <p>Loading...</p>;

// //   return (
// //     <div className="p-4">
// //       <h2 className="text-xl font-bold mb-4">Manage My Foods</h2>
// //       {myFoods.length === 0 ? (
// //         <p>No foods added by you yet.</p>
// //       ) : (
// //         <div className="space-y-4">
// //           {myFoods.map((food) => (
// //             <div key={food._id} className="border p-4 rounded shadow-md">
// //               <h3 className="font-bold">{food.name}</h3>
// //               <img src={food.image} alt={food.name} className="w-24" />
// //               <p>Quantity: {food.quantity}</p>
// //               <p>Status: {food.status}</p>
// //               <p>Location: {food.location}</p>
// //               <button
// //                 onClick={() => setEditingFood(food)}
// //                 className="btn btn-sm btn-info mr-2"
// //               >
// //                 Edit
// //               </button>
// //               <button
// //                 onClick={() => deleteMutation.mutate(food._id)}
// //                 className="btn btn-sm btn-error"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* Modal */}
// //       {editingFood && (
// //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
// //           <div className="bg-white p-6 rounded shadow w-full max-w-md">
// //             <h3 className="text-lg font-bold mb-4">Edit Food</h3>
// //             <form
// //               onSubmit={(e) => {
// //                 e.preventDefault();
// //                 const form = e.target;
// //                 const updatedFood = {
// //                   name: form.name.value,
// //                   image: form.image.value,
// //                   quantity: parseInt(form.quantity.value),
// //                   location: form.location.value,
// //                 };
// //                 updateMutation.mutate({ id: editingFood._id, updatedFood });
// //               }}
// //             >
// //               <input
// //                 name="name"
// //                 defaultValue={editingFood.name}
// //                 className="input input-bordered w-full mb-2"
// //               />
// //               <input
// //                 name="image"
// //                 defaultValue={editingFood.image}
// //                 className="input input-bordered w-full mb-2"
// //               />
// //               <input
// //                 name="quantity"
// //                 type="number"
// //                 defaultValue={editingFood.quantity}
// //                 className="input input-bordered w-full mb-2"
// //               />
// //               <input
// //                 name="location"
// //                 defaultValue={editingFood.location}
// //                 className="input input-bordered w-full mb-4"
// //               />
// //               <button type="submit" className="btn btn-primary w-full">
// //                 Update
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={() => setEditingFood(null)}
// //                 className="btn btn-ghost mt-2 w-full"
// //               >
// //                 Cancel
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ManageMyFoods;

// import React, { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useAuth } from "../../providers/AuthProvider";
// import Swal from "sweetalert2";

// const fetchMyFoods = async (email) => {
//   const res = await fetch(`https://mission-scic11-server.vercel.app/foods`);
//   const data = await res.json();
//   return data.filter((food) => food.addedBy?.email === email);
// };

// const ManageMyFoods = () => {
//   const { user } = useAuth();
//   const queryClient = useQueryClient();
//   const [editingFood, setEditingFood] = useState(null);

//   const { data: myFoods = [], isLoading } = useQuery({
//     queryKey: ["myFoods", user.email],
//     queryFn: () => fetchMyFoods(user.email),
//   });

//   const deleteMutation = useMutation({
//     mutationFn: async (id) => {
//       await fetch(`https://mission-scic11-server.vercel.app/foods/${id}`, {
//         method: "DELETE",
//       });
//     },
//     onSuccess: () => {
//       Swal.fire("Deleted!", "Food removed successfully", "success");
//       queryClient.invalidateQueries(["myFoods"]);
//     },
//   });

//   const updateMutation = useMutation({
//     mutationFn: async ({ id, updatedFood }) => {
//       await fetch(`https://mission-scic11-server.vercel.app/foods/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedFood),
//       });
//     },
//     onSuccess: () => {
//       Swal.fire("Updated!", "Food updated successfully", "success");
//       queryClient.invalidateQueries(["myFoods"]);
//       setEditingFood(null);
//     },
//   });

//   if (isLoading)
//     return (
//       <p className="text-center text-gray-500 text-lg py-10 animate-pulse">
//         Loading your foods...
//       </p>
//     );

//   return (
//     <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
//       <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
//         Manage My Foods
//       </h2>

//       {myFoods.length === 0 ? (
//         <p className="text-center text-gray-600 text-lg">
//           You haven't added any foods yet.
//         </p>
//       ) : (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {myFoods.map((food) => (
//             <div
//               key={food._id}
//               className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
//             >
//               <img
//                 src={food.image}
//                 alt={food.name}
//                 className="h-48 w-full object-cover"
//               />
//               <div className="p-4 flex-grow flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     {food.name}
//                   </h3>
//                   <p className="text-gray-700 mb-1">
//                     <span className="font-medium">Quantity:</span>{" "}
//                     {food.quantity}
//                   </p>
//                   <p className="text-gray-700 mb-1">
//                     <span className="font-medium">Status:</span> {food.status}
//                   </p>
//                   <p className="text-gray-700 mb-3">
//                     <span className="font-medium">Location:</span>{" "}
//                     {food.location}
//                   </p>
//                 </div>

//                 <div className="flex space-x-3">
//                   <button
//                     onClick={() => setEditingFood(food)}
//                     className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
//                     aria-label={`Edit ${food.name}`}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteMutation.mutate(food._id)}
//                     className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
//                     aria-label={`Delete ${food.name}`}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Modal */}
//       {editingFood && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="editFoodTitle"
//         >
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
//             <h3
//               id="editFoodTitle"
//               className="text-2xl font-bold mb-4 text-indigo-700"
//             >
//               Edit Food
//             </h3>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const form = e.target;
//                 const updatedFood = {
//                   name: form.name.value,
//                   image: form.image.value,
//                   quantity: parseInt(form.quantity.value, 10),
//                   location: form.location.value,
//                 };
//                 updateMutation.mutate({ id: editingFood._id, updatedFood });
//               }}
//               className="space-y-4"
//             >
//               <input
//                 name="name"
//                 defaultValue={editingFood.name}
//                 className="input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 placeholder="Food Name"
//                 required
//               />
//               <input
//                 name="image"
//                 defaultValue={editingFood.image}
//                 className="input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 placeholder="Image URL"
//                 required
//               />
//               <input
//                 name="quantity"
//                 type="number"
//                 defaultValue={editingFood.quantity}
//                 min={1}
//                 className="input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 placeholder="Quantity"
//                 required
//               />
//               <input
//                 name="location"
//                 defaultValue={editingFood.location}
//                 className="input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
//                 placeholder="Location"
//                 required
//               />
//               <button
//                 type="submit"
//                 disabled={updateMutation.isLoading}
//                 className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {updateMutation.isLoading ? "Updating..." : "Update"}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setEditingFood(null)}
//                 className="w-full py-2 border border-gray-300 rounded-md mt-2 hover:bg-gray-100 transition"
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageMyFoods;

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const fetchMyFoods = async ({ queryKey }) => {
  const [, email] = queryKey;
  const res = await fetch(`https://mission-scic11-server.vercel.app/foods`);
  const data = await res.json();
  return data.filter((food) => food.addedBy?.email === email);
};

const ManageMyFoods = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [editingFood, setEditingFood] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // ✅ FIX: useQuery must take ONE object argument in v5
  const { data: myFoods = [], isLoading } = useQuery({
    queryKey: ["myFoods", user?.email],
    queryFn: fetchMyFoods,
    enabled: !!user?.email, // only run when user is ready
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await fetch(`https://mission-scic11-server.vercel.app/foods/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "The food item has been removed.",
        confirmButtonColor: "#16a34a",
      });
      queryClient.invalidateQueries({ queryKey: ["myFoods", user?.email] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, updatedFood }) => {
      await fetch(`https://mission-scic11-server.vercel.app/foods/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFood),
      });
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Your food details have been updated.",
        confirmButtonColor: "#16a34a",
      });
      queryClient.invalidateQueries({ queryKey: ["myFoods", user?.email] });
      setEditingFood(null);
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <p className="text-orange-500 animate-pulse text-lg">
          Loading your foods...
        </p>
      </div>
    );
  }

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFoods = myFoods.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(myFoods.length / itemsPerPage);

  return (
    <div className="p-4 w-full mx-auto bg-gray-50">
      <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
        Manage My Foods
      </h2>

      {myFoods.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t added any foods yet.
        </p>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
            {currentFoods.map((food) => (
              <div
                key={food._id}
                className="rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow"
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-bold text-lg text-green-700">
                  {food.name}
                </h3>
                <p className="text-gray-600">Quantity: {food.quantity}</p>
                <p className="text-gray-600">Status: {food.status}</p>
                <p className="text-gray-600">Location: {food.location}</p>
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => setEditingFood(food)}
                    className="flex-1 bg-orange-500 text-white py-1 rounded hover:bg-orange-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteMutation.mutate(food._id)}
                    className="flex-1 bg-green-600 text-white py-1 rounded hover:bg-green-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === idx + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Edit Modal */}
      {editingFood && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4 text-green-600">Edit Food</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const updatedFood = {
                  name: form.name.value,
                  image: form.image.value,
                  quantity: parseInt(form.quantity.value, 10),
                  location: form.location.value,
                };
                updateMutation.mutate({ id: editingFood._id, updatedFood });
              }}
            >
              <input
                name="name"
                defaultValue={editingFood.name}
                className="input input-bordered w-full mb-2 border-gray-300 rounded"
              />
              <input
                name="image"
                defaultValue={editingFood.image}
                className="input input-bordered w-full mb-2 border-gray-300 rounded"
              />
              <input
                name="quantity"
                type="number"
                defaultValue={editingFood.quantity}
                className="input input-bordered w-full mb-2 border-gray-300 rounded"
              />
              <input
                name="location"
                defaultValue={editingFood.location}
                className="input input-bordered w-full mb-4 border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => setEditingFood(null)}
                className="w-full mt-2 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMyFoods;
