import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Changepassword() {
  const nevigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const userid = localStorage.getItem("userid");

  useEffect(() => {
    if (!userid) {
      nevigate("/login");
    }
  }, []);

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New Password do not match!");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/change_password/${userid}/`,
        {
          method: "POST",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify({
            currentPassword : formData.currentPassword,
            newPassword : formData.newPassword,
          }),
        },
      );

      const data = await response.json()
      if (response.status === 200) {
        toast.success(data.message);
        setFormData({currentPassword:"",newPassword:"",confirmPassword:""})
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error : ", error);
      toast.error("Something went wrong! try again!");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10 mt-10">
        <div
          className="w-full max-w-md bg-gray-100 rounded-[32px] p-8 md:p-10
        shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
        >
          {/* Heading */}
          <div className="text-center mb-8">
            <div
              className="inline-block px-5 py-2 rounded-full bg-gray-100
            text-sm text-gray-600
            shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]"
            >
              Account Security
            </div>

            <h1 className="text-3xl font-semibold text-gray-900 mt-5">
              Change Password
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Update your password to keep your account secure.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Current Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Enter current password"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white outline-none text-gray-900  placeholder:text-gray-400 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-black/10"
              />
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white outline-none text-gray-900  placeholder:text-gray-400 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-black/10"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white outline-none text-gray-900  placeholder:text-gray-400 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-black/10"
              />
            </div>

            {/* Show Password */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="w-4 h-4 accent-black"
              />

              <label
                htmlFor="showPassword"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Show password
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              style={{ borderRadius: "9999px" }}
              className="w-full bg-black text-white py-4 rounded-full
            transition hover:scale-[1.01] active:scale-[0.98]"
            >
              Update Password
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Changepassword;

