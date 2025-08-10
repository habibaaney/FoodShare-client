// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router";
// import mainRoutes from "./Routers/mainRoutes";
// import "./index.css";
// import AuthProvider from "./providers/AuthProvider";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//       <AuthProvider>
//         <RouterProvider router={mainRoutes}></RouterProvider>
//       </AuthProvider>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import mainRoutes from "./Routers/mainRoutes";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";

// ✅ Import TanStack Query Client
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ✅ Create a query client instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {/* ✅ Wrap with QueryClientProvider (won’t affect unused components) */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={mainRoutes}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
