import { motion } from "framer-motion";
import "../index.scss";

const DiscoverFuture = () => {
  const text = "Discover The Future";

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        damping: 100,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="future">
      <img
        src={"/space.jpg"}
        className="absolute discover z-[-1] w-full h-[120vh] opacity-40 size-fit object-cover object-right-top invert"
        alt="Space Background"
      />
      <div className="w-full h-screen flex flex-col">
        <motion.div
          className="w-full flex h-screen flex-col overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <motion.div className="w-full mb-30 h-screen flex items-center justify-center">
            <motion.h1 className="text1 texty text-black text-8xl font-pixel">
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={itemVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DiscoverFuture;
