import React from "react";

const InputField = ({ label, type = "text", placeholder = "", name }) => {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <label
        htmlFor={name || label}
        className="font-semibold text-sm text-gray-800">
        {label} <span className="text-primary-600">*</span>
      </label>
      <input
        id={name || label}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-full px-6 py-3 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
      />
    </div>
  );
};

export default InputField;
