import React from "react";

const button = ({ title, onClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={(e) => onClick(e)}
        className="group m-3 w-5/12 p-[1.5px] rounded-[18px] bg-gradient-to-r hover:from-pink-400 hover:via-primary-600 hover:to-pink-400 
             from-primary-400 via-primary-500 to-primary-400 transition duration-300 hover:cursor-pointer">
        <div
          className="rounded-[16px]  px-5 py-2 transition duration-300
               bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 group-hover:from-white group-hover:via-white group-hover:to-white">
          {title}
        </div>
      </button>
    </>
  );
};

export default button;
