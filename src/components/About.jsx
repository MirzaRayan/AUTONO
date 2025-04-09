import React from "react";
import Description from "./Description";
import img from "../public/Images/aboutimg.webp";

const About = () => {
  const descriptionProps1 = {
    heading: "OUR MISSION",
    title: "Redefining the Way",
    subtitle: "We Move",
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
    <div className="About font-landingPageHeading ">
      {/* First Section */}
      <div className="section1 text-center h-[60vh] flex items-center justify-center flex-col gap-10 border-b border-gray-800">
        <h1 className="text-5xl lg:text-7xl tracking-wider">OUR JOURNEY</h1>
        <div className="para text-[2.5vw] lg:text-[22px] tracking-[0.15rem] font-light lg:leading-[2.3rem] leading-[2rem]">
          <p>I'm a paragraph. Click here to add your own text and</p>
          <p>edit me. It’s easy. Just click “Edit Text” or double click</p>
          <p>me to add your own content and make changes to the</p>
          <p>font. I’m a great place for you to tell a story and let</p>
          <p>your users know a little more about you.</p>
        </div>
      </div>

      {/* Second Section */}
      <div className="section2 flex flex-col-reverse md:flex-row h-fit gap-[5rem]">
        {/* Description */}
        <div className="div1 w-full md:w-1/2 flex items-center justify-center p-4">
          <Description {...descriptionProps1} />
        </div>

        {/* Image */}
        <div className="div2 w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="img h-[75%] w-[45%] overflow-hidden">
            <img
              src={img}
              alt="About Image"
              className="h-fit w-fit object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
