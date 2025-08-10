import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableFoods from "../pages/Foods/AvailableFoods";
import PrivateRoute from "./PrivateRoute";
import ManageMyFoods from "../pages/Foods/ManageMyFoods";
import FoodDetails from "../pages/Foods/FoodDetails";
import AddFood from "../pages/Foods/AddFood";
import MyFoodRequests from "../pages/Request/MyFoodRequests";
import ContactUs from "../components/ContactUs";
import PrivacyPolicy from "../components/PrivacyPolicy";
import AboutUs from "../components/AboutUs";
const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "available-foods",
        element: (
          <PrivateRoute>
            <AvailableFoods></AvailableFoods>
          </PrivateRoute>
        ),
      },
      // Private routes re added here
      {
        path: "food/:id",
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-my-foods",
        element: (
          <PrivateRoute>
            <ManageMyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "my-food-requests",
        element: (
          <PrivateRoute>
            <MyFoodRequests />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default mainRoutes;
