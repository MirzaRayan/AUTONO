import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Description = ({ title, subtitle, subtitle2 = "", paragraph = [], heading }) => {
  const borderRef = useRef(null);

  useGSAP(() => {
    gsap.from(borderRef.current, {
      y: 100,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: borderRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <div className="description w-full font-landingPageHeading py-6 sm:py-8 md:py-12">
      <div className="w-full max-w-6xl flex justify-center items-center mx-auto border-l px-4 sm:px-6 md:px-8 lg:px-10"> {/* Ensure div is centered */}
        <div className="w-full flex justify-center">
          <div className="flex-1 text-center"> {/* Center text within its own container */}
            <h2 className="text-xs sm:text-sm tracking-widest font-light mb-4">{heading}</h2>

            <div className="text-xl sm:text-xl md:text-2xl font-light tracking-widest leading-relaxed space-y-1">
              <h1>{title}</h1>
              <h1>{subtitle}</h1>
              {subtitle2 && <h1>{subtitle2}</h1>}
            </div>

            {paragraph.length > 0 && (
              <div
                ref={borderRef}
                className="mt-6 font-light tracking-widest text-sm md:text-base leading-6 space-y-2"
              >
                {paragraph.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
