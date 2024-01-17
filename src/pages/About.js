import React, { useContext } from "react";
import WomanImg from "../img/about/woman.png";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0,y:'100%'}}
      animate={{ opacity: 1 ,y:0}}
      exit={{ opacity: 0 , y:'100%'}}
      transition={transition1} 
      className="section"
    >
      <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="flex flex-col lg:flex-row h-full items-denter justify-center gap-x-24 text-center lg:text-left lg:pt-16 px-[30px] lg:px-[10px]">
        <div className="flex-1 max-h-max flex lg:max-h-max order-2 lg:order-none overflow-hidden items-center justify-end ">
          <img src={WomanImg} className="h-[600px]" alt="" />
        </div>
        <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col lg:pl-[100px] justify-center items-center lg:items-start ">
          <h1 className="h1">About me</h1>

          <p className="mb-12 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ut,
            ab est quis aperiam tempora non autem vel? Laudantium cumque
            cupiditate eos fuga modi perspiciatis suscipit magni asperiores
            dolorem.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            quidem nam voluptatem possimus fugit, voluptas excepturi voluptate
            aspernatur eius laboriosam.
          </p>
          <NavLink className="btn" to={"/portfolio"}>
            View my Work
          </NavLink>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
