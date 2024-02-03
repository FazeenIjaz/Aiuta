import React, { useEffect, useState } from "react";
import { images } from "../../data";
import dress1 from "../../assets/outfit1preview.png";
import dress2 from "../../assets/outfit2preview.png";
import dress3 from "../../assets/outfit3preview.png";
import dress4 from "../../assets/outfit4preview.png";

const GenerativeTry = () => {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (image + 1) % images.length;
      setImage(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [image]);

  const lady = images[image];

  const handleStyleChange = (index) => {
    setImage(index);
  };

  return (
    <section className="flex gap-10 mt-[100px] ml-[80px] relative">
      {/*header and desc */}
      <div className="flex flex-col gap-10 font-monteserrat">
        {/* header */}
        <div className="w-[21rem] mt-[40px]">
          <h2 className="text-[2rem] font-[500] font-monteserrat">
            Aiuta helps you to find your style
          </h2>
          <p className="text-[16px] mt-[1rem] text-[#555] font-[400]">
            Aiuta’s <span className="text-[#4000ff]">Generative Try</span> On
            allows you to try on actual trends and finds the style that suits
            you the best
          </p>
        </div>
        {/* features list */}
        <div className="text-[#555] ml-[90px] mt-[50px] ">
          <ul className="list-disc list-outside flex flex-col gap-[10px] text-[17px] w-[20rem]">
            <li>Try on new styles virtually</li>
            <li>Share your new virtual looks with friends and get feedback</li>
            <li>Optimise your wardrobe to fit the chosen style</li>
            <li>Stick to your chosen style while shopping</li>
          </ul>
        </div>
      </div>
      {/* lady image */}
      <div className="flex">
        <img
          src={lady.img}
          alt=""
          className="max-w-[230px] h-[80vh] object-contain"
        />
      </div>
      <div className="">
        <h2 className="text-[#4000ff] w-[9.5rem] text-[1.2rem] leading-[1.375rem]">
          Choose the style that suits you the best
        </h2>
        {/* inputs radio */}
        <div className="flex flex-col gap-10 mt-[80px]">
          {images.map((item, index) => (
            <label key={index} className="inline-flex items-center relative">
              <input
                type="radio"
                className="hidden"
                onChange={() => handleStyleChange(index)}
                checked={index === image}
              />
              <span
                className={`w-[30px] h-[30px] border-2 p-[8px] cursor-pointer rounded-full inline-block mr-2 ${
                  index === image
                    ? "after:bg-[#4000ff] after:w-[16px] after:h-[16px] after:absolute  after:rounded-full after:top-[7px] after:left-[7px] border-2 border-[#4000ff]"
                    : "border-gray-500 hover:border-[#4000ff] "
                }`}
              ></span>
            </label>
          ))}
        </div>
      </div>
      {/* dress images */}
      <div className="  ">
        <div
          className={`relative ${
            image === 0
              ? " after:absolute after:top-[46px] after:-left-[160px] after:content-[''] after:bg-dress1-before after:w-[30rem] after:h-[10rem] after:bg-no-repeat"
              : ""
          } mt-[50px]`}
        >
          <img
            src={dress1}
            alt=""
            className="max-w-[130px] ml-[40px] -mt-[30px]"
          />
        </div>
        <div
          className={`relative ${
            image === 1
              ? "after:absolute after:top-[55px] after:-left-[160px] after:content-[''] after:bg-dress2-before after:w-[30rem] after:h-[10rem] after:z-[1]  after:bg-no-repeat "
              : ""
          } `}
        >
          <img
            src={dress2}
            alt=""
            className="max-w-[120px] ml-[45px] -mt-[15px]"
          />
        </div>
        <div
          className={`relative ${
            image === 2
              ? "after:absolute after:top-[40px] after:-left-[160px] after:content-[''] after:bg-dress3-before after:w-[30rem] after:h-[10rem] after:bg-no-repeat "
              : ""
          } `}
        >
          <img
            src={dress3}
            alt=""
            className="max-w-[140px] ml-[64px] -mt-[18px]"
          />
        </div>
        <div
          className={`relative ${
            image === 3
              ? "after:absolute after:-top-[3px] after:-left-[160px] after:content-[''] after:bg-dress4-before after:w-[30rem] after:h-[10rem] after:bg-no-repeat"
              : ""
          } `}
        >
          <img
            src={dress4}
            alt=""
            className="max-w-[140px] ml-[30px] -mt-[30px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GenerativeTry;
