import React, { useState } from "react";
import topClothesImg from "../../assets/wardrobe.png";
import lady from "../../assets/lady.png";
import scoreImg from "../../assets/score.png";
import ladyDress from "../../assets/ladyDress.png";
import { InView } from "react-intersection-observer";
const Features = () => {
  return (
    <section className="flex relative flex-row flex-nowrap items-start ml-[50px] after:content-['+'] after:absolute after:w-[4rem] after:h-[4rem] after:text-[#4000ff] after:text-[3rem] after:top-[270px] after:left-[60%] before:content-['+'] before:absolute before:w-[4rem] before:h-[4rem] before:text-[#4000ff] before:text-[3rem] before:top-[270px] before:left-[30%] gap-[50px]">
      <div className="">
        <h2 className="w-[17rem] mt-[8rem] font-[600] text-[23px]">
          Imagine that someone combines in one product...
        </h2>
        <div className="flex items-start justify-start flex-col gap-[10px] mt-[20px] ml-[65px] mb-[10px]">
          <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-black text-white text-[12px] ">
            1
          </span>
          <p className="leading-5 text-[16px]">
            Your digitised <br /> wardrobe.
          </p>
        </div>
        <img
          src={topClothesImg}
          className="w-[17rem] ml-[40px]"
          alt="topClothesImg"
        />
      </div>
      <div className="relative">
        <img src={lady} alt="" className="mt-[120px] max-w-[200px]" />
        <InView>
          {({ inView, ref }) => (
            <img
              ref={ref}
              src={ladyDress}
              alt="lady-dress"
              className={`mt-[120px] absolute top-0 left-0 opacity-0 lady-dress-img ${
                inView ? "visible" : ""
              }`}
            />
          )}
        </InView>
      </div>
      <div className="">
        <div className="flex items-start justify-start flex-col gap-[10px]  ml-[65px] mb-[10px] mt-[90px]">
          <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-black text-white text-[12px] ">
            2
          </span>
          <p className="">
            Eye for fashion <br />& style expertise
          </p>
        </div>
        <img
          src={scoreImg}
          alt=""
          className="w-[218px] h-[227px] mt-[5px] ml-[140px]"
        />
        <div className="flex items-start justify-start flex-col gap-[10px] mb-[10px] ml-[170px] -mt-[30px]">
          <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-black text-white text-[12px] ">
            3
          </span>
          <p className="">
            Machine learning <br /> & generative AI skills
          </p>
        </div>
        <h2 className="w-[17rem] mb-[40px] ml-[120px] text-[23px] font-[600] leading-snug">
          And all these - <br /> serve to save your <br />
          time and money
        </h2>
      </div>
    </section>
  );
};

export default Features;
