import "../index.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TeamList = ({ setHover }) => {
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const teams = [
    { name: "Technical", color: "bg-[#FAFFAF]", link: "/technical" },
    { name: "Marketing", color: "bg-[#ff88fb]", link: "/marketing" },
    { name: "Operation", color: "bg-[#F6E6CB]", link: "/operation" },
    { name: "Working", color: "bg-[#FF6969]", link: "/working" },
    { name: "Designing", color: "bg-[#3ed4eb]", link: "/designing" },
    { name: "Editorial", color: "bg-[#AF8F6F]", link: "/editorial" },
    {
      name: "Content Creation",
      color: "bg-[#d1b3ff]",
      link: "/content-creation",
    },
    { name: "Treasurer", color: "bg-[#8DECB4]", link: "/treasurer" },
  ];

  return (
    <div className="w-full h-auto p-8 mt-10  sm:p-10 lg:p-20  flex flex-col ">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-pixel">
        Teams<sup>??</sup>{" "}
      </h1>
      <div className="w-full z-[0] h-max flex flex-col justify-center font-nerd text-mdsm:p-10 rounded-lg">
        {teams.map((team, index) => (
          <div
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`team-item ${team.color} p-2 sm:p-4 rounded-lg my-2`}
          >
            <Link
              to={team.link}
              className="block text-center text-black hover:underline"
            >
              {team.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

TeamList.propTypes = {
  setHover: PropTypes.func.isRequired,
};

export default TeamList;
