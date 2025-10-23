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

  // ✅ useQuery must take ONE object argument in v5
  const { data: myFoods = [], isLoading } = useQuery({
    queryKey: ["myFoods", user?.email],
    queryFn: fetchMyFoods,
    enabled: !!user?.email, // only run if user email is available
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
