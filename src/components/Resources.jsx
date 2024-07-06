import PropTypes from "prop-types";
import "../index.scss";

const Resources = ({ setHover }) => {
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  return (
    <span
      className="resources font-pixel  border-0 flex  items-end cursor-pointer burger-menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="bb border-2  hover:bg-black transition duration-300 hover:text-white border-black px-3  rounded-xl ">
        Resources
      </h1>
    </span>
  );
};
Resources.propTypes = {
  setHover: PropTypes.func.isRequired,
};
export default Resources;
