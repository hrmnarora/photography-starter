import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { transition1 } from "./../transitions";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary flex lg:hidden">
      <div onClick={() => setOpenMenu(true)} className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div onClick={()=> setOpenMenu(false)} className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer">
          <IoMdClose />
        </div>
        <ul className="flex flex-col h-full justify-center text-primary font-fold text-3xl font-primary ">
          <li onClick={()=> setOpenMenu(false)} className="flex flex-col gap-y-8 items-center">
            <NavLink to="./">Home</NavLink>
            <NavLink to="./about">About</NavLink>
            <NavLink to="./portfolio">Portfolio</NavLink>
            <NavLink to="./contact">Contact</NavLink>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
