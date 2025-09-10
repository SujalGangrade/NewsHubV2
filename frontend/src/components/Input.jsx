import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({ type, value, onChange, label, placeholder,name=null , required }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col space-y-1 relative">
      {label && (
        <label className="text-sm font-medium text-blue-700">{label}</label>
      )}

      <input
        type={isPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
      )}
    </div>
  );
};

export default Input;
