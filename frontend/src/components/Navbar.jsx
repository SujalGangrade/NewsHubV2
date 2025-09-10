import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineAppRegistration } from "react-icons/md";
import { FiHome } from "react-icons/fi";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaRegNewspaper className="text-2xl" />
          <h1 className="text-2xl font-extrabold tracking-wide">NewsHub</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-medium items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-1 ${
                  isActive
                    ? "text-yellow-200 font-semibold"
                    : "hover:text-yellow-100 transition"
                }`
              }
            >
              <FiHome className="text-lg" />
              <span>Home</span>
            </NavLink>
          </li>

          {!user && (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `flex items-center space-x-1 ${
                      isActive
                        ? "text-yellow-200 font-semibold"
                        : "hover:text-yellow-100 transition"
                    }`
                  }
                >
                  <AiOutlineLogin className="text-lg" />
                  <span>Login</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `flex items-center space-x-1 ${
                      isActive
                        ? "text-yellow-200 font-semibold"
                        : "hover:text-yellow-100 transition"
                    }`
                  }
                >
                  <MdOutlineAppRegistration className="text-lg" />
                  <span>Signup</span>
                </NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex items-center space-x-1 ${
                      isActive
                        ? "text-yellow-200 font-semibold"
                        : "hover:text-yellow-100 transition"
                    }`
                  }
                >
                  <MdOutlineDashboard className="text-lg" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    `flex items-center space-x-1 ${
                      isActive
                        ? "text-yellow-200 font-semibold"
                        : "hover:text-yellow-100 transition"
                    }`
                  }
                >
                  <AiOutlineLogout className="text-lg" />
                  <span>Logout</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Drawer (Right to Left) */}
      <div
        className={`fixed top-0 right-0 h-full w-1/4 bg-white text-gray-800 shadow-lg transform transition-transform duration-300 z-30 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-purple-100">
          <div className="flex items-center space-x-2 text-purple-600">
            <FaRegNewspaper className="text-2xl" />
            <h1 className="text-xl font-bold">NewsHub</h1>
          </div>
          <button
            className="text-2xl text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="flex flex-col space-y-6 px-6 py-6 font-medium">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center space-x-2 ${
                  isActive
                    ? "text-purple-600 font-semibold"
                    : "hover:text-purple-500 transition"
                }`
              }
            >
              <FiHome className="text-lg" />
              <span>Home</span>
            </NavLink>
          </li>

          {!user && (
            <>
              <li>
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 ${
                      isActive
                        ? "text-purple-600 font-semibold"
                        : "hover:text-purple-500 transition"
                    }`
                  }
                >
                  <AiOutlineLogin className="text-lg" />
                  <span>Login</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 ${
                      isActive
                        ? "text-purple-600 font-semibold"
                        : "hover:text-purple-500 transition"
                    }`
                  }
                >
                  <MdOutlineAppRegistration className="text-lg" />
                  <span>Signup</span>
                </NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 ${
                      isActive
                        ? "text-purple-600 font-semibold"
                        : "hover:text-purple-500 transition"
                    }`
                  }
                >
                  <MdOutlineDashboard className="text-lg" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 ${
                      isActive
                        ? "text-purple-600 font-semibold"
                        : "hover:text-purple-500 transition"
                    }`
                  }
                >
                  <AiOutlineLogout className="text-lg" />
                  <span>Logout</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
