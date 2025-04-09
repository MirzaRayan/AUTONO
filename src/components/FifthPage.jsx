import React from "react";
import img from "../public/Images/fifthSectionimg.webp";

const FifthPage = () => {
  const data = [
    {
      id: 1,
      h1: "200",
      h4: "EMPLOYEES",
    },
    {
      id: 2,
      h1: "5",
      h4: "CORE TEAMS",
    },
    {
      id: 3,
      h1: "200M$",
      h4: "CAPITAL",
    },
    {
      id: 4,
      h1: "326",
      h4: "PARTNERS",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center font-landingPageHeading bg-white text-black px-4 md:px-10 py-10 gap-10 lg:gap-0">
      
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img src={img} alt="Fifth Section" className="w-full h-full object-cover max-h-[500px] lg:max-h-none" />
      </div>

      {/* Right Stats Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8 tracking-wide">
          Autono In Numbers
        </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 w-full max-w-md md:max-w-lg">
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl tracking-widest mb-2 border-b py-2">
                {item.h1}
              </h3>
              <p className="text-xs sm:text-sm tracking-[0.15rem] font-light py-1">
                {item.h4}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
