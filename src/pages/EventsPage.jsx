import Cursor from "../components/cursor";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.scss";

const menuTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeInOut",
  },
};

const menuItemVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.03,
    x: 20,
    duration: 1,
    ease: "easeInOut",
    type: "spring",
    color: "#00000",
  },
};

const Menu = () => {
  const [hover, setHover] = useState(false);
  const [invert, setInvert] = useState(false);

  const handleHoverStart = () => {
    setHover(true);
    setInvert(true);
  };

  const handleHoverEnd = () => {
    setHover(false);
    setInvert(false);
  };

  return (
    <>
      <Cursor hover={hover} zIndex={10000} invert={invert} />
      <motion.div
        className="w-full h-screen p-20 pt-80 relative  flex flex-col gap-10  justify-center overflow-hidden bg-black"
        variants={menuTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1
          className="select-none eventy w-fit h-fit text-8xl absolute text-white m-20 left-0 top-10  font-pixel"
          whileHover="hover"
          onHoverStart={handleHoverStart}
          variants={menuItemVariants}
          onHoverEnd={handleHoverEnd}
          style={{ zIndex: hover ? 10001 : "auto" }}
        >
          Events
        </motion.h1>
        <div className=" w-max h-max gap-4 flex flex-col items-start justify-center">
          <Link to="/events/upcoming">
            <motion.h1
              className="select-none  text-white w-max h-max font-pixel text-3xl relative"
              variants={menuItemVariants}
              whileHover="hover"
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              style={{ zIndex: hover ? 10001 : "auto" }}
            >
              &gt; Upcoming
            </motion.h1>
          </Link>
          <Link to="/events/ongoing">
            <motion.h1
              className="select-none text-white w-max  h-max font-pixel text-3xl relative"
              variants={menuItemVariants}
              whileHover="hover"
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              style={{ zIndex: hover ? 10001 : "auto" }}
            >
              &gt; Ongoing
            </motion.h1>
          </Link>
          <Link to="/events/past">
            <motion.h1
              className="select-none  text-white w-max h-max font-pixel text-3xl relative"
              variants={menuItemVariants}
              whileHover="hover"
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              style={{ zIndex: hover ? 10001 : "auto" }}
            >
              &gt; Past
            </motion.h1>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
