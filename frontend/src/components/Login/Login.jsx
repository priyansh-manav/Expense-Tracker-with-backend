import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const nevigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login/`, {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 200) {
        toast.success("Login successfull !");
        localStorage.setItem("userid", data.userid);
        localStorage.setItem("userName", data.userName);
        setTimeout(() => {
          nevigate("/dashboard");
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error : ", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className="bg-white text-black min-h-screen">
        {/* ================= LOGIN ================= */}

        <main className="flex items-center justify-center px-5 py-12">
          <div className="w-full max-w-md">
            {/* Heading */}

            <div className="text-center mb-8">
              <div
                className="inline-block px-5 py-3 mb-4 rounded-full bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-sm"
              >
                Welcome Back
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold">Login.</h1>

              <p className="text-gray-600 mt-4">
                Login to your account and continue.
              </p>
            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit}
              className="bg-[#e0e0e0] rounded-[30px] p-6 sm:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
            >
              {/* Username */}

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white rounded-2xl outline-none shadow-sm focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Password */}

              <div className="mb-3">
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full px-5 py-4 bg-white rounded-2xl outline-none shadow-sm focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Forgot Password */}

              <div className="text-right mb-6">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit */}

              <button
                type="submit"
                style={{ borderRadius: "9999px" }}
                className="w-full py-4 rounded-full bg-black text-white  text-lg font-medium hover:bg-gray-800 hover:scale-[1.02] transition shadow-lg"
              >
                Login
              </button>

              {/* Signup */}

              <p className="text-center text-gray-600 mt-6">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="font-semibold text-black hover:underline"
                >
                  Create Account
                </a>
              </p>
            </form>
          </div>
        </main>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
