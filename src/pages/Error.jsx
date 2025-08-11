// import { useRouteError } from "react-router";
// import Header from "../components/Header";

// const Error = () => {
//   const error = useRouteError();
//   console.log(error);
//   return (
//     <div>
//       <Header></Header>
//       <div className="flex min-h-screen items-center justify-center">Error</div>
//     </div>
//   );
// };

// export default Error;

import { useRouteError, Link } from "react-router";
import Header from "../components/Header";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  // Extract status code if available
  const status = error?.status || 500;

  // Define different error messages & images
  const errorContent = {
    404: {
      title: "Page Not Found",
      message: "The page you’re looking for doesn’t exist or has been moved.",
      img: "https://illustrations.popsy.co/white/404.svg",
    },
    500: {
      title: "Server Error",
      message:
        "Something went wrong on our end. Please try again later or contact support.",
      img: "https://illustrations.popsy.co/white/server-down.svg",
    },
    default: {
      title: "Oops! Something Went Wrong",
      message:
        "We’re not sure what happened, but we’re working to fix it. Please try again.",
      img: "https://illustrations.popsy.co/white/error.svg",
    },
  };

  const { title, message, img } = errorContent[status] || errorContent.default;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-lg bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-green-600">
          {/* Illustration */}
          <img
            src={img}
            alt="Error illustration"
            className="w-56 mx-auto mb-6"
          />

          {/* Title */}
          <h1 className="text-4xl font-extrabold text-green-700 mb-3">
            {title}
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-6">{message}</p>

          {/* Developer error info (only in dev mode) */}
          {import.meta.env.DEV && error && (
            <pre className="bg-gray-100 text-left p-3 rounded-lg text-sm text-red-500 overflow-auto max-h-48 mb-6">
              {JSON.stringify(error, null, 2)}
            </pre>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
