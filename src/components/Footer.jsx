import "../index.scss";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/graphic_geeks_geu/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link:
        "https://www.linkedin.com/posts/gg-geu_comingsoon-geudehradun-activity-7214554247353311232-e4cj?utm_source=share&utm_medium=member_desktop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.2, transition: { yoyo: Infinity, duration: 0.3 } },
  };

  return (
    <motion.div
      className="w-full h-auto bg-white flex flex-col items-center justify-between p-4 sm:p-10 select-none"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between w-full p-4 sm:p-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-pixel mb-4 sm:mb-0">
          <span className="text-[#FF0079]">Graphic</span> Geeks
        </h1>
        <div className="flex flex-col items-center sm:items-end w-full sm:w-auto p-2 sm:p-5 gap-4 sm:gap-10">
          <motion.div
            className="flex gap-4 sm:gap-8 mt-4"
            variants={containerVariants}
          >
            {socialIcons.map((icon, index) => (
              <motion.a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl md:text-4xl"
                variants={itemVariants}
                whileHover="hover"
              >
                {icon.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.p className="text-black text-xs sm:text-sm">
            © 2024 Graphic Geeks. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
