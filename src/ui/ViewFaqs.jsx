import { useState } from "react";

const ViewFaqs = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-2 px-6 py-4 rounded-xl w-12/12 bg-neutral-50 flex flex-col gap-3 text-xl">
      <div className="flex justify-between items-center">
        <p className="font-medium max-xsm:text-lg">{title} </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-gray-200 py-1 px-3 rounded-sm hover:cursor-pointer ${
            isOpen
              ? "bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400"
              : ""
          }`}>
          {!isOpen ? "+" : "-"}
        </button>
      </div>
      {isOpen && (
        <div className="text-md text-neutral-500 text-start">{description}</div>
      )}
    </div>
  );
};

export default ViewFaqs;
