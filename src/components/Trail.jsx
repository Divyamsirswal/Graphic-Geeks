import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Trail = ({ images, duration, active, containerRef }) => {
  const trailContainerRef = useRef(null);

  useEffect(() => {
    const trailContainer = trailContainerRef.current;
    let timeoutIds = [];

    const isMouseInsideElement = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      return isInside;
    };

    const handleMouseMove = (e) => {
      if (!active || !isMouseInsideElement(e)) return;

      const img = document.createElement("img");
      img.src = images[Math.floor(Math.random() * images.length)];
      img.style.position = "absolute";
      img.style.width = "200px";
      img.style.height = "300px";
      img.style.pointerEvents = "none";
      img.style.transition = `opacity ${duration}ms ease`;
      img.style.tranform = `translate(-50%, -50%)`;

      trailContainer.appendChild(img);

      const rect = containerRef.current.getBoundingClientRect();
      img.style.top = `${e.clientY - rect.top}px`;
      img.style.left = `${e.clientX - rect.left}px`;

      setTimeout(() => {
        img.style.opacity = "0";
      }, 0);

      timeoutIds.push(
        setTimeout(() => {
          trailContainer.removeChild(img);
        }, duration)
      );

      if (timeoutIds.length > 5) {
        clearTimeout(timeoutIds.shift());
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      timeoutIds.forEach(clearTimeout);
    };
  }, [images, duration, active, containerRef]);

  return <div ref={trailContainerRef} className="mouse-trail-container"></div>;
};

Trail.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  containerRef: PropTypes.object.isRequired,
};

export default Trail;
