import React from "react";
import lady from "../../assets/lady.1.png";
import { InView } from "react-intersection-observer";
import ladySkirt from "../../assets/ladySkirt.png";
import card1img from "../../assets/card1.png";
import card2img from "../../assets/card2.png";
import card3img from "../../assets/card3.png";
import shirtImg from "../../assets/shirt.png";
import cardJacket from "../../assets/card2jacket.png";
import cardJeans from "../../assets/card2jeans.png";
import shoesImg from "../../assets/card3shoes.png";
import card3Jacket from "../../assets/card3jacket.png";
const Prompts = () => {
  return (
    <section className="mt-[150px] ml-[130px] relative flex w-[2200px]">
      <h2 className="min-w-[21rem] mt-[30px] text-[24px] font-[600] before:content-[''] before:absolute before:w-[49rem] before:h-[16rem] before:bg-aiuta-text before:top-[110px] before:left-[10px] before:z-[100] before:bg-no-repeat">
        It’s time for Generative AI to come to fashion
      </h2>

      <div className="relative">
        <img src={lady} alt="" className="max-w-[250px]" />
        <InView>
          {({ inView, ref }) => (
            <img
              ref={ref}
              src={ladySkirt}
              alt="lady-dress"
              className={`lady-dress-img absolute top-0 left-0 ${
                inView ? "visible" : ""
              }`}
            />
          )}
        </InView>
      </div>
      <p className="p-[14px] rounded-[18px] bg-card-bg shadow-sm  w-[140px] mt-[50px] whitespace-nowrap h-max text-black">
        Aiuta - <br />
        it helps (ital.)
      </p>
      <div className="before:content-[''] before:bg-cards-bg before:w-[80rem] before:h-[20rem] before:absolute  before:bg-no-repeat before:bg-cover before:bg-center before:z-[10] before:ml-[4rem] before:top-0 before:left-[34%] flex">
        {/* 1st card list */}
        <div className="ml-[120px] mt-[80px z-[100]">
          <div className="flex items-center">
            <div className="w-[140px] h-[140px] bg-hexagon bg-center bg-contain bg-no-repeat z-0 ">
              <img
                src={card1img}
                alt=""
                className="w-[70px] h-[70px] mt-[34px] ml-[33px] object-contain"
              />
            </div>
            <div className="rounded-[18px] bg-card-bg shadow-sm w-[230px] p-[20px] text-[17px]  leading-snug">
              <p>
                Aiuta, I have a whole wardrobe of things, but there is nothing
                to wear...
              </p>
            </div>
          </div>
          {/* lower */}
          <div className="flex items-center ml-[40px]">
            <div className="mt-[30px]">
              <img src={shirtImg} alt="" className="w-[15rem] h-[8rem]" />
            </div>
            <div className=" rounded-[18px] bg-card-bg shadow-sm min-w-[230px] p-[14px] leading-snug -mt-[100px] text-[17px] -ml-[40px]">
              <p>It seems, that I don’t like anything. What should I do?</p>
            </div>
          </div>
        </div>
        {/* 2nd card list */}

        <div className="z-[100]">
          {/* top image */}
          <div className="">
            <img
              src={cardJacket}
              alt=""
              className="w-[12rem] h-[12rem] ml-[140px]"
            />
          </div>
          {/* cards */}
          <div className="flex items-center">
            <div className="w-[140px] h-[140px] bg-hexagon bg-center bg-contain bg-no-repeat z-10 mt-[10px] ml-[84px]">
              <img
                src={card2img}
                alt=""
                className="w-[70px] h-[70px] mt-[34px] ml-[33px] object-contain"
              />
            </div>
            <div className="p-[14px] rounded-[18px] bg-card-bg shadow-sm  w-[260px] leading-snug text-[18px] -mt-[90px] mr-[10px] -ml-[20px]">
              <p>
                Aiuta, I like this jacket. Will it fit my wardrobe? If yes, show
                me some similar items please.
              </p>
            </div>
          </div>
          {/* last image */}
          <div className="">
            <img
              src={cardJeans}
              alt=""
              className="w-[14rem] h-[14rem] object-contain -mt-[70px]"
            />
          </div>
        </div>
        {/* 3rd card list */}

        <div className="z-[100] ml-[90px]">
          {/* shoes img */}
          <div className="">
            <img
              src={shoesImg}
              alt=""
              className="w-[7rem] h-[5rem] ml-[190px]"
            />
          </div>
          <div className="flex items-center">
            <div className="w-[140px] h-[140px] bg-hexagon bg-center bg-contain bg-no-repeat z-10 -ml-[20px] -mt-[20px]">
              <img
                src={card3img}
                alt=""
                className="w-[70px] h-[70px] mt-[34px] ml-[33px] object-contain"
              />
            </div>
            <div className="py-[18px] px-[10px] pr-[5px] rounded-[18px] bg-card-bg shadow-sm  w-[230px] leading-snug text-[18px] -mt-[40px]">
              <p>Aiuta, I’m tired of spending my time shopping online.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="">
              <img
                src={card3Jacket}
                alt=""
                className="ml-[40px] w-[19rem] h-[10rem]"
              />
            </div>
            <div className="p-[14px] rounded-[18px] bg-card-bg shadow-sm min-w-[230px] text-[18px] -mt-[110px]">
              <p>
                I just need a pair of solid boots under $150 that fit the most
                of my clothes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prompts;
