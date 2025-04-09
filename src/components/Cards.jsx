import React from "react";
import cardsCar1 from "../public/Images/cardsCar1.webp";
import cardsCar2 from "../public/Images/cardscar2.webp";
import cardsCar3 from "../public/Images/cardsCar3.webp";

const Cards = () => {
  const data = [
    {
      id: 1,
      title: "AUTONOMOUS",
      subtitle: "DRIVING",
      paragraph: [
        "I'm a paragraph. Click here to add your",
        "own text and edit me. It’s easy. Just click",
        '"Edit Text” or double click me to add',
        "your own content and make changes to",
        "the font. I’m a great place for you to tell",
        "a story and let your users know a little",
        "more about you.",
      ],
      img: cardsCar1,
    },
    {
      id: 2,
      title: "REAL-TIME",
      subtitle: "INFORMATION",
      paragraph: [
        "I'm a paragraph. Click here to add your",
        "own text and edit me. It’s easy. Just click",
        '"Edit Text” or double click me to add',
        "your own content and make changes to",
        "the font. I’m a great place for you to tell",
        "a story and let your users know a little",
        "more about you.",
      ],
      img: cardsCar2,
    },
    {
      id: 3,
      title: "PERCEPTION",
      subtitle: "ENABLED",
      paragraph: [
        "I'm a paragraph. Click here to add your",
        "own text and edit me. It’s easy. Just click",
        '"Edit Text” or double click me to add',
        "your own content and make changes to",
        "the font. I’m a great place for you to tell",
        "a story and let your users know a little",
        "more about you.",
      ],
      img: cardsCar3,
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={`card w-full flex lg:flex-row flex-col lg:gap-0 gap-10 items-center justify-center font-landingPageHeading ${index===1 && 'lg:flex-row-reverse flex-col'}`}>
          <div className="text lg:w-1/2 w-full flex items-center justify-center">
            <div className="w-fit">
              <div className="heading text-5xl font-light leading-[4rem] tracking-wide">
                <h1>{item.title}</h1>
                <h1>{item.subtitle}</h1>
              </div>
              <div className="paragraph text-[15px] tracking-widest leading-[2rem] pt-7">
                {item.paragraph.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <button className="border cursor-pointer px-4 py-2 rounded-lg tracking-wider mt-6 hover:bg-black hover:text-white transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
          <div className="img lg:w-1/2 w-full flex items-center justify-center">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
