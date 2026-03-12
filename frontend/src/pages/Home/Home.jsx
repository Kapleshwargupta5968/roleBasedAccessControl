import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Home = () => {

  const {user} = useAuth();

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Secure Role-Based Authentication System
          </h1>

          <p className="text-gray-600 mb-8 text-lg">
            A modern MERN stack authentication system with JWT,
            refresh tokens, role-based access control, and
            Google authentication.
          </p>

          <div className="flex gap-4">

            <Link
              to="/register"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            {
              !user && (
            <Link
              to="/signin"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Login
            </Link>
              )
            }

          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1677093905889-c60a2db5d5c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF1dGhlbnRpY2F0aW9ufGVufDB8fDB8fHww"
            alt="authentication"
            className="w-full max-w-md rounded-4xl"
          />
        </div>

      </section>

      {/* Features Section */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                JWT Authentication
              </h3>
              <p className="text-gray-600">
                Secure login using access token and refresh token.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Role Based Access
              </h3>
              <p className="text-gray-600">
                Different dashboards and routes for admin and users.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Google Login
              </h3>
              <p className="text-gray-600">
                Quickly sign in or register using your Google account.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;