import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../index.scss";
import Cursor from "../components/cursor";

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

const teamMembers1 = [
  {
    name: "Ashish Tyagi",
    position: "Member",
    image: "/ashish.png",
    linkedin: "#",
    gmail: "mailto:ashishtyagisws12sci@gmail.com",
  },
  {
    name: "Anishka Sissodiya",
    position: "Member",
    image: "/anishka.jpg",
    linkedin: "#",
    gmail: "mailto:anishkasissodiya@gmail.com",
  },
  {
    name: "Kanishka Chauhan",
    position: "Member",
    image: "/kaniskha.jpg",
    linkedin: "#",
    gmail: "#",
  },
  {
    name: "Anushka Rawat",
    position: "Member",
    image: "/anuskha.jpg",
    linkedin: "#",
    gmail: "mailto:rawatanushkaddn@gmail.com",
  },
];

const Working = () => {
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
    <motion.div className="w-full h-screen bg-black overflow-auto">
      <Cursor hover={hover} zIndex={10000} invert={invert} />
      <motion.div
        initial="initial"
        animate="animate"
        variants={menuItemVariants}
        className="w-full h-full flex flex-col items-center gap-10 p-20"
      >
        <motion.h1
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          style={{ zIndex: hover ? 1 : "auto" }}
          className="text-white text-5xl md:text-7xl font-pixel text-center"
        >
          Working
        </motion.h1>
        <div className="w-full h-max flex items-center justify-center">
          <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
            {teamMembers1.map((member, index) => (
              <motion.div
                key={member.name}
                className="team-member w-full text-center flex flex-col gap-2 mb-8 items-center justify-center text-sm font-nerd"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
                />
                <h1 className="text-base font-bold text-white">
                  {member.name}
                </h1>
                <h2 className="text-md text-red-500">({member.position})</h2>
                <div className="flex space-x-4 mt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                  </a>
                  <a
                    href={member.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400"
                  >
                    <FontAwesomeIcon icon={faGoogle} size="1x" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Working;
