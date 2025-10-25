// components/Newsletter.jsx
import { useState } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import animationData from "../../public/lottie/newsletter.json";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire("Oops!", "Please enter your email address.", "warning");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://mission-scic11-server.vercel.app/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      if (data.insertedId) {
        Swal.fire(
          "Subscribed!",
          "Thank you for joining our community!",
          "success"
        );
        setEmail("");
      } else if (data.message) {
        Swal.fire("Info", data.message, "info");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong. Try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-indigo-50 py-16 text-white">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        {/* Lottie Animation */}
        <div className="flex justify-center">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-72 md:w-96"
          />
        </div>

        {/* Text & Form */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl text-green-600 font-bold mb-4">
            Join Our Food Sharing Community 🍲
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to get updates, stories, and opportunities to make an
            impact.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full md:w-2/3 text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="btn bg-white text-green-600 hover:bg-green-100 px-6"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
