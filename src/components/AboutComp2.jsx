import React from "react";
import img from "../public/Images/aboutimg2.webp";
import Description from "./Description";
import logo01 from "../public/Images/logo01.avif";
import logo02 from "../public/Images/logo02.avif";
import logo03 from "../public/Images/logo03.avif";
import logo04 from "../public/Images/logo04.avif";
import logo05 from "../public/Images/logo05.avif";

const AboutComp2 = () => {
  const desdata = {
    heading: "NEWS",
    title: "Autono In The Press",
  };

  return (
    <>
      {/* Background Image Section - Unchanged */}
      <div
        className="h-[80vh] bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Optional: you can add content over the background image if needed */}
      </div>

      {/* Black Section */}
      <div className="bg-black flex flex-col px-4 sm:px-8 md:px-16 lg:px-[10rem] py-8 sm:py-12">
        {/* Heading Section */}
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="text-white w-full max-w-md sm:max-w-lg">
            <Description {...desdata} />
          </div>
        </div>

        {/* Logos Section */}
        <div className="flex-1 w-full flex flex-wrap items-center justify-center lg:justify-between gap-10 lg:gap-4 mt-6 lg:mt-0">
          <img src={logo01} alt="Logo 1" className="h-12 w-32 lg:h-15 lg:w-40" />
          <img src={logo02} alt="Logo 2" className="h-12 w-32 lg:h-15 lg:w-40" />
          <img src={logo03} alt="Logo 3" className="h-12 w-32 lg:h-15 lg:w-40" />
          <img src={logo04} alt="Logo 4" className="h-12 w-32 lg:h-15 lg:w-40" />
          <img src={logo05} alt="Logo 5" className="h-12 w-32 lg:h-15 lg:w-40" />
        </div>
      </div>
    </>
  );
};

export default AboutComp2;