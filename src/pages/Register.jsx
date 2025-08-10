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
    <div className="bg-[url(/bg.png)] bg-contain">
      <div className="bg-white bg-opacity-90 min-h-screen">
        <div className="w-11/12 mx-auto py-10 m-5 p-5">
          <div className="title mt-5">
            <Title>Join with Us</Title>
          </div>

          <div className="flex justify-between items-center gap-5 pt-8 flex-wrap-reverse">
            <div className="login-for flex-1">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-5 flex flex-col gap-8 backdrop-blur-sm bg-opacity-10 shadow-lg rounded-lg"
              >
                <div className="flex justify-start items-center">
                  <BiUser className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all duration-200"
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                  />
                </div>

                <div className="flex justify-start items-center">
                  <BiImageAdd className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all duration-200"
                    type="text"
                    name="image"
                    placeholder="Enter Image URL"
                  />
                </div>

                <div className="flex justify-start items-center">
                  <BiEnvelope className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all duration-200"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="flex justify-start items-center">
                  <BiKey className="text-3xl text-slate-500" />
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all duration-200"
                    type="password"
                    name="pass"
                    placeholder="Enter Password"
                  />
                </div>

                <input
                  type="submit"
                  value="Register Now"
                  className="btn cursor-pointer"
                />
              </form>
            </div>

            <Social />

            <div className="lottie flex-1 flex mx-20">
              <Lottie animationData={happy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
