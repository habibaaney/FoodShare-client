import React, { useContext } from "react";
import Lottie from "lottie-react";
import { BiEnvelope, BiKey } from "react-icons/bi";
import Social from "../components/Social";
import Title from "../components/Title";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import loginAnimation from "../assets/loginAnimation.json";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const pass = form.pass.value.trim();

    if (!email || !pass) {
      alert("Please fill in both email and password.");
      return;
    }

    signIn(email, pass)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        alert("Login failed: " + err.message);
        console.error(err);
      });
  };

  return (
    <div className="bg-[url(/bg.png)] bg-contain min-h-screen flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-90 w-full max-w-5xl mx-auto rounded-lg shadow-lg p-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Login form + Social below */}
        <div className="flex flex-col w-full max-w-md">
          <div className="mb-6">
            <Title>Login Now</Title>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-6"
          >
            <div className="flex items-center border-b-2 border-transparent focus-within:border-orange-400 transition duration-200">
              <BiEnvelope className="text-3xl text-slate-500 mr-3" />
              <input
                className="outline-none flex-1 p-2 bg-transparent"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col border-b-2 border-transparent focus-within:border-orange-400 transition duration-200">
              <div className="flex items-center">
                <BiKey className="text-3xl text-slate-500 mr-3" />
                <input
                  className="outline-none flex-1 p-2 bg-transparent"
                  type="password"
                  name="pass"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <p
                className="text-right text-sm text-slate-500 cursor-pointer hover:underline select-none mt-1"
                onClick={() =>
                  alert(
                    "Forgot password feature coming soon! Please contact support."
                  )
                }
              >
                Forgot password?
              </p>
            </div>

            <div className="flex items-center gap-2 -mt-2">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember" className="select-none text-sm">
                Remember Me
              </label>
            </div>

            <input
              type="submit"
              value="Login Now"
              className="btn cursor-pointer bg-orange-500 hover:bg-orange-600 border-0 text-white font-semibold transition py-3 rounded-md"
            />
          </form>

          {/* Social login under form */}
          <div className="mt-8">
            <Social />
          </div>
        </div>

        {/* Right: Lottie Animation */}
        <div className="flex-1 max-w-md w-full">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
