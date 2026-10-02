import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const userid = localStorage.getItem("userid");
  return (
    <main className="min-h-screen px-6 py-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <span className="px-5 py-3 mb-4 rounded-full bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-sm">
          Manage Your Expenses Smarter
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          Track Your Expenses
          <br />
          Manage Your Money.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          A simple and intuitive expense manager to track your daily spending,
          manage expenses, and stay in control of your finances.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {userid ? (
            <>
              <Link
                to="/dashboard"
                className=" px-7 py-3 rounded-full bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:scale-105 transition"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/about"
                className="px-7 py-3 rounded-full bg-black text-white hover:scale-105 transition"
              >
                About
              </Link>

              <Link
                to="/contact-us"
                className=" px-7 py-3 rounded-full bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:scale-105 transition"
              >
                Contact Us
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className=" p-8 rounded-[35px]  bg-[#e0e0e0] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
        >
          <h2 className="text-2xl font-semibold">Easy Expense Tracking</h2>

          <p className="mt-3 text-gray-600">
            Track your daily expenses and keep all your spending organized in one place.
          </p>
        </div>

        <div
          className=" p-8 rounded-[35px] bg-[#e0e0e0] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
        >
          <h2 className="text-2xl font-semibold">Smart Expense Management</h2>

          <p className="mt-3 text-gray-600">
            Add, edit, delete, and manage your expenses with a simple and intuitive interface.
          </p>
        </div>

        <div
          className=" p-8 rounded-[35px] bg-[#e0e0e0] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
        >
          <h2 className="text-2xl font-semibold">Secure & Responsive</h2>

          <p className="mt-3 text-gray-600">
            Access your expenses easily across devices with a clean, responsive, and user-friendly design.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
