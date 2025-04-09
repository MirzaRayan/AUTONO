// components/LandingPage.jsx
import React from 'react';
import landingPageImg from '../public/Images/landingPage.webp';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <>
      <div className='landingPage h-screen w-full font-landingPageHeading relative'>
        
        <Navbar />

        {/* Landing Page Text */}
        <div className='landingPageText absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center uppercase md:text-7xl md:leading-[6.5rem] font-normal tracking-wide w-full text-5xl leading-[3.5rem]'>
          <h1>the future of</h1>
          <h1>mobility is here</h1>
          <h4 className='md:text-xl tracking-[0.2rem] capitalize pt-5 text-[2.5vw] leading-4'>
            Discover the safest self-driving experience with Autono.
          </h4>
        </div>

        {/* Background Image */}
        <img src={landingPageImg} alt="" className='h-full w-full object-center object-cover' />

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </>
  );
};

export default LandingPage;
