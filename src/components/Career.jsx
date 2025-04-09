import React from "react";
import Description from "./Description";
import img from "../public/Images/careerimg.webp";

const Career = () => {
  const descriptionProps = {
    heading: "LOCATION",
    title: "We’re based in San",
    subtitle: "Francisco’s innovation hub",
    paragraph: [
      "I'm a paragraph. Click here to add your",
      "own text and edit me. It’s easy. Just",
      "click 'Edit Text' or double click me to",
      "add your own content and make",
      "changes to the font. I’m a great place",
      "for you to tell a story and let your users",
      "know a little more about you.",
    ],
  };

  return (
    <div className="career">
      {/* First Section: Career Heading */}
      <div className="section1 text-center h-[60vh] flex items-center justify-center flex-col gap-10 border-b border-gray-800">
        <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-widest font-light">WE MAKE</h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-widest font-light">
          BIG IDEAS HAPPEN
        </h1>
        <p className="para text-base sm:text-lg md:text-[22px] tracking-[0.15rem] font-light leading-[2rem] sm:leading-[2.3rem]">
          Join Us for the Ride
        </p>
      </div>

      {/* Second Section: Description and Image */}
      <div className="section2 flex flex-col md:flex-row h-auto md:h-[90vh]">
        {/* Description */}
        <div className="din1 w-full md:w-1/2 flex items-center justify-center px-4 sm:px-8">
          <Description {...descriptionProps} />
        </div>

        {/* Image */}
        <div className="din2 w-full md:w-1/2 flex items-center justify-center p-4 sm:p-8">
          <div className="img w-full h-full md:w-[80%] overflow-hidden relative">
            <img
              src={img}
              alt="Career Location"
              className="h-full w-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
