import React from "react";

const SelectField = ({ label, placeholder = "Select an option", css = "" }) => {
  return (
    <div className={`${css} w-full`}>
      <div className="flex flex-col gap-2 items-start w-full">
        <label htmlFor={label} className="font-semibold text-sm text-gray-800">
          {label} <span className="text-primary-600">*</span>
        </label>
        <select
          name={label}
          id={label}
          className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-gray-800">
          <option value="">{placeholder}</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
    </div>
  );
};

export default SelectField;
