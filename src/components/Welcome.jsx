import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RandomQuote from "./RandomQuote";
import PropTypes from "prop-types";
import MouseTrail from "./Trail";

const Welcome = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    ease: "easeInOut",
  };

  return (
    <motion.div
      ref={ref}
      className="welcome overflow-hidden w-full h-[110vh] flex flex-col items-center justify-between bg-black p-6 sm:p-14"
      initial="hidden"
      animate={controls}
    >
      <div className="h-20 mb-10 sm:mb-20 flex items-baseline gap-2 sm:gap-4">
        <span className="text-white font-serif italic text-xl sm:text-2xl">
          wierd
        </span>
        <h1 className="text-white font-pixel text-4xl sm:text-6xl">Gallery</h1>
      </div>
      <MouseTrail
        images={[
          "../../img1.jpg",
          "../../img2.jpg",
          "../../img3.jpg",
          "../../img4.jpg",
          "../../img5.jpg",
          "../../img6.jpg",
          "../../img7.jpg",
          "../../img8.jpg",
          "../../img9.jpg",
          "../../img10.jpg",
          "../../img11.jpg",
          "../../img12.jpg",
          "../../img13.jpg",
          "../../img14.jpg",
          "../../img15.jpg",
          "../../img16.jpg",
          "../../img17.jpg",
          "../../img18.jpg",
          "../../img19.jpg",
          "../../img20.jpg",
        ]}
        duration={1000}
        active={isIntersecting}
        containerRef={ref}
      />

      <div className="flex flex-col gap-5 sm:gap-10">
        <motion.div
          className="h-max flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.span
            className="welcome rounded-xl font-nerd items-center justify-center flex w-[80vw] lg:h-[5dvh]  sm:w-[90dvw] md:h-[5dvh] sm:h-[10dvh] bg-white"
            variants={itemVariants}
          >
            <span className="text-lg sm:text-xl">&gt;&gt;&nbsp;</span>
            <RandomQuote />
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

Welcome.propTypes = {
  setHover: PropTypes.func.isRequired,
};

export default Welcome;
