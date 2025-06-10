import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export const ProtectedRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      const timer = setTimeout(() => {
        setDelayPassed(true);
      }, 2000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [authLoading]);

  if (authLoading || !delayPassed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#606C38] text-[#FEFAE0] text-xl font-semibold">
        <div className="animate-pulse">Checking authentication...</div>
      </div>
    );
  }

  return user ? children : <Navigate to="/" replace />;
};
