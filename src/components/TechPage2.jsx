import React from "react";
import img from "../public/Images/techimg.webp";
import Description from "./Description";

const TechPage2 = () => {
  const data = {
    heading: "THE AUTONO CAR",
    title: "PERCEPTION ENABLED",
    subtitle: "TECHNOLOGY",
    paragraph: [
      "Using groundbreaking",
      "perception-enabled sensor",
      "technology, the Autono car",
      "is a fully driverless vehicle",
      "engineered to the highest",
      "degree of precision and",
      "safety. It's autonomous",
      "driving reimagined.",
    ],
  };

  const section1 = {
    heading: "THE AUTONO CAR",
    title: "HUMAN-CENTERED DESIGN",
    paragraph: [
      "I'm a paragraph. Click here to add your",
      "own text and edit me. It's easy. Just",
      "click 'Edit Text' or double click me to",
      "add your own content and make",
      "changes to the font. I'm a great place",
      "for you to tell a story and let your users",
      "know a little more about you.",
    ],
  };

  const section2 = {
    heading: "THE AUTONO CAR",
    title: "LOW EMISSIONS & EFFICIENCY",
    paragraph: [
      "I'm a paragraph. Click here to add your",
      "own text and edit me. It's easy. Just",
      "click 'Edit Text' or double click me to",
      "add your own content and make",
      "changes to the font. I'm a great place",
      "for you to tell a story and let your users",
      "know a little more about you.",
    ],
  };

  return (
    <>
      {/* First section - image and description */}
      <div className="bg-black text-white flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex p-6 md:p-10 lg:p-16 order-2 md:order-1">
          <Description {...data} />
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center">
          <img 
            src={img} 
            alt="Autono Car" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Second section - two descriptions */}
      <div className="bg-black text-white py-10 md:py-16 lg:py-24">
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-8 justify-center items-center w-full">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center items-center">
              <Description {...section1} />
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <Description {...section2} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default TechPage2;
