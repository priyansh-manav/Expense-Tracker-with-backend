import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Manageexpense() {


  const [editExpense, setEditExpense] = useState(null);

  const handleEdit = (expense) => {
    setEditExpense(expense);
  };

  const handleChange = (e) => {
    setEditExpense({ ...editExpense, [e.target.name]: e.target.value });
  };

  const API_URL = import.meta.env.VITE_API_URL;

  const nevigate = useNavigate();
  const userid = localStorage.getItem("userid");
  useEffect(() => {
    if (!userid) {
      nevigate("/login");
    }
    fetchExpenses(userid);
  });

  const fetchExpenses = async (userid) => {
    try {
      const response = await fetch(
        `${API_URL}/manage_expense/${userid}`,
      );
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error("Error :", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `${API_URL}/update_expense/${editExpense.id}/`,
        {
          method: "PUT",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify(editExpense),
        },
      );

      if (response.status === 200) {
        toast.success("Expense Updated Successfully");
        setEditExpense(null);
        fetchExpenses(userid);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [expenses, setExpenses] = useState([]);

  const handleDelete = async (userid) => {
    if (window.confirm("Are u sure you want to delete ?")) {
      try {
        const response = await fetch(
          `${API_URL}/delete_expense/${userid}/`,
          {
            method: "DELETE",
          },
        );
        if (response.status === 200) {
          toast.success("Expense Deleted Successfully");
          fetchExpenses(userid);
        } else {
          toast.error("Failed to Delete!");
        }
      } catch (error) {
        console.error("Something went wrong!!");
      }
    }
  };

  //   const filteredExpenses = expenses.filter((expense) => {
  //     const matchesSearch = expense.title
  //       .toLowerCase()
  //       .includes(search.toLowerCase());

  //     const matchesCategory =
  //       category === "All" || expense.category === category;

  //     return matchesSearch && matchesCategory;
  //   });

  const filteredExpenses = () => {};

  const totalExpense = expenses.reduce(
    (total, expense) => total + Number(expense.expensecost),
    0,
  );

  return (
    <>
      <div className="min-h-screen bg-white px-4 py-10 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            

            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-5">
              Manage Expenses
            </h1>

            <p className="text-gray-500 mt-2">
              View, edit and manage all your expenses.
            </p>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div
              className="bg-gray-100 rounded-3xl p-6
            shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            >
              <p className="text-sm text-gray-500">Total Expenses</p>

              <h2 className="text-3xl font-semibold mt-3">
                ₹{totalExpense.toLocaleString("en-IN")}
              </h2>
            </div>

            <div
              className="bg-gray-100 rounded-3xl p-6
            shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            >
              <p className="text-sm text-gray-500">Total Transactions</p>

              <h2 className="text-3xl font-semibold mt-3">{expenses.length}</h2>
            </div>

            <div
              className="bg-gray-100 rounded-3xl p-6
            shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            >
              <p className="text-sm text-gray-500">Showing</p>

              <h2 className="text-3xl font-semibold mt-3">
                {filteredExpenses.length}
              </h2>

              <p className="text-sm text-gray-500 mt-1">matching expenses</p>
            </div>
          </div>

          {/* Filters */}
          {/* <div
            className="bg-gray-100 rounded-3xl p-5 md:p-6 mb-8
          shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
          {/* <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Expense
                </label>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by expense name..."
                  className="w-full px-5 py-3 rounded-2xl bg-white
                outline-none text-gray-900 placeholder-gray-400
                shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]
                focus:ring-2 focus:ring-black/10"
                />
              </div>  */}

          {/* Category */}
          {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-5 py-3 rounded-2xl bg-white
                outline-none text-gray-900
                shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]
                focus:ring-2 focus:ring-black/10"
                >
                  <option value="All">All Categories</option>
                  <option value="Food">Food</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Bills">Bills</option>
                  <option value="Transport">Transport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Health">Health</option>
                </select>
              </div> */}
          {/* </div>
          </div>  */}

          {/* Expense List */}
          <div
            className="bg-gray-100 rounded-3xl p-5 md:p-8
          shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-7">
              <div>
                <h2 className="text-xl font-semibold">All Expenses</h2>

                <p className="text-sm text-gray-500 mt-1">
                  Manage your recorded expenses
                </p>
              </div>

              <span className="text-sm text-gray-500">
                {expenses.length} results
              </span>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 text-sm text-gray-500">
              <div className="col-span-4">Expense</div>

              {/* <div className="col-span-2">Category</div> */}

              <div className="col-span-2">Date</div>

              <div className="col-span-2">Amount</div>

              <div className="col-span-2">Actions</div>
            </div>

            {/* Expenses */}
            <div className="space-y-4">
              {expenses.length > 0 ? (
                expenses.map((expenses) => (
                  <div
                    key={expenses.id}
                    className="bg-white rounded-2xl p-5
                  shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff]"
                  >
                    {/* Desktop */}
                    <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-4 flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-full bg-gray-100
                        flex items-center justify-center font-medium"
                        >
                          {expenses.expenseitem.charAt(0)}
                        </div>

                        <div>
                          <p className="font-medium text-gray-900">
                            {expenses.expenseitem}
                          </p>
                        </div>
                      </div>

                      {/* <div className="col-span-2">
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-xs">
                          {expense.category}
                        </span>
                      </div> */}

                      <div className="col-span-2 text-sm text-gray-500">
                        {expenses.expensedate}
                      </div>

                      <div className="col-span-2 font-semibold">
                        ₹{expenses.expensecost.toLocaleString("en-IN")}
                      </div>

                      <div className="col-span-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(expenses)}
                          style={{ borderRadius: "9999px" }}
                          className="px-4 py-2 rounded-full bg-gray-100 text-sm shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]  hover:scale-[1.03] transition"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(expenses.id)}
                          style={{ borderRadius: "9999px" }}
                          className="px-4 py-2 rounded-full bg-black text-white text-sm hover:scale-[1.03] transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    {/* Mobile */}
                    {/* Mobile */}
                    <div className="md:hidden w-full min-w-0">
                      {/* Expense + Amount */}
                      <div className="flex items-center gap-3 w-full min-w-0">
                        {/* Expense */}
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div
                            className=" w-10 h-10 shrink-0 rounded-full bg-gray-100 flex items-center justify-center font-medium"
                          >
                            {expenses.expenseitem.charAt(0)}
                          </div>

                          <p className="font-medium text-gray-900 truncate min-w-0">
                            {expenses.expenseitem}
                          </p>
                        </div>

                        {/* Amount */}
                        {/* <p className="font-semibold whitespace-nowrap shrink-0">
                          ₹{expenses.expensecost.toLocaleString("en-IN")}
                        </p> */}
                      </div>

                      {/* Date + Actions */}
                      <div className="mt-4 pt-4 border-t border-gray-200 w-full">
                        {/* Date + Amount */}
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm text-gray-500">
                            {expenses.expensedate}
                          </p>

                          <p className="font-semibold whitespace-nowrap">
                            ₹{expenses.expensecost.toLocaleString("en-IN")}
                          </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2 w-full">
                          <button
                            type="button"
                            onClick={() => handleEdit(expenses)}
                            className=" flex-1 px-3 py-2 rounded-full  bg-gray-100 text-sm shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] hover:scale-[1.03] transition"
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(expenses.id)}
                            className=" flex-1 px-3 py-2 rounded-full  bg-black  text-white text-sm hover:scale-[1.03] transition"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-14">
                  <div
                    className="w-16 h-16 mx-auto rounded-full bg-gray-100
                  flex items-center justify-center text-2xl
                  shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]"
                  >
                    ₹
                  </div>

                  <h3 className="font-semibold text-lg mt-5">
                    No expenses found
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    Try changing your search or category filter.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {editExpense && (
          <div className="modal show d-block ">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <i className="fas fa-pen me-3"></i>Edit Expense
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    onClick={() => setEditExpense(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    {/* onSubmit={handleSubmit} */}
                    {/* Expense Title */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expense Title
                      </label>

                      <input
                        type="text"
                        name="expenseitem"
                        onChange={handleChange}
                        value={editExpense.expenseitem}
                        placeholder="e.g. Grocery Shopping"
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-white outline-none text-gray-900 placeholder-gray-400 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]focus:ring-2 focus:ring-black/10"
                      />
                    </div>

                    {/* Amount + Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Amount */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Amount
                        </label>

                        <div className="relative">
                          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
                            ₹
                          </span>

                          <input
                            type="number"
                            name="expensecost"
                            //   value={formData.expensecost}
                            onChange={handleChange}
                            value={editExpense.expensecost}
                            placeholder="0.00"
                            min="0"
                            step={0.001}
                            required
                            className="w-full pl-10 pr-5 py-4 rounded-2xl bg-white outline-none  text-gray-900 placeholder-gray-400 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-black/10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>

                      <input
                        type="date"
                        name="expensedate"
                        //   value={formData.expensedate}
                        onChange={handleChange}
                        value={editExpense.expensedate}
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-white outline-none  text-gray-900 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]  focus:ring-2 focus:ring-black/10"
                      />
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                        <span className="text-gray-400 font-normal ml-1">
                          (Optional)
                        </span>
                      </label>

                      <textarea
                        name="expensedetail"
                        //   value={formData.expensedetail}
                        onChange={handleChange}
                        value={editExpense.expensedetail}
                        rows="4"
                        placeholder="Add some details about this expense..."
                        className="w-full px-5 py-4 rounded-2xl bg-white outline-none resize-none text-gray-900 placeholder-gray-400 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-black/10"
                      />
                    </div>

                    {/* Buttons */}
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleUpdate}
                  >
                    Save changes
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setEditExpense(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
}

export default Manageexpense;
