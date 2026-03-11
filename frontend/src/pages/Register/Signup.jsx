import { useState } from "react";
import Button from "../../components/resuable/Button";
import FormInputField from "../../components/resuable/FormInputField";
import GoogleLoginButton from "../../components/resuable/GoogleLoginButton";
import { Link } from "react-router-dom";
import axiosInstance from "../../services/api/axiosInstance";
import { toast } from "react-toastify";

const Signup = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/signup", form);
      toast.success(response?.data?.message);
      setForm(initialState);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <section className="w-full max-w-sm">
        <div className="bg-white shadow-md rounded-lg p-5 border border-gray-100">
          <div className="text-center mb-4">
            <h1 className="text-xl font-semibold text-gray-800">
              Create Account
            </h1>
            <p className="text-gray-500 text-xs mt-1">Sign up to get started</p>
          </div>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <GoogleLoginButton />
            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <FormInputField
              label="Name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <FormInputField
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <FormInputField
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <Button type="submit" title="Sign Up" />
          </form>

          <p className="text-xs text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;
