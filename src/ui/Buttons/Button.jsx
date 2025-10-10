import React from "react";

const button = ({ title }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => console.log("ok")}
        className="group relative m-3 p-[1.5px] rounded-[18px] bg-gradient-to-r from-pink-400 via-primary-600 to-pink-400 
             hover:from-primary-400 hover:via-primary-500 hover:to-primary-400 transition duration-300 hover:cursor-pointer">
        <div
          className="rounded-[16px] bg-white px-5 py-2 transition duration-300 
               group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:via-primary-500 group-hover:to-primary-400">
          {title}
        </div>
      </button>
    </>
  );
};

export default button;
