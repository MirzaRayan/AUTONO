import React from 'react';
import Description from './Description';
import Cards from './Cards';

const ThirdPage = () => {
  const descriptionProps = {
    heading: "SERVICES",
    title: "We Deliver Exceptional",
    subtitle: "Products and Services",
    subtitle2: "Around the World",
  };

  return (
    <div className="h-fit relative overflow-hidden">
        <div className='flex h-[40vh]'>
            <div className='1stSection lg:w-1/2 w-full h-full flex items-center justify-center text-center'>
                <Description {...descriptionProps}/>
            </div>
            <div className='2ndSection lg:w-1/2 lg:h-full w-0'>
            </div>
        </div>
        <Cards/>
    </div>
  );
};

export default ThirdPage;
