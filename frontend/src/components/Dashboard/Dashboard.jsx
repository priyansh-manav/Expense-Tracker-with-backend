import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [expenses, setExpenses] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  const nevigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const userid = localStorage.getItem("userid");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API_URL}/search_expense/${userid}/?from=${fromDate}&to=${toDate}`,
      );

      // const data = await response.json();
      // setExpenses(data.expenses);
      // setGrandTotal(data.total);

      const data = await response.json();

   if (!response.ok) {
  toast.error(data.message || "Search failed!");
  return;
    }

   setExpenses(data.expenses);
   setGrandTotal(data.total);
    } catch (error) {
      // toast.error("Something went wrong!");
     //  console.error("Search error:", error);
     // toast.error("Unable to connect to server. Please try again.");
      console.error("Search error:", error);
toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!userid) {
      nevigate("/login");
    }
  }, [userid]);
  return (
    <>
      <div className="min-h-screen bg-white px-4 py-8 md:px-8 lg:px-12 mt-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-2">
                Welcome {userName} 👋
              </p>

              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Dashboard
              </h1>

              <p className="text-gray-500 mt-2">
                Here's what's happening with your finances.
              </p>
            </div>

            <Link
              to="/addExpense"
              className="w-fit px-6 py-3 rounded-full bg-black text-white shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:scale-[1.02] transition"
            >
              + Add Expense
            </Link>
          </div>
        </div>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {/* Balance */}
            {/* <div
              className="bg-gray-100 rounded-3xl p-6
            shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm">Total Balance</p>

                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                  ₹
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900">₹56,850</h2>

              <p className="text-sm text-gray-500 mt-2">Available balance</p>
            </div> */}

            {/* Income */}
            {/* <div
              className="bg-gray-100 rounded-3xl p-6
            shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm">Total Income</p>

                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                  ↑
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900">₹75,000</h2>

              <p className="text-sm text-gray-500 mt-2">This month</p>
            </div> */}

            {/* Expense */}
            <div className="bg-gray-100 rounded-3xl p-6 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] ">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm">Total Expense</p>

                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                  ↓
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900">
                ₹{grandTotal}
              </h2>

              <p className="text-sm text-gray-500 mt-2">This month</p>
            </div>

            {/* Search Expenses */}

            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-[950px]  bg-gray-100 rounded-3xl p-6 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-5">
                Search Expenses
              </h3>

              <div className="flex flex-col sm:flex-row items-end gap-3">
                {/* From Date */}
                <div className="flex-1 min-w-0">
                  <label className="block text-sm text-gray-500 mb-2">
                    From Date
                  </label>

                  <input
                    type="date"
                    name="fromdate"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className=" w-full px-4 py-3 rounded-full  bg-gray-100  text-gray-900 outline-none shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2  focus:ring-black/1 "
                  />
                </div>

                {/* To Date */}
                <div className="flex-1 min-w-0">
                  <label className="block text-sm text-gray-500 mb-2">
                    To Date
                  </label>

                  <input
                    type="date"
                    name="todate"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className=" w-full px-4 py-3 rounded-full  bg-gray-100 text-gray-900 outline-none shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2  focus:ring-black/1 "
                  />
                </div>

                {/* Search Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  style={{ borderRadius: "9999px" }}
                  className=" px-8 py-3 rounded-full  bg-black  text-white whitespace-nowrap shrink-0  shadow-[0_8px_16px_rgba(0,0,0,0.18)]  hover:bg-gray-800 hover:shadow-[0_10px_20px_rgba(0,0,0,0.22)]  transitio "
                >
                  Search
                </button>
              </div>
            </form>

            {/* Savings */}
            {/* <div
              className="bg-gray-100 rounded-3xl p-6
            shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm">Savings</p>

                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                  %
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900">76%</h2>

              <p className="text-sm text-gray-500 mt-2">Savings rate</p>
            </div> */}
          </div>

          {/* Middle Section */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"> */}
          {/* Monthly Overview */}
          {/* <div
              className="lg:col-span-2 bg-gray-100 rounded-3xl p-6 md:p-8
            shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Monthly Overview
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Income vs expenses
                  </p>
                </div>

                <button
                  className="px-4 py-2 rounded-full bg-white text-sm
                shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]"
                  style={{ borderRadius: "9999px" }}
                >
                  September 2026
                </button>
              </div>

            </div> */}
          {/* Fake Chart */}
          {/* <div className="h-64 flex items-end justify-between gap-3 px-2">
                {[
                  ["1", 35],
                  ["2", 55],
                  ["3", 42],
                  ["4", 70],
                  ["5", 48],
                  ["6", 82],
                  ["7", 62],
                  ["8", 92],
                  ["9", 68],
                  ["10", 78],
                  ["11", 58],
                  ["12", 88],
                ].map(([day, height]) => (
                  <div
                    key={day}
                    className="flex-1 h-full flex flex-col justify-end items-center gap-2"
                  >
                    <div
                      className="w-full max-w-10 bg-black rounded-t-2xl"
                      style={{ height: `${height}%` }}
                    ></div>

                    <span className="text-xs text-gray-400">{day}</span>
                  </div>
                ))}
              </div> */}

          {/* Categories */}
          {/* <div
              className="bg-gray-100 rounded-3xl p-6 md:p-8
            shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            >
              <div className="mb-7">
                <h2 className="text-xl font-semibold">Expense Categories</h2>

                <p className="text-sm text-gray-500 mt-1">
                  Where your money goes
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Food</span>
                    <span>₹5,200</span>
                  </div>

                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-black rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Bills</span>
                    <span>₹4,300</span>
                  </div>

                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-black rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Shopping</span>
                    <span>₹3,250</span>
                  </div>

                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full w-[45%] bg-black rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Entertainment</span>
                    <span>₹2,100</span>
                  </div>

                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full w-[30%] bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div
              className="bg-gray-100 rounded-3xl p-6 md:p-8
            shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            >
              <h2 className="text-xl font-semibold">Quick Actions</h2>

              <p className="text-sm text-gray-500 mt-1 mb-7">
                Manage your finances
              </p>

              <div className="space-y-4">
                <Link
                  to="/addExpense"
                  className="flex items-center justify-between w-full bg-black text-white rounded-2xl px-5 py-4 hover:scale-[1.02] transition"
                >
                  <span>Add Expense</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/manageExpense"
                  className="flex items-center justify-between w-full bg-white text-black rounded-2xl px-5 py-4 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:scale-[1.02] transition"
                >
                  <span>Manage Expenses</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/changePassword"
                  className="flex items-center justify-between w-full bg-white text-black rounded-2xl px-5 py-4 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:scale-[1.02] transition"
                >
                  <span>Change Password</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
            {/* Recent Transactions */}
            <div className="lg:col-span-2 bg-gray-100 rounded-3xl p-6 md:p-8 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">
              <div className="flex items-center justify-between mb-7">
                <div>
                  <h2 className="text-xl font-semibold">Recent Transactions</h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Your latest activity
                  </p>
                </div>

                <Link
                  to="/manageExpense"
                  className="text-black text-sm font-medium hover:underline"
                >
                  View all
                </Link>
              </div>

              <div className="space-y-4">
                {expenses.map((exp, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4  bg-white rounded-2xl px-4 py-4 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-11 h-11 shrink-0 rounded-full bg-gray-100 flex items-center justify-center font-medium">
                        {exp.expenseitem.charAt(0)}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-medium truncate">
                          {exp.expenseitem}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1">
                          {exp.expenseitem} • {exp.expensedate}
                        </p>
                      </div>
                    </div>

                    <p
                      className={`font-semibold whitespace-nowrap ${
                        exp.expensecost.startsWith("+")
                          ? "text-black"
                          : "text-gray-700"
                      }`}
                    >
                      ₹{exp.expensecost.toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Dashboard;
