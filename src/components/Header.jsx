import { useContext, useState } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { RiMenuAddLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Logged out!", "", "success");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const commonLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const privateLinks = [
    { name: "Add Food", path: "/add-food" },
    { name: "Manage My Foods", path: "/manage-my-foods" },
    { name: "My Food Requests", path: "/my-food-requests" },
    { name: "Available Foods", path: "/available-foods" },
  ];

  const renderNavLinks = () =>
    [...commonLinks, ...(user ? privateLinks : [])].map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        onClick={() => setIsMenuOpen(false)} // ✅ Close menu on click
        className={({ isActive }) =>
          `px-2 py-1 rounded-md transition-colors duration-300 ${
            isActive
              ? "text-green-600 border-b-2 border-green-600 font-semibold"
              : "hover:text-green-600"
          }`
        }
      >
        {item.name}
      </NavLink>
    ));

  return (
    <nav className="overflow-x-clip shadow-md bg-gray-100 z-50 sticky top-0">
      {user && (
        <p className="text-center text-white bg-green-600 py-2 text-sm">
          Welcome {user?.displayName} ❤️. Now you can enjoy all features 🍉
        </p>
      )}

      <div className="w-11/12 mx-auto py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-600 tracking-wide hover:text-orange-500 transition"
        >
          FoodShare 🍳
        </Link>

        {/* Menu for Large Devices */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          {renderNavLinks()}
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-green-600 text-white border-none hover:bg-green-700"
              >
                Logout
              </button>
              <img
                src={user.photoURL || "/avatar.png"}
                alt="profile"
                className="w-8 h-8 rounded-full border border-orange-500 ml-2 object-cover"
              />
            </>
          ) : (
            <>
              <NavLink to="/login" className="hover:text-green-600">
                Login
              </NavLink>
              <NavLink to="/registration" className="hover:text-green-600">
                Register
              </NavLink>
            </>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          {!isMenuOpen ? (
            <RiMenuAddLine
              onClick={() => setIsMenuOpen(true)}
              className="text-2xl cursor-pointer text-green-600"
            />
          ) : (
            <CgMenuMotion
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl cursor-pointer text-green-600"
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown with Smooth Slide Animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-gray-100 ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700">
          {renderNavLinks()}
          {user ? (
            <>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="btn bg-green-600 text-white border-none hover:bg-green-700 btn-sm w-full"
              >
                Logout
              </button>
              <div className="flex justify-center mt-3">
                <img
                  src={user.photoURL || "/avatar.png"}
                  alt="profile"
                  className="w-10 h-10 rounded-full border border-orange-500 object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-green-600"
              >
                Login
              </NavLink>
              <NavLink
                to="/registration"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-green-600"
              >
                Register
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
