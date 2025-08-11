// ContactUs.jsx
import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      Swal.fire("Oops!", "Please fill out all fields.", "warning");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://mission-scic11-server.vercel.app/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Success!", data.message, "success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire("Error", data.message || "Something went wrong", "error");
      }
    } catch (error) {
      Swal.fire("Error", error.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 my-12">
      <h2 className="text-3xl font-extrabold text-green-700 mb-6 text-center">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-semibold text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 font-semibold text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-md border border-gray-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Write your message here..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading
              ? "bg-green-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          } text-white font-semibold py-3 rounded-md transition`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
