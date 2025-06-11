import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Error } from "./components/Error.jsx";
import { AutenticatedPlayer } from "./Client/AutenticatedPlayer.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { Lobby } from "./Client/Lobby.jsx";
import { AddFriend } from "./Client/AddFriend.jsx";
import { History } from "./Client/History.jsx";
import { Achievements } from "./Client/Achievements.jsx";
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
    children: [
      {
        path: "create-lobby",
        element: <Lobby />,
      },
      {
        path: "New-friends",
        element: <AddFriend />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "achievements",
        element: <Achievements />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
