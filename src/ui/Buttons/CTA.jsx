import React from "react";

const CTA = ({ title }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => console.log("ok")}
        className="px-4 py-2 rounded-[18px] text-white bg-gradient-to-r 
      from-primary-700 via-primary-400 to-primary-700 transition duration-800 hover:cursor-pointer  hover:from-primary-500 hover:via-primary-700 hover:to-primary-500">
        {title}
      </button>
    </div>
  );
};

export default CTA;
