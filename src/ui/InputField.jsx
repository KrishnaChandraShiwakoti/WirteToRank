import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor="" className="font-bold text-xxl">
        {label} <span>*</span>
      </label>
      <input
        type={type}
        value=""
        placeholder={placeholder}
        className="border-1 border-neutral-400 rounded-2xl px-3 py-1 w-[100%] focus:ring-2 ring-primary-500 ring-offset-4 ring-offset-pink-500 dark:ring-offset-slate"
      />
    </div>
  );
};

export default InputField;
