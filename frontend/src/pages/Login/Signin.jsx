import { useState } from "react";
import axiosInstance from "../../services/api/axiosInstance";
import { toast } from "react-toastify";
import FormInputField from "../../components/resuable/FormInputField";
import GoogleLoginButton from "../../components/resuable/GoogleLoginButton";
import Button from "../../components/resuable/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Signin = () => {

  const initialState = {
    email: "",
    password: ""
  };

  const [form, setForm] = useState(initialState);

  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const {setUser} = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/auth/signin", form);
      const user = response?.data?.user;
      setUser(user);
      toast.success(response?.data?.message);

     user && user.role === "Admin" ? navigate("/admindashboard") : navigate("/userdashboard");
      setForm(initialState);

    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-white to-blue-100 px-4">

      <section className="w-full max-w-md">

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Sign in to continue
            </p>
          </div>

          {/* Google Login */}
          <div className="mb-6">
            <GoogleLoginButton />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <FormInputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handelChange}
            />

            <FormInputField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handelChange}
            />

            <Button
              type="submit"
              title="Sign In"
              className="w-full"
            />

          </form>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?
            <span className="text-indigo-600 font-medium ml-1 cursor-pointer hover:underline">
              <Link to="/signup">Signup</Link>
            </span>
          </div>

        </div>

      </section>

    </main>
  );
};

export default Signin;