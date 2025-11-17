import React from "react";

const CTA = ({ title, onClick }) => {
  const handleClick = (e) => {
    if (typeof onClick === "function") {
      onClick(e);
    } else {
      // fallback: open the form globally
      window.dispatchEvent(new CustomEvent("open-form"));
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleClick}
        className="w-full px-2 py-1.5 text-sm rounded-[12px] md:px-4 md:py-2 md:text-base md:rounded-[18px] text-white bg-gradient-to-r 
      from-primary-700 via-primary-400 to-primary-700 transition duration-800 hover:cursor-pointer  hover:from-primary-500 hover:via-primary-700 hover:to-primary-500">
        {title}
      </button>
    </div>
  );
};

export default CTA;
