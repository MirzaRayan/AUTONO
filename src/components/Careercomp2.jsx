import React from 'react';
import Description from './Description';
import img2 from '../public/Images/careerimg2.webp';

const Careercomp2 = () => {
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
    <div className='bg-black text-white'>
      <div className='section1 flex flex-col lg:flex-row items-center justify-center h-auto'>
        {/* Description Section */}
        <div className="div4 flex items-center justify-center w-full lg:w-1/2 p-4 sm:p-8">
          <Description {...descriptionProps} />
        </div>

        {/* Image Section */}
        <div className="div4 flex items-center justify-center w-full lg:w-1/2 p-4 sm:p-8">
          <div className="img w-full h-full lg:w-[80%] overflow-hidden relative">
            <img 
              src={img2} 
              alt="Career Vision" 
              className="h-full w-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careercomp2;
