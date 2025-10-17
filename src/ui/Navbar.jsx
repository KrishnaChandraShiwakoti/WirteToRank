import React from "react";
import Logo from "../assets/svg/Logo.svg";
import CTA from "./Buttons/CTA";
import { Link } from "react-scroll";

const Navbar = ({ handleButtonClick }) => {
  return (
    <div className=" mx-auto my-1 w-10/12 lg:w-8/12 rounded-full bg-primary-50 py-3">
      <div className=" ml-5 flex justify-between items-center">
        <a href="#">
          <img src={Logo} alt="" className="h-5" />
        </a>
        <div className=" gap-4 hidden lg:flex">
          <Link
            to="Features"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer">
            Features
          </Link>
          <Link
            to="HowItWorks"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer">
            How It Works
          </Link>
          <Link
            to="Learn"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer">
            Learn
          </Link>
          <Link
            to="Integration"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer">
            Integration
          </Link>
        </div>
        <div className="mr-5 flex gap-4">
          <button className="text-primary-500 hover:cursor-pointer hidden lg:block">
            Login
          </button>
          <CTA title={"Get Started Now"} onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
