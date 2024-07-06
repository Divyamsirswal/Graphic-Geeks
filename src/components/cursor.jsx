import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "../index.scss";

const CustomCursor = ({ hover, zIndex = 9999, invert = false }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isClicked, setIsClicked] = useState(false);

  const springConfig = {
    damping: 40,
    stiffness: 500,
    type: "spring",
  };

  const xSpring = useSpring(cursorX, springConfig);
  const ySpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`custom-cursor ${hover ? "hover" : ""} ${
        isClicked ? "clicked" : ""
      }`}
      style={{
        translateX: xSpring,
        translateY: ySpring,
        zIndex,
        filter: invert ? "invert(1)" : "none",
        pointerEvents: "none",
      }}
    >
      <motion.div className="cursor-inner" />
    </motion.div>
  );
};

CustomCursor.propTypes = {
  hover: PropTypes.bool.isRequired,
  zIndex: PropTypes.number,
  invert: PropTypes.bool,
};

export default CustomCursor;
