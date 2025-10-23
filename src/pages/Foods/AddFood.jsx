import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuth } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const food = {
      ...data,
      quantity: parseInt(data.quantity),
      addedBy: {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      },
      status: "available",
      createdAt: new Date(),
    };

    try {
      const res = await fetch(
        "https://mission-scic11-server.vercel.app/add-food",
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${user.accessToken}`,

            "Content-Type": "application/json",
          },
          body: JSON.stringify(food),
        }
      );

      const result = await res.json();
      if (result.insertedId) {
        Swal.fire("Success", "Food added successfully!", "success");
        reset();
        navigate("/manage-my-foods");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to add food", "error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow space-y-6">
      <h2 className="text-2xl font-bold text-center">Add Food</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: true })}
          placeholder="Food Name"
          className="input input-bordered w-full"
        />
        <input
          {...register("image", { required: true })}
          placeholder="Food Image URL"
          className="input input-bordered w-full"
        />
        <input
          {...register("quantity", { required: true })}
          type="number"
          placeholder="Food Quantity"
          className="input input-bordered w-full"
        />
        <input
          {...register("location", { required: true })}
          placeholder="Pickup Location"
          className="input input-bordered w-full"
        />
        <input
          {...register("expireDate", { required: true })}
          type="datetime-local"
          className="input input-bordered w-full"
        />
        <textarea
          {...register("notes")}
          placeholder="Additional Notes"
          className="textarea textarea-bordered w-full"
        ></textarea>

        <div className="bg-base-100 border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Donor Info</h3>
          <div className="flex items-center space-x-4">
            <img
              src={user.photoURL}
              alt="Donor"
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="font-medium">{user.displayName}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        <input
          value="available"
          disabled
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
