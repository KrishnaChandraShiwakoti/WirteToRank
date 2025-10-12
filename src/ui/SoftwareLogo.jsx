import React from "react";

const SoftwareLogo = ({ logo, name }) => {
  return (
    <div className=" w-max p-3 bg-white shadow-2xs rounded-3xl">
      {logo && <img src={logo} alt="" />}
      <p>{name}</p>
    </div>
  );
};

export default SoftwareLogo;
