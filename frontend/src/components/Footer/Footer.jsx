import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const userid = localStorage.getItem("userid");
  return (
    <footer className="w-full mt-16 px-4 pb-6">
      <div
        className=" w-full max-w-6xl mx-auto p-8 rounded-[40px] bg-[#e0e0e0] shadow-[12px_12px_25px_#bebebe,-12px_-12px_25px_#ffffff]
        "
      >
        {/* Main Footer */}
        <div className="flex flex-wrap justify-between gap-10">
          {/* Logo / About */}
          <div className="max-w-sm">
            <Link to="/" className="text-black text-2xl font-semibold">
              ExpenseTrack — Made by Priyansh
            </Link>

            <p className="mt-3 text-gray-600 leading-relaxed">
              A simple and modern expense manager built to help you track and manage your daily expenses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>

            <div className="flex flex-col gap-2">
              <Link to="/" className="text-black hover:underline">
                Home
              </Link>
              {userid ? (
                <>
                  <Link to="/dashboard" className="text-black hover:underline">
                    Dashboard
                  </Link>
                  <Link to="/addExpense" className="text-black hover:underline">
                    Add Expense
                  </Link>
                  <Link to="/manageExpense" className="text-black hover:underline">
                    Manage Expense
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/about" className="text-black hover:underline">
                    About
                  </Link>

                  <Link to="/contact-us" className="text-black hover:underline">
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Follow Us</h3>

            <div className="flex gap-3">
              <a href="#" className="text-black hover:underline">
                Instagram
              </a>

              <a href="#" className="text-black hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-5 flex flex-wrap justify-between gap-3 text-sm text-gray-600">
          <p>© 2026 MyWebsite. All rights reserved.</p>

          <div className="flex gap-4">
            <Link to="/privacy" className="text-black hover:underline">
              Privacy Policy
            </Link>

            <Link to="/terms" className="text-black hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
