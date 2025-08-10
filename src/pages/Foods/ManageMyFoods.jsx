import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const fetchMyFoods = async (email) => {
  const res = await fetch(`https://mission-scic11-server.vercel.app/foods`);
  const data = await res.json();
  return data.filter((food) => food.addedBy?.email === email);
};

const ManageMyFoods = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [editingFood, setEditingFood] = useState(null);

  const { data: myFoods = [], isLoading } = useQuery({
    queryKey: ["myFoods", user.email],
    queryFn: () => fetchMyFoods(user.email),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await fetch(`https://mission-scic11-server.vercel.app/foods/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      Swal.fire("Deleted!", "", "success");
      queryClient.invalidateQueries(["myFoods"]);
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
      Swal.fire("Updated!", "", "success");
      queryClient.invalidateQueries(["myFoods"]);
      setEditingFood(null);
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage My Foods</h2>
      {myFoods.length === 0 ? (
        <p>No foods added by you yet.</p>
      ) : (
        <div className="space-y-4">
          {myFoods.map((food) => (
            <div key={food._id} className="border p-4 rounded shadow-md">
              <h3 className="font-bold">{food.name}</h3>
              <img src={food.image} alt={food.name} className="w-24" />
              <p>Quantity: {food.quantity}</p>
              <p>Status: {food.status}</p>
              <p>Location: {food.location}</p>
              <button
                onClick={() => setEditingFood(food)}
                className="btn btn-sm btn-info mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteMutation.mutate(food._id)}
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {editingFood && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Edit Food</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const updatedFood = {
                  name: form.name.value,
                  image: form.image.value,
                  quantity: parseInt(form.quantity.value),
                  location: form.location.value,
                };
                updateMutation.mutate({ id: editingFood._id, updatedFood });
              }}
            >
              <input
                name="name"
                defaultValue={editingFood.name}
                className="input input-bordered w-full mb-2"
              />
              <input
                name="image"
                defaultValue={editingFood.image}
                className="input input-bordered w-full mb-2"
              />
              <input
                name="quantity"
                type="number"
                defaultValue={editingFood.quantity}
                className="input input-bordered w-full mb-2"
              />
              <input
                name="location"
                defaultValue={editingFood.location}
                className="input input-bordered w-full mb-4"
              />
              <button type="submit" className="btn btn-primary w-full">
                Update
              </button>
              <button
                type="button"
                onClick={() => setEditingFood(null)}
                className="btn btn-ghost mt-2 w-full"
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
