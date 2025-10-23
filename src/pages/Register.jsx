import Lottie from "lottie-react";
import { useContext } from "react";
import { BiEnvelope, BiImageAdd, BiKey, BiUser } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router";
import happy from "../assets/happy.json";
import Social from "../components/Social";
import Title from "../components/Title";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, updateUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const image = form.image.value.trim();
    const email = form.email.value.trim();
    const pass = form.pass.value.trim();

    if (!name || !email || !pass) {
      alert("Please fill in all required fields");
      return;
    }

    createUser(email, pass)
      .then((res) => {
        updateUser({
          displayName: name,
          photoURL: image,
        }).then(() => {
          setUser({ ...res.user, displayName: name, photoURL: image });
          navigate(location.state?.from?.pathname || "/");
        });
      })
      .catch((error) => {
        console.log(error.message);
        alert("Registration failed: " + error.message);
      });
  };

  return (
    <div className="bg-[url(/bg.png)] bg-contain min-h-screen flex items-center">
      <div className="bg-white bg-opacity-90 w-full max-w-6xl mx-auto p-8 rounded-xl shadow-lg">
        <div className="w-11/12 mx-auto">
          <div className="title mb-10 text-center">
            <Title>Join with Us</Title>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Form + Social Container */}
            <div className="flex-1 max-w-md w-full">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 backdrop-blur-sm bg-opacity-10 shadow-lg rounded-lg space-y-6"
              >
                <div className="flex items-center gap-4 border-b-2 border-gray-300 focus-within:border-orange-400 transition duration-200">
                  <BiUser className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 p-2 bg-transparent placeholder-gray-400"
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    required
                  />
                </div>

                <div className="flex items-center gap-4 border-b-2 border-gray-300 focus-within:border-orange-400 transition duration-200">
                  <BiImageAdd className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 p-2 bg-transparent placeholder-gray-400"
                    type="text"
                    name="image"
                    placeholder="Enter Image URL"
                  />
                </div>

                <div className="flex items-center gap-4 border-b-2 border-gray-300 focus-within:border-orange-400 transition duration-200">
                  <BiEnvelope className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 p-2 bg-transparent placeholder-gray-400"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>

                <div className="flex items-center gap-4 border-b-2 border-gray-300 focus-within:border-orange-400 transition duration-200">
                  <BiKey className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 p-2 bg-transparent placeholder-gray-400"
                    type="password"
                    name="pass"
                    placeholder="Enter Password"
                    required
                  />
                </div>

                <input
                  type="submit"
                  value="Register Now"
                  className="btn bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition cursor-pointer"
                />
              </form>

              {/* Social button below form */}
              <div className="mt-6">
                <Social />
              </div>
            </div>

            {/* Lottie animation */}
            <div className="flex-1 max-w-lg w-full hidden md:flex justify-center">
              <Lottie animationData={happy} className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
