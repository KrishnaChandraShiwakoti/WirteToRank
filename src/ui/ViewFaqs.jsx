import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const ViewFaqs = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-2 px-2 py-3 rounded-xl w-10/12 bg-neutral-100 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        {title}{" "}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-gray-200 p-1 rounded-sm hover:cursor-pointer ${
            isOpen
              ? "bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400"
              : ""
          }`}>
          {!isOpen ? <FaPlus /> : <FaMinus />}
        </button>
      </div>
      {isOpen && <div>{description}</div>}
    </div>
  );
};

export default ViewFaqs;
