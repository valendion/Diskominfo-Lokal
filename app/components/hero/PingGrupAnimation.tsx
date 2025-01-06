import { useParallax } from "react-scroll-parallax";
import "~/style/ping-animation-group.css";

const PingGrupAnimation = () => {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [-45, 45],
  });
  return (
    <div ref={parallax.ref} className="spinner w-full -z-20">
      <div className=" dots-container">
        <div className="titik"></div>
        <div className="titik"></div>
        <div className="titik"></div>
      </div>
    </div>
  );
};

export default PingGrupAnimation;
