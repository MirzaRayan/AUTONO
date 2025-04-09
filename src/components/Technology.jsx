import React from "react";
import techimg from "../public/Images/technologyimg.webp";
import carimg from "../public/Images/carimg.avif";

const Technology = () => {
  return (
    <div className="flex items-center justify-center flex-col relative font-landingPageHeading -z-10">
      {/* For larger screens - original layout */}
      <div className="hidden md:block relative">
        <div className="h-auto w-full object-cover object-center">
          <img src={techimg} alt="" className="h-full w-full" />
        </div>
        {/* Horizontally centered heading */}
        <div className="heading absolute top-[6rem] left-1/2 transform -translate-x-1/2 text-center text-[4rem] lg:text-[4rem] md:text-[3rem] tracking-widest">
          <h1>PERCEPTION ENABLED</h1>
          <h1>TECHNOLOGY</h1>
        </div>
        <div className="para text-center text-2xl lg:text-2xl md:text-xl pb-[6rem] md:pb-[4rem] font-light tracking-wider leading-[2.8rem] md:leading-[2.2rem]">
          <p>Click here to edit this paragraph and add your own</p>
          <p>content. This is a great place to expand on the title and</p>
          <p>any relevant details or information.</p>
        </div>
      </div>

      {/* For mobile screens - card-like layout */}
      <div className="md:hidden w-full">
        <div className="bg-white rounded-3xl shadow-lg max-w-[90%] mx-auto mt-10 overflow-hidden">
          <div className="p-6 pt-8">
            <div className="text-center my-8 tracking-wider">
              <h1 className="text-2xl font-medium mb-1">PERCEPTION</h1>
              <h1 className="text-2xl font-medium mb-1">ENABLED</h1>
              <h1 className="text-2xl font-medium mb-6">TECHNOLOGY</h1>
            </div>

            <div className="mx-auto w-3/4 mb-8">
              <img src={carimg} alt="Car technology" className="w-full" />
            </div>

            <div className="text-center px-4 pb-8 text-sm text-gray-600">
              <p className="mb-2">Click here to edit this paragraph</p>
              <p className="mb-2">and add your own content. This</p>
              <p className="mb-2">is a great place to expand on the</p>
              <p className="mb-2">title and any relevant details or</p>
              <p>information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
