import "../index.scss";
import Events from "./Events";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Resources from "./Resources";
import Joinus from "./Joinus";
import Contactus from "./Contactus";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const linkTransition = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
  transition: {
    duration: 0.7,
    ease: "easeInOut",
  },
};

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 400,
      damping: 20,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      stiffness: 400,
      damping: 20,
    },
  },
};

const Navbar = ({ setHover }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="navi w-full h-20 flex justify-between items-center p-8">
        <div className="ggbhai select-none h-max w-full justify-start items-baseline pl-10 gap-2 flex">
          <h1 className="text-2xl text-[#FF0079] font-pixel">Graphic</h1>
          <h1 className="text-2xl font-pixel">Geeks</h1>
        </div>
        <div className="flex items-center">
          <motion.div
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaBars className="w-6 h-6 text-gray-500" />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 bg-white w-full  z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
              <motion.div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="w-6 h-6 text-gray-500" />
              </motion.div>
              <Link to="/joinus" onClick={() => setIsOpen(false)}>
                <motion.div
                  variants={linkTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Joinus setHover={setHover} />
                </motion.div>
              </Link>
              <Link to="/contactus" onClick={() => setIsOpen(false)}>
                <motion.div
                  variants={linkTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Contactus setHover={setHover} />
                </motion.div>
              </Link>
              <Link to="/resources" onClick={() => setIsOpen(false)}>
                <motion.div
                  variants={linkTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Resources setHover={setHover} />
                </motion.div>
              </Link>
              <Link to="/events" onClick={() => setIsOpen(false)}>
                <motion.div
                  variants={linkTransition}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Events setHover={setHover} />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Navbar.propTypes = {
  setHover: PropTypes.func.isRequired,
};

export default Navbar;
