import { useRef } from "react";
import { gsap } from "gsap";

import "~/style/ping-animation-group.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const PingGrupAnimation = () => {
  const spinnerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (spinnerRef.current) {
      // Konfigurasi ScrollTrigger
      gsap.to(spinnerRef.current, {
        rotation: 45, // Rotasi maksimum 45 derajat

        duration: 2,
        scrollTrigger: {
          trigger: spinnerRef.current,
          toggleActions: "restart pause reverse pause",

          // markers: true,
          start: "top 10%", // Memulai animasi saat elemen mencapai tengah viewport

          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });
    }
  }, []);

  return (
    <div ref={spinnerRef} className="spinner w-full -z-20">
      <div className="dots-container">
        <div className="titik"></div>
        <div className="titik"></div>
        <div className="titik"></div>
      </div>
    </div>
  );
};

export default PingGrupAnimation;
