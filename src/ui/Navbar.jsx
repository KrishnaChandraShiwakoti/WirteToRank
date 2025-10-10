import React from "react";
import Logo from "../assets/svg/Logo.svg";
import CTA from "./Buttons/CTA";

const Navbar = () => {
  return (
    <div className=" mx-auto my-1 w-10/12 rounded-2xl bg-primary-50 py-3">
      <div className=" ml-5 flex justify-between items-center">
        <a href="#">
          <img src={Logo} alt="" className="h-5" />
        </a>
        <div className="flex gap-4">
          <a href="#">Features</a>
          <a href="#">Analytics</a>
          <a href="#">Pricing</a>
          <a href="#">Integration</a>
        </div>
        <div className="mr-5 flex gap-4">
          <button className="text-primary-500 hover:cursor-pointer">
            Login
          </button>
          <button
            type="button"
            onClick={() => console.log("ok")}
            className="px-2 py-2 rounded-sm text-white bg-primary-500 transition duration-800 hover:cursor-pointer">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
