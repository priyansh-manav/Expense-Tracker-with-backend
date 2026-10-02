import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="min-h-screen px-6 py-20">
      <section className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <span
            className=" inline-block px-5 py-3 mb-4 rounded-full bg-[#e0e0e0] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] text-sm"
          >
            About Us
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Manage Your Money.
            <br />
            Simplify Your Life.
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
            A simple and intuitive expense management platform designed to help you track your spending, manage expenses and understand your financial activity with ease.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className=" p-8 rounded-[35px] bg-[#e0e0e0] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
          >
            <h2 className="text-2xl font-semibold">Our Mission</h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              To make expense tracking simple, organized and accessible, so you can keep better control of your everyday spending.
            </p>
          </div>

          <div
            className="p-8 rounded-[35px] bg-[#e0e0e0] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
          >
            <h2 className="text-2xl font-semibold">Our Vision</h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              To create a simple and reliable expense management experience that helps users make informed financial decisions.
            </p>
          </div>

          <div
            className="
              p-8
              rounded-[35px]
              bg-[#e0e0e0]
              shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]
            "
          >
            <h2 className="text-2xl font-semibold">Our Values</h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Simplicity, accuracy, privacy and user-friendly design — keeping your financial management clear and hassle-free.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div
          className=" mt-16 p-10 text-center rounded-[40px]  bg-[#e0e0e0] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff "
        >
          <h2 className="text-3xl font-semibold">Want to know more?</h2>

          <p className="mt-3 text-gray-600">
            Feel free to get in touch with us.
          </p>

          <Link
            to="/contact-us"
            className=" inline-block mt-6 px-7 py-3 rounded-full  bg-black  text-white transition hover:scale-10 "
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
