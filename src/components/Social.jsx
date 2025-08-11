// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";

// const Social = () => {
//   const { googleSignIn } = useContext(AuthContext);

//   return (
//     <div className=" bg-white shadow py-3 rounded-full flex flex-col items-center">
//       <div>
//         <img
//           onClick={googleSignIn}
//           className="w-[64px]"
//           src="https://img.icons8.com/?size=96&id=17949&format=png"
//           alt=""
//         />
//       </div>

//     </div>
//   );
// };

// export default Social;

// {
//   /* <div className="">
//         <img
//           className="w-[64px]"
//           src="https://img.icons8.com/?size=96&id=118497&format=png"
//           alt=""
//         />
//       </div>
//       <div className="">
//         <img
//           className="w-[64px]"
//           src="https://img.icons8.com/?size=96&id=bUGbDbW2XLqs&format=png"
//           alt=""
//         />
//       </div>
//       <div className="">
//         <img
//           className="w-[64px]"
//           src="https://img.icons8.com/?size=128&id=3tC9EQumUAuq&format=png"
//           alt=""
//         />
//       </div> */
// }

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center space-y-6 w-full max-w-xs">
        <h2 className="text-2xl font-semibold text-gray-800">
          Sign in with Google
        </h2>

        <button
          onClick={handleGoogleSignIn}
          aria-label="Sign in with Google"
          className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-green-600 transition"
        >
          <img
            src="https://img.icons8.com/?size=96&id=17949&format=png"
            alt="Google Sign-In"
            className="w-10 h-10"
            draggable={false}
          />
        </button>

        <Link
          to="/"
          className="mt-4 text-green-600 hover:text-green-800 font-medium transition"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Social;
