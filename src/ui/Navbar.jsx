import React from "react";
import Logo from "../assets/svg/Logo.svg";
import CTA from "./Buttons/CTA";

const Navbar = () => {
  return (
    <div className=" mx-auto my-1 w-8/12 rounded-full bg-primary-50 py-3">
      <div className=" ml-5 flex justify-between items-center">
        <a href="#">
          <img src={Logo} alt="" className="h-5" />
        </a>
        <div className=" gap-4 md:hidden lg:flex">
          <a href="#">Features</a>
          <a href="#">Analytics</a>
          <a href="#">Pricing</a>
          <a href="#">Integration</a>
        </div>
        <div className="mr-5 flex gap-4">
          <button className="text-primary-500 hover:cursor-pointer">
            Login
          </button>
          <CTA title={"Get Started Now"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
