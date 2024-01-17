import React, { useContext } from "react";
import WomanImg from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section pt-[130px] "
    >
      <div className="mx-auto h-full container">
        <div className="flex flex-col lg:flex-row h-full z-10 items-center justify-startpt-36 gap-x-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] w-full absolute bottom-0 left-0 top-72 z-6"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            onMouseLeave={mouseLeaveHandler}
            onMouseEnter={mouseEnterHandler}
            className="z-10"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to et suggestions form you</p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-4">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder::text-[#757879]"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder::text-[#757879]"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder::text-[#757879]"
                type="text"
                placeholder="Your message"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Sent it
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            onMouseLeave={mouseLeaveHandler}
            onMouseEnter={mouseEnterHandler}
            className="lg:flex-1"
          >
            <img src={WomanImg} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
