import React from "react";
import secondPageImg from "../public/Images/2ndPageCar.webp";
import Description from "./Description";

const SecondPage = () => {
  const descriptionProps = {
    heading: "VISION",
    title: "We’re Changing the",
    subtitle: "Way the World Thinks",
    subtitle2: "About Cars",
    paragraph: [
      "I'm a paragraph. Click here to add your",
      "own text and edit me. It’s easy. Just",
      "click 'Edit Text' or double click me to",
      "add your own content and make",
      "changes to the font. I’m a great place",
      "for you to tell a story and let your users",
      "know a little more about you."
    ]
  };

  return (
    <div className="lg:h-screen h-fit bg-black text-white flex items-center justify-center lg:flex-row flex-col lg:gap-0 gap-10 py-[6rem] lg:py-0">
      <div className="1stSection lg:h-full h-1/2 lg:w-1/2 w-full flex items-center m justify-center">
        {/* Pass props to Description component */}
        <Description {...descriptionProps} />
      </div>
      <div className="2ndSection lg:h-full h-1/2 lg:w-1/2 w-full flex items-center justify-center">
        <img src={secondPageImg} alt="Car Image" />
      </div>
    </div>
  );
};

export default SecondPage;
