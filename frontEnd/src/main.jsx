import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Error } from "./components/Error.jsx";
import { AutenticatedPlayer } from "./Client/AutenticatedPlayer.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/Autenticated-Player",
    element: (
      <ProtectedRoute>
        <AutenticatedPlayer />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
