import React from "react";

const button = ({ title, onClick }) => {
  const handleClick = (e) => {
    console.log("click");

    if (typeof onClick === "function") {
      onClick(e);
    } else {
      // If no onClick provided, dispatch a global event so pages can open the modal
      window.dispatchEvent(new CustomEvent("open-form"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group m-3 p-[1.5px] rounded-[18px] bg-gradient-to-r hover:from-pink-400 hover:via-primary-600 hover:to-pink-400
             from-primary-400 via-primary-500 to-primary-400 transition duration-300 hover:cursor-pointer">
      <div
        className="rounded-[16px]  px-3 py-2 transition duration-300
               bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 group-hover:from-white group-hover:via-white group-hover:to-white font-medium text-white hover:text-primary-500">
        {title}
      </div>
    </button>
  );
};

export default button;
