import React, { useContext } from "react";
import Socials from "./Socials";
import logo from "../img/header/logo.svg";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import { CursorContext } from "../context/CursorContext";
const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <>
      <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
        <div className="flex flex-col lg:flex-row lg-items-center w-full justify-between">
          {/* logo */}
          <NavLink
            onMouseLeave={mouseLeaveHandler}
            onMouseEnter={mouseEnterHandler}
            to={"./"}
            className="max-w-[200px] cursor-pointer"
          >
            <img src={logo} alt="" />
          </NavLink>
          {/* nav initially hidden show on desktop mode  */}
          <nav
            onMouseLeave={mouseLeaveHandler}
            onMouseEnter={mouseEnterHandler}
            className="hidden lg:flex justify-center items-center font-bold gap-x-12"
          >
            <NavLink to={"/"} className="text-[#696c6d] hover:-primary">
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className="text-[#696c6d] hover:text-primary"
            >
              About
            </NavLink>
            <NavLink
              to={"/portfolio"}
              className="text-[#696c6d] hover:text-primary"
            >
              Portfolio
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-[#696c6d] hover:text-primary"
            >
              Contact
            </NavLink>
          </nav>
        </div>
        <Socials />
        {/* mobileNav */}
        <MobileNav />
      </header>
    </>
  );
};

export default Header;
