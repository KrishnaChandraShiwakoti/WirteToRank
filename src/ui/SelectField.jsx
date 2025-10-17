import React from "react";

const SelectField = ({ label, placeholder, css }) => {
  return (
    <div className={`${css}`}>
      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="" className="font-bold text-xxl">
          {label} <span>*</span>
        </label>
        <select
          name=""
          id=""
          className="
          w-full
          border
          border-gray-300
          rounded-3xl
           px-2 py-1
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500">
          <option value="">{placeholder}</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
    </div>
  );
};

export default SelectField;
