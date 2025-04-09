import React from 'react'
import Description from './Description'
import logo1 from '../public/Images/logo1.webp'
import logo2 from '../public/Images/logo2.webp'
import logo3 from '../public/Images/logo3.webp'
import logo4 from '../public/Images/logo4.webp'

const SixthPage = () => {
    const data = {
        heading: "INDUSTRY",
        title: "Our",
        subtitle: "Partners",
        paragraph: [
          "Click here to add your own content",
          "and customize the text. This is a great",
          "place to tell a story about your",
          "company and let your users know a",
          "little more about the company's",
          "history, the team's background, or any",
          "other information you'd like to share.",
          'just click "Edit Text" to get started.'
        ]
      };

      const logo = [
        {
            id:1,
            logo:logo1,
            text:'GENERAL TRANSPORT',
        },
        {
            id:2,
            logo:logo2,
            text:'IDI SOFTWARE',
        },
        {
            id:3,
            logo:logo3,
            text:'IMOGEN CARS',
        },
        {
            id:4,
            logo:logo4,
            text:'TRI-NEX',
        },
      ]
  return (
    <div className='lg:h-[80vh] h-fit bg-black flex lg:flex-row flex-col font-landingPageHeading items-center lg:gap-0 gap-[15rem] py-[5rem] lg:py-0'>
        <div className="flex items-center justify-center lg:h-full lg:w-full w-full text-white">
            <Description {...data}/>
        </div>
        <div className="flex lg:h-full lg:w-full w-full h-1/2 border">
            <div className='grid grid-cols-2 h-full w-full'>
                {
                    logo.map((item,index) => {
                        return(
                            <div className='h-full w-full flex items-center justify-center flex-col'>
                                <img src={item.logo} alt="logo" className='object-cover h-30 w-30' />
                                <p className='text-white text-sm font-light tracking-widest py-6'>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SixthPage
