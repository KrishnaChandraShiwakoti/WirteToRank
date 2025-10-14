import React from "react";

const SoftwareLogo = ({ logo, name }) => {
  return (
    <div className=" w-max px-4 py-3 bg-white shadow-2xs rounded-3xl flex gap-3">
      {logo && (
        <img src={logo} alt="" className="h-5 w-5 bg-transparent opacity-70" />
      )}
      <p>{name}</p>
    </div>
  );
};

export default SoftwareLogo;
