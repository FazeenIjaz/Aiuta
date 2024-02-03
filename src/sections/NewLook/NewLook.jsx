import React from "react";
import lady from "../../assets/lady.0.png";
import ladyDress from "../../assets/ladyDress.0.png";
import { InView } from "react-intersection-observer";
import { cardsData } from "../../data";
const NewLook = () => {
  return (
    <section className="flex mt-[100px] relative ml-[150px] before:bg-spline-newLook-before before:absolute before:top-[43px] before:-left-[225px] before:w-[100rem] before:h-[70rem] before:bg-no-repeat after:bg-spline-newLook-after after:absolute after:top-[52px] after:-left-[203px] after:w-[100rem] after:h-[28rem] after:bg-no-repeat after:z-[1000] overflow-visible">
      {/* heading */}
      <div className="w-[19.6875rem] mt-[13rem]">
        <h2 className="text-[1.875rem] font-[500] leading-[2rem]">
          Aluta makes you look and feel better
        </h2>
        <p className="text-[#555] mt-[1rem] text-[1rem]">
          It is here to reveal your inviduality and celebrate the uniqueness of
          your personality. Make the most out of your looks
        </p>
      </div>
      {/* image */}
      <div className="relative ml-[30px]">
        <img src={lady} alt="" className="max-w-[335px]" />
        <InView>
          {({ inView, ref }) => (
            <img
              ref={ref}
              src={ladyDress}
              alt="lady-dress"
              className={`lady-dress-img absolute top-0 left-0 ${
                inView ? "visible" : ""
              }`}
            />
          )}
        </InView>
      </div>
      {/* cards */}
      <div className="flex flex-col gap-10 mt-[10px] z-[10000] ml-[50px]">
        {cardsData.map((data) => (
          <div className="flex items-center" key={data.id}>
            <img
              src={data.icon}
              alt=""
              className="w-[50px] h-[50px] object-contain"
            />
            <div className="p-[14px] rounded-[18px] bg-card-bg shadow-sm w-[390px]  whitespace h-max text-[16px]">
              <h2 className="font-bold">{data.title}</h2>
              <p className="">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewLook;
