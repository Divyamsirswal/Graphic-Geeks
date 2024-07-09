import { motion } from "framer-motion";
import "../index.scss";
import { faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoreTeam = () => {
  return (
    <div className="core-team-container w-full h-auto flex flex-col items-center bg-black px-4 py-10 sm:px-10 sm:py-10 lg:p-40">
      <motion.div
        className="h-max w-full flex items-center justify-center flex-col"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-500 font-pixel p-4 sm:p-14 text-center">
          Meet our Team
        </h1>
      </motion.div>
      <div className="w-full h-full">
        <div className="presi w-full h-full flex flex-col sm:flex-row items-center justify-evenly gap-10 sm:gap-10">
          {teamMembers1.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-member flex flex-col gap-1 items-center justify-center text-sm font-nerd p-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover glow-effect"
              />
              <h1 className="text-lg sm:text-xl font-bold text-white text-center">
                {member.name}
              </h1>
              <h1 className="text-md sm:text-lg text-red-500 text-center">
                ({member.position})
              </h1>
              <div className="flex space-x-2">
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
    </div>
  );
};

const teamMembers1 = [
  {
    name: "Shakshat Jain",
    position: "President",
    image: "/shakshatjain.jpg",
    linkedin: "#",
    gmail: "mailto:shakshatjain4040@gmail.com",
  },
  {
    name: "Aniruddh Singh",
    position: "Vice President",
    image: "/anirudh.jpg",
    linkedin: "#",
    gmail: "mailto:saniruddh123@gmail.com",
  },
  {
    name: "Shauryman Singh Taragi",
    position: "Vice President",
    image: "/shauraman.jpg",
    linkedin: "#",
    gmail: "mailto:saniruddh123@gmail.com",
  },
];

export default CoreTeam;
