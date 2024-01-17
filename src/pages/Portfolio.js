import React, { useContext } from "react";
import image1 from "../img/portfolio/1.png";
import image2 from "../img/portfolio/2.png";
import image3 from "../img/portfolio/3.png";
import image4 from "../img/portfolio/4.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { NavLink } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";
const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
      className="section "
    >
      <div className="container mx-auto h-full relative pt-16 lg:pt-0">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg-text-left pt-24 lg:pt-24 pb-8">
          <motion.div
            initial={{ opacity: 0, x: "-80%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-80%" }}
            transition={transition1}
            onMouseLeave={mouseLeaveHandler}
            onMouseEnter={mouseEnterHandler}
            className="flex flex-col lg-items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              maxime quos molestias commodi <br /> laudantium cum mollitia sint.
              Recusandae fuga dolorem ut! Enim quidem neque nemo repudiandae ad
              quas. Laborum, eaque.
            </p>
            <NavLink className="btn mb-[30px] mx-auto lg-mx-0" to={"/contact"}>
              Hire me
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={transition1}
            onMouseLeave={mouseLeaveHandler}
            onMouseEnter={mouseEnterHandler}
            className="grid grid-cols-2 gap-2"
          >
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image4}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
