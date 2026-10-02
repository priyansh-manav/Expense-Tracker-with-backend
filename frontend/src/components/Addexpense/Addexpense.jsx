import React, { useState ,useEffect, use } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Addexpense() {
  const nevigate = useNavigate()
  const [formData, setFormData] = useState({
    expenseitem: "",
    expensecost: "",
    expensedate: "",
    expensedetail: "",
  });

  const userid = localStorage.getItem('userid');

  useEffect(() => {
    if(!userid){
      nevigate('/login')
    }
  },[userid]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API_URL = import.meta.env.VITE_API_URL;
  // const handleLogout = () => {};
  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const response = await fetch(`${API_URL}/add_expense/`,{
        method : "POST",
        header : {'Content-Type' : 'application/json'},
        body : JSON.stringify({...formData,Userid : userid}),
      })

      if (response.status === 201){
        toast.success("Expense Added Successfully")
        setTimeout(() => {
          nevigate('/manageExpense')
        },2000)
      } else{
        const data = await response.json();
        toast.error(data.message)
      }

    }catch(error){
      console.log('Error : ',error);
      toast.error("Something went wrong! try again")
    }
    
  };

  const handleClear = () => {
    setFormData({
      expenseitem :'',
      expensecost: "",
      expensedate: "",
      expensedetail: "",
    })
  }
  return (
    <>
      <div className="min-h-screen bg-white px-4 py-10 md:px-8 mt-10">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-5">
              Add Expense
            </h1>

            <p className="text-gray-500 mt-2">
              Record your expense and keep your finances organized.
            </p>
          </div>

          {/* Form Card */}
          <div
            className="bg-gray-100 rounded-[32px] p-6 md:p-10 shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
          >
            <form onSubmit={handleSubmit}>
              {/* Expense Title */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expense Title
                </label>

                <input
                  type="text"
                  name="expenseitem"
                  onChange={handleChange}
                  value={formData.expenseitem}
                  placeholder="e.g. Grocery Shopping"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white outline-none  text-gray-900 placeholder-gray-400 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-black/10"
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
                      value={formData.expensecost}
                      onChange={handleChange}
                      placeholder="0.00"
                      min="0"
                      step={0.001}
                      required
                      className="w-full pl-10 pr-5 py-4 rounded-2xl bg-white outline-none  text-gray-900 placeholder-gray-400 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-black/10"
                    />
                  </div>
                </div>
                {/* Category */}
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-white outline-none
                  text-gray-900
                  shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]
                  focus:ring-2 focus:ring-black/10"
                  >
                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                    <option value="Other">Other</option>
                  </select>
                </div> */}
              </div>

              {/* Date */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>

                <input
                  type="date"
                  name="expensedate"
                  value={formData.expensedate}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white outline-none  text-gray-900 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-black/10"
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
                  value={formData.expensedetail}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Add some details about this expense..."
                  className="w-full px-5 py-4 rounded-2xl bg-white outline-none resize-none text-gray-900 placeholder-gray-400 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-black/10"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  style={{ borderRadius: "9999px" }}
                  className="flex-1 px-6 py-4 rounded-full bg-black text-white font-medium transition hover:scale-[1.02] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]"
                >
                  Add Expense
                </button>

                <button
                  type="button"
                  style={{ borderRadius: "9999px" }}
                  onClick={handleClear}
                  className="flex-1 px-6 py-4 rounded-full bg-white text-black font-medium transition hover:scale-[1.02] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Addexpense;

