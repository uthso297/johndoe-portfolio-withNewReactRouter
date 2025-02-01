import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row items-center bg-white p-8 shadow-lg rounded-lg">
                <div className="flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                        <div className="w-28 h-28 bg-gradient-to-r from-indigo-500 to-purple-500 clip-triangle"></div>
                        <div className="w-24 h-24 bg-purple-500 absolute top-4 left-6 clip-triangle"></div>
                        <span className="absolute text-white text-4xl font-bold">404</span>
                    </div>
                </div>

                <div className="hidden md:block w-px bg-gray-300 h-24 mx-8"></div>

                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold text-gray-800">
                        This page could not be found
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Go back to the homepage.
                    </p>
                    <Link
                        to="/"
                        className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
                    >
                        BACK TO HOME
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
