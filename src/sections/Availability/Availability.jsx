import React from "react";
import homeImg from "../../assets/homeImage.png";
import homeIcon from "../../assets/homeIcon.png";
import onlineImg from "../../assets/onlineImage.png";
import shopImg from "../../assets/shopImage.png";
import shopIcon from "../../assets/shopIcon.png";
import onlineIcon from "../../assets/onlineIcon.png";
const Availability = () => {
  return (
    <section className="flex mt-[100px] ml-[100px] relative">
      {/* header */}
      <div className="min-w-[20rem] max-w-[20rem] mt-[13rem]">
        <h2 className="text-[1.875rem] font-[500] leading-[2rem]">
          Aiuta is following you everywhere, like a celebrity stylist
        </h2>
        <p className="text-[#555] mt-[1rem] text-[1rem]">
          No more nothing-to-wear moments. And your closet is to the fullest
          utilised
        </p>
      </div>
      {/* main desc */}
      <div className="-ml-[170px] flex flex-col gap-[10px]">
        <div className="flex flex-row items-center justify-center gap-0">
          {/* 1st card */}
          <div className="flex flex-row-reverse">
            {/* img div */}
            <div className="min-w-[360px] h-[360px] bg-hexagon bg-[left_-57px_top_13px] bg-contain bg-no-repeat before:content-[''] before:w-[30rem] before:h-[3rem] before:absolute before:bg-spline-homeImg-before before:bg-no-repeat before:top-[20px] before:left-[17%] flex items-start justify-start">
              <img
                src={homeImg}
                alt=""
                className="max-w-[170px] h-[170px] mt-[34px] ml-[45px] object-contain align-middle"
              />
            </div>
            {/* text div */}
            <div className="">
              <div className="">
                <img src={homeIcon} alt="" className="w-[60px]" />
              </div>
              <div className="">
                <h2 className="text-[22px] font-semibold">At Home</h2>
                <p className="text-[#555] max-w-[200px] min-w-[200px]">
                  It helps you choose the best combination from your wardrobe.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className="flex flex-row -ml-[100px]">
            {/* img div */}
            <div className="min-w-[360px] h-[360px] bg-hexagon bg-[left_-57px_top_13px] bg-contain bg-no-repeat z-0 after:content-[''] after:w-[30rem] after:h-[10rem] after:absolute after:bg-spline-shopImg-after after:bg-no-repeat after:top-[40px] after:left-[68.2%] flex items-start justify-start">
              <img
                src={shopImg}
                alt=""
                className="max-w-[170px] h-[170px] mt-[34px] ml-[45px] object-contain align-middle"
              />
            </div>
            {/* text div */}
            <div className="mt-[30px]">
              <div className="">
                <img src={shopIcon} alt="" className="w-[50px]" />
              </div>
              <div className="">
                <h2 className="text-[22px] font-semibold">In the shop</h2>
                <p className="text-[#555] max-w-[240px] min-w-[240px]">
                  It gives you advice in the fitting room when you need it
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className="flex flex-row ml-[340px] -mt-[140px]">
          {/* img div */}
          <div className="min-w-[360px] h-[360px] bg-hexagon bg-[left_-57px_top_13px] bg-contain bg-no-repeat z-0 after:content-[''] after:w-[16rem] after:h-[3rem] after:absolute after:bg-spline-onLineImg-after after:bg-no-repeat after:top-[330px] after:left-[58.3%] flex items-start justify-start">
            <img
              src={onlineImg}
              alt=""
              className="max-w-[170px] h-[170px] mt-[34px] ml-[45px] object-contain align-middle"
            />
          </div>
          {/* text div */}
          <div className="mt-[75px] -ml-[20px]">
            <div className="">
              <img src={onlineIcon} alt="" className="w-[50px]" />
            </div>
            <div className="">
              <h2 className="text-[22px] font-semibold">Online</h2>
              <p className="text-[#555] max-w-[240px] min-w-[240px]">
                It helps you shop <br /> the best match{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availability;
