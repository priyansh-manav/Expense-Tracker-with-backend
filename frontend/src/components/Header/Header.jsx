import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import expenseLogo from "../../assets/expense.png";

function Header() {
  const navigate = useNavigate();
  const userid = localStorage.getItem("userid");
  const handleLogout = () => {
    localStorage.removeItem("userid");
    navigate("/");
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 pt-5">
      <div className="relative flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-2 py-1 mr-3 bg-gray-100 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.18)] text-lg font-medium hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition"
        >
          <img
            src={expenseLogo}
            alt="Expense Manager"
            className="w-40 h-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav
          className=" hidden xl:inline-flex h-[72px] items-center justify-center whitespace-nowrap  bg-gray-100 rounded-full absolute top-0 left-1/2 -translate-x-1/2 gap-2 p-2 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] z-50 hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-3 rounded-full transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-white/60"
              }`
            }
          >
            Home
          </NavLink>

          {userid ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-white/60"
                  }`
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/addExpense"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-white/60"
                  }`
                }
              >
                Add Expense
              </NavLink>

              <NavLink
                to="/manageExpense"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-white/60"
                  }`
                }
              >
                Manage Expense
              </NavLink>

              <NavLink
                to="/changePassword"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-white/60"
                  }`
                }
              >
                Change Password
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-white/60"
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `px-5 py-3 rounded-full transition ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-white/60"
                  }`
                }
              >
                Contact us
              </NavLink>
            </>
          )}
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-2">
          {/* LOGIN / SIGNUP / LOGOUT */}
          {userid ? (
            <button
              type="button"
              onClick={handleLogout}
              style={{ borderRadius: "9999px" }}
              className="hidden xl:inline-flex px-5 py-3 rounded-full bg-black text-white hover:scale-105 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden xl:inline-flex px-5 py-3 rounded-full bg-black text-white hover:scale-105 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="hidden xl:inline-flex px-5 py-3 rounded-full bg-black text-white hover:scale-105 transition"
              >
                Signup
              </Link>
            </>
          )}

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="relative xl:hidden">
            <button
              type="button"
              style={{ borderRadius: "9999px" }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-5 py-3 rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 transition"
            >
              <span>Menu</span>

              <span
                className={`text-lg transition-transform duration-300 ${
                  menuOpen ? "rotate-180" : ""
                }`}
              >
                ☰
              </span>
            </button>

            {/* ================= MOBILE DROPDOWN ================= */}
            {menuOpen && (
              <div
                className=" absolute right-0 top-14 w-64  bg-gray-100 rounded-3xl p-3 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] z-[100] "
              >
                {/* HOME */}
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-5 py-3 rounded-2xl transition ${
                      isActive
                        ? "bg-black text-white"
                        : "text-black hover:bg-white/60"
                    }`
                  }
                >
                  Home
                </NavLink>

                {userid ? (
                  <>
                    {/* DASHBOARD */}
                    <NavLink
                      to="/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-3 rounded-2xl transition ${
                          isActive
                            ? "bg-black text-white"
                            : "text-black hover:bg-white/60"
                        }`
                      }
                    >
                      Dashboard
                    </NavLink>

                    {/* ADD EXPENSE */}
                    <NavLink
                      to="/addExpense"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-3 rounded-2xl transition ${
                          isActive
                            ? "bg-black text-white"
                            : "text-black hover:bg-white/60"
                        }`
                      }
                    >
                      Add Expense
                    </NavLink>

                    {/* MANAGE EXPENSE */}
                    <NavLink
                      to="/manageExpense"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-3 rounded-2xl transition ${
                          isActive
                            ? "bg-black text-white"
                            : "text-black hover:bg-white/60"
                        }`
                      }
                    >
                      Manage Expense
                    </NavLink>

                    {/* CHANGE PASSWORD */}
                    <NavLink
                      to="/changePassword"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-3 rounded-2xl transition ${
                          isActive
                            ? "bg-black text-white"
                            : "text-black hover:bg-white/60"
                        }`
                      }
                    >
                      Change Password
                    </NavLink>

                    {/* LOGOUT */}
                    <button
                      type="button"
                      style={{ borderRadius: "9999px" }}
                      onClick={() => {
                        handleLogout();
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-5 py-3 rounded-2xl bg-black text-white mt-1 hover:bg-gray-800 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    {/* ABOUT */}
                    <NavLink
                      to="/about"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-3 rounded-2xl transition ${
                          isActive
                            ? "bg-black text-white"
                            : "text-black hover:bg-white/60"
                        }`
                      }
                    >
                      About
                    </NavLink>

                    {/* CONTACT */}
                    <NavLink
                      to="/contact-us"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-3 rounded-2xl transition ${
                          isActive
                            ? "bg-black text-white"
                            : "text-black hover:bg-white/60"
                        }`
                      }
                    >
                      Contact us
                    </NavLink>
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="block px-5 py-3 rounded-2xl text-black hover:bg-white/60 transition"
                    >
                      Login
                    </Link>

                    <Link
                      to="/signup"
                      onClick={() => setMenuOpen(false)}
                      className="block px-5 py-3 rounded-2xl text-black hover:bg-white/60 transition"
                    >
                      Signup
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
