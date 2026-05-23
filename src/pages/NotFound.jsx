import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      
      <div className="text-center">
        
        <h1 className="text-8xl font-black text-[#7c3aed]">
          404
        </h1>

        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-[#7c3aed] text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-all"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;