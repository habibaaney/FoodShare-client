import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router";

const Social = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/"); // Navigate to home on success
    } catch (error) {
      console.error("Google sign-in failed:", error);
      // Optionally show an error message here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button
        onClick={handleGoogleSignIn}
        aria-label="Sign in with Google"
        className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-gray-300 hover:border-green-600 hover:bg-green-50 transition text-gray-700 font-semibold shadow-sm"
      >
        <img
          src="https://img.icons8.com/?size=48&id=17949&format=png"
          alt="Google Sign-In"
          className="w-6 h-6"
          draggable={false}
        />
        <span>Sign in with Google</span>
      </button>

      <Link
        to="/"
        className="mt-4 text-green-600 hover:text-green-800 text-sm font-medium transition"
      >
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default Social;
