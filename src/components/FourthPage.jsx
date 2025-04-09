// ParallaxSection.jsx
import React from "react";
import Description from "./Description";

const ParallaxSection = () => {
  const desData = {
    title: "A different approach,",
    subtitle: "using a new method of",
    subtitle2: "manufacturing.",

    paragraph: [
      "I'm a paragraph. Click here to add your",
      "own text and edit me. It’s easy. Just",
      "click 'Edit Text' or double click me to",
      "add your own content and make",
      "changes to the font. I’m a great place",
      "for you to tell a story and let your users",
      "know a little more about you.",
    ],
    heading: "WELCOME TO OUR TRAVEL AGENCY",
  };
  return (
    <div
      className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://static.wixstatic.com/media/c837a6_870aaf57c1d9484a9a6ee57f2465df75~mv2.jpg/v1/fill/w_2070,h_1760,al_r,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_870aaf57c1d9484a9a6ee57f2465df75~mv2.jpg')`,
      }}
    >
      <div className="1stsection h-full w-1/2 flex items-center justify-center">
        <div className="bg-black text-white lg:px-8 lg:py-25 py-[15vw] px-[6vw] rounded-4xl">
          <Description {...desData} />
        </div>
      </div>
      <div className="2ndsection lg:h-full lg:w-1/2 h-0 w-0 "></div>
    </div>
  );
};

export default ParallaxSection;
