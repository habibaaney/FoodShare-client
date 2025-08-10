// import React, { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useAuth } from "../../providers/AuthProvider";
// import { Navigate } from "react-router";

// const AddFood = () => {
//   const { user } = useAuth();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [food, setFood] = useState({
//     name: "",
//     quantity: "",
//     location: "",
//     image: "",
//     expiredAt: "",
//     notes: "",
//     status: "available",
//   });

//   const handleChange = (e) => {
//     setFood({ ...food, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const foodData = {
//       ...food,
//       addedBy: {
//         name: user?.displayName || "Anonymous",
//         email: user?.email || "unknown",
//         photo: user?.photoURL || "",
//       },
//     };

//     try {
//       const res = await axios.post("https://mission-scic11-server.vercel.app/add-food", foodData);
//       if (res.data.insertedId) {
//         Swal.fire("Success!", "Food added successfully!", "success");
//         setFood({
//           name: "",
//           quantity: "",
//           location: "",
//           image: "",
//           expiredAt: "",
//           notes: "",
//           status: "available",
//         });
//       }
//     } catch (error) {
//       console.error("Add food error:", error);
//       Swal.fire("Error!", "Failed to add food.", "error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!user) return <Navigate to="/login" replace />;

//   return (
//     <div className="max-w-xl mx-auto mt-12 p-6 border rounded-xl shadow-lg bg-white">
//       <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
//         Add a Food Item
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block font-medium mb-1">Food Name</label>
//           <input
//             type="text"
//             name="name"
//             value={food.name}
//             onChange={handleChange}
//             required
//             placeholder="Enter food name"
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Food Image URL</label>
//           <input
//             type="text"
//             name="image"
//             value={food.image}
//             onChange={handleChange}
//             required
//             placeholder="Paste food image URL"
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Food Quantity</label>
//           <input
//             type="number"
//             name="quantity"
//             value={food.quantity}
//             onChange={handleChange}
//             required
//             placeholder="Enter quantity"
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Pickup Location</label>
//           <input
//             type="text"
//             name="location"
//             value={food.location}
//             onChange={handleChange}
//             required
//             placeholder="Enter pickup location"
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Expired Date & Time</label>
//           <input
//             type="datetime-local"
//             name="expiredAt"
//             value={food.expiredAt}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block font-medium mb-1">Additional Notes</label>
//           <textarea
//             name="notes"
//             value={food.notes}
//             onChange={handleChange}
//             placeholder="Enter any notes (optional)"
//             className="w-full p-2 border rounded-md"
//             rows="3"
//           ></textarea>
//         </div>

//         <div className="border-t pt-4">
//           <p className="text-gray-600 font-medium mb-2">Donor Information:</p>
//           <div className="flex items-center gap-4">
//             {user?.photoURL && (
//               <img
//                 src={user.photoURL}
//                 alt="User"
//                 className="w-12 h-12 rounded-full border"
//               />
//             )}
//             <div>
//               <p className="font-semibold">{user?.displayName}</p>
//               <p className="text-sm text-gray-500">{user?.email}</p>
//             </div>
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`w-full py-2 px-4 text-white font-semibold rounded-md transition-all duration-300 ${
//             isSubmitting
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {isSubmitting ? "Submitting..." : "Add Food"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddFood;

// *******

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";
// import { useAuth } from "../../providers/AuthProvider";
// import Swal from "sweetalert2";

// const AddFood = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     const food = {
//       ...data,
//       quantity: parseInt(data.quantity),
//       addedBy: user.email,
//       status: "available",
//     };

//     try {
//       const res = await fetch("https://mission-scic11-server.vercel.app/add-food", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(food),
//       });

//       const result = await res.json();
//       if (result.insertedId) {
//         Swal.fire("Success", "Food added successfully!", "success");
//         reset();
//         navigate("/dashboard/manage-my-foods");
//       }
//     } catch (err) {
//       console.error(err);
//       Swal.fire("Error", "Failed to add food", "error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
//       <input
//         {...register("name")}
//         placeholder="Food Name"
//         className="input input-bordered w-full"
//       />
//       <input
//         {...register("image")}
//         placeholder="Image URL"
//         className="input input-bordered w-full"
//       />
//       <input
//         {...register("quantity")}
//         type="number"
//         placeholder="Quantity"
//         className="input input-bordered w-full"
//       />
//       <input
//         {...register("location")}
//         placeholder="Pickup Location"
//         className="input input-bordered w-full"
//       />
//       <button type="submit" className="btn btn-primary w-full">
//         Add Food
//       </button>
//     </form>
//   );
// };

// export default AddFood;

// *****

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
