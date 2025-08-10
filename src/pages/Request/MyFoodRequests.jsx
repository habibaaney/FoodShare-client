import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../providers/AuthProvider";

const MyFoodRequests = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(
        `https://mission-scic11-server.vercel.app/food-requests?userEmail=${user.email}`
      )
      .then((res) => {
        setRequests(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching food requests:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (requests.length === 0)
    return (
      <p className="text-center mt-10">You haven't requested any food yet.</p>
    );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Food Requests</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th>Food</th>
              <th>Donor Name</th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="p-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={req.foodImage}
                      alt={req.foodName}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">{req.foodName}</p>
                    </div>
                  </div>
                </td>
                <td>{req.donorName || "N/A"}</td>
                <td>{req.pickupLocation}</td>
                <td>{req.expireDate ? formatDate(req.expireDate) : "N/A"}</td>
                <td>{req.requestDate ? formatDate(req.requestDate) : "N/A"}</td>
                <td>{req.status || "requested"}</td>
                <td>{req.additionalNotes || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Helper function to format ISO date strings
function formatDate(isoDate) {
  const d = new Date(isoDate);
  return d.toLocaleString(); // You can also use toLocaleDateString()
}

export default MyFoodRequests;
