import { AlertTriangle } from "lucide-react";

export const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center space-x-4">
        <AlertTriangle className="text-yellow-500 w-8 h-8" />
        <div>
          <h2 className="text-lg font-semibold text-yellow-600">
            Page Not Found
          </h2>
          <p className="text-sm text-gray-600">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
        </div>
      </div>
    </div>
  );
};
