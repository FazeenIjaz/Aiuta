import React from "react";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import card1img from "../../assets/step3-1.png";
import card2img from "../../assets/step3-2.png";
import card3img from "../../assets/step3-3.png";
import step4 from "../../assets/step4.png";

const Working = () => {
  return (
    <section className="mt-[100px] ml-[200px] text-[14px] relative flex before:content-[''] before:w-[47rem] before:h-[30rem] before:bg-working-spline-before before:bg-no-repeat before:absolute before:top-[140px] before:left-[280px]">
      {/* header */}
      <div className=" flex flex-col gap-[3rem] font-monteserrat">
        <div className="w-[21rem]">
          <h2 className="text-[2rem] font-[500] font-monteserrat">
            How it works?
          </h2>
          <p className="text-[16px] mt-[1rem] text-[#555] font-[400]">
            While creating your looks, Aiuta takes into account your lifestyle,
            shape, behaviour and habits
          </p>
        </div>
        <div className="">
          {/* 1st step */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-start justify-start flex-col gap-[10px] mb-[10px]  -mt-[30px]">
              <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#4000ff] text-white text-[12px] ">
                1
              </span>
              <p className="text-[#4000ff] w-[200px]">
                Aiuta provides recommendations based on the clothes you have and
                your preferences
              </p>
            </div>
            <div className="ml-[60px]">
              <img src={step1} alt="" className="max-w-[250px]" />
            </div>
          </div>
        </div>
      </div>
      {/* working steps */}
      <div className="flex flex-col">
        {/* 2 step */}
        <div className="">
          <div className="flex items-start justify-start flex-col gap-[10px] mb-[10px] ml-[330px] mt-[0px] ">
            <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#4000ff] text-white text-[12px] ">
              2
            </span>
            <p className="text-[#4000ff]  w-[250px]">
              You receive a powerful wardrobe assistant which allows you to
              organise clothes and validate the quality of looks 24/7
            </p>
          </div>
          <div className="-mt-[140px] ml-[160px]">
            <img src={step2} alt="" className="max-w-[130px]" />
          </div>
        </div>
        <div className="flex flex-row-reverse">
          {/* step 3 */}
          <div className="flex flex-row -ml-[110px] -mt-[20px]">
            <div className="flex items-start justify-start flex-col gap-[10px] mb-[10px]  -mt-[30px]">
              <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#4000ff] text-white text-[12px] ">
                3
              </span>
              <p className="text-[#4000ff] w-[180px]">
                The more info you share with us, the more relevant and
                beneficial offers we can get for you
              </p>
            </div>
            <div className="flex flex-col -mt-[100px]">
              <div className="flex">
                <div className="w-[140px] h-[140px] bg-hexagon bg-center bg-contain bg-no-repeat z-0 ">
                  <img
                    src={card1img}
                    alt=""
                    className="w-[70px] h-[70px] mt-[34px] ml-[33px] object-contain"
                  />
                </div>
                <div className="z-[100] w-[140px] h-[140px] bg-hexagon bg-center bg-contain bg-no-repeat -ml-[54px] mt-[50px]">
                  <img
                    src={card2img}
                    alt=""
                    className="w-[70px] h-[70px] mt-[34px] ml-[33px] object-contain"
                  />
                </div>
              </div>
              <div className="w-[140px] h-[140px] bg-hexagon bg-center bg-contain bg-no-repeat z-0 -mt-[230px] ml-[80px]">
                <img
                  src={card3img}
                  alt=""
                  className="w-[70px] h-[70px] mt-[34px] ml-[33px] object-contain"
                />
              </div>
            </div>
          </div>
          {/* step 4 */}
          <div className="flex mt-[80px] ml-[30px]">
            <div className="flex items-start justify-start flex-col gap-[10px] mb-[10px]  -mt-[30px]">
              <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#4000ff] text-white text-[12px] ">
                4
              </span>
              <p className="text-[#4000ff] w-[190px]">
                We use the information provided to get the best possible result
              </p>
            </div>
            <div className="mt-[10px] -ml-[10px] ">
              <img src={step4} alt="" className="max-w-[330px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
