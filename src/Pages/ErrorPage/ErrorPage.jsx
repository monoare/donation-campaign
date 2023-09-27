import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 to-pink-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-semibold mb-4">404</h1>
      <p className="text-red-500 text-2xl mb-4 font-semibold">Page Not Found</p>
      <p className="text-lg text-center mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
