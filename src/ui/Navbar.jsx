import React, { useState } from "react";
import Logo from "../assets/svg/Logo.svg";
import CTA from "./Buttons/CTA";
import { Link } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = ({ handleButtonClick }) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="relative mx-auto my-1 w-10/12 lg:w-8/12 rounded-full auto bg-primary-50 py-3">
      <div className=" ml-5 flex justify-between items-center">
        <a href="#">
          <img src={Logo} alt="" className="h-5" />
        </a>
        <div className=" gap-4 hidden lg:flex">
          <Link
            to="Features"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer"
            onClick={closeMenu}>
            Features
          </Link>
          <Link
            to="HowItWorks"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer"
            onClick={closeMenu}>
            How It Works
          </Link>
          <Link
            to="Learn"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer"
            onClick={closeMenu}>
            Learn
          </Link>
          <Link
            to="Integration"
            smooth={true}
            duration={500}
            className="hover:cursor-pointer"
            onClick={closeMenu}>
            Integration
          </Link>
        </div>

        {/* Mobile hamburger and actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-md text-primary-600 hover:bg-primary-100 mr-5">
            {open ? <IoClose size={20} /> : <IoMenu size={20} />}
          </button>

          <div className="mr-5 hidden lg:flex gap-4 items-center">
            <CTA title={"Get Started Now"} onClick={handleButtonClick} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute right-3 mt-3 mx-4 p-4 bg-white rounded-xl shadow-md text-black">
          <nav className="flex flex-col gap-3">
            <Link
              to="Features"
              smooth={true}
              duration={500}
              className="hover:cursor-pointer"
              onClick={closeMenu}>
              Features
            </Link>
            <Link
              to="HowItWorks"
              smooth={true}
              duration={500}
              className="hover:cursor-pointer"
              onClick={closeMenu}>
              How It Works
            </Link>
            <Link
              to="Learn"
              smooth={true}
              duration={500}
              className="hover:cursor-pointer"
              onClick={closeMenu}>
              Learn
            </Link>
            <Link
              to="Integration"
              smooth={true}
              duration={500}
              className="hover:cursor-pointer"
              onClick={closeMenu}>
              Integration
            </Link>
            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-3">
              <button className="text-primary-500 text-left">Login</button>
              <CTA
                title={"Get Started Now"}
                onClick={(e) => {
                  closeMenu();
                  handleButtonClick(e);
                }}
              />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
