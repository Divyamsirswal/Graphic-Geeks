import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 1,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  },
};

const Card = ({ index, title, texture, about }) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="card bg-white p-8 rounded shadow-6xl flex flex-col "
      whileHover={floatingAnimation}
      style={{
        transition: "background 0.4s ease",
      }}
    >
      <motion.h2 className=" text-md font-nerd text-black">{title}</motion.h2>
      <motion.h2 className=" text-sm text-red-500 font-nerd ">
        {about}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="w-auto h-auto"
        style={{ height: "300px" }}
      >
        <img src={texture} className=" object-cover w-full h-full" />
      </motion.div>
    </motion.div>
  );
};

export default Card;
