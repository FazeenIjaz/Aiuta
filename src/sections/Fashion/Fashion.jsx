import React from "react";
import starIcon from "../../assets/star.png";
import speedIcon from "../../assets/speedoMaster.png";
import leafIcon from "../../assets/leaf.png";
import detailsImg from "../../assets/details.png";
import rateImg from "../../assets/rate.png";
const Fashion = () => {
  return (
    <section className="ml-[100px] mt-[130px] flex gap-10 relative before:w-[30rem] before:h-[22rem] before:content-[''] before:bg-spline-tree-before before:bg-no-repeat before:absolute before:-top-[90px] before:-left-[190px]">
      {/* header */}
      <div className="w-[21rem] mt-[270px]">
        <h2 className="text-[2.2rem] font-semibold font-monteserrat">
          Conscious fashion starts with you
        </h2>
        <p className="text-[16px] mt-[1rem] text-[#555] font-[400]">
          Aiuta also empowers you to be extra conscious about sustaining your
          wardrobe
        </p>
      </div>
      {/* desc */}
      <div className="-mt-[50px]">
        {/* images */}
        <div className="">
          <img src={detailsImg} alt="" className="max-w-[280px] mt-[50px]" />
          <div className="z-[100] absolute -top-[20px] -right-[30px] rotate-[19deg]">
            <img
              src={rateImg}
              alt=""
              className="max-w-[160px]  "
            />
          </div>
        </div>
        {/* features */}
        <div className="">
          <ul className="flex flex-col gap-[15px]">
            <li className="flex gap-[10px] items-center">
              <img
                src={starIcon}
                alt=""
                className="w-[40px] h-[40px] object-contain"
              />
              <p className="max-w-[220px] text-[14px] text-[#4000FF]">
                Buying only the things you adore helps you wear them longer
              </p>
            </li>
            <li className="flex gap-[10px] items-center">
              <img
                src={speedIcon}
                alt=""
                className="w-[40px] h-[40px] object-contain"
              />
              <p className="max-w-[220px] text-[14px] text-[#4000FF] font-monteserrat">
                The capsule approach increases the efficiency of your wardrobe.
                And we highlight the gaps
              </p>
            </li>
            <li className="flex gap-[10px] items-center">
              <img
                src={leafIcon}
                alt=""
                className="w-[40px] h-[40px] object-contain"
              />
              <p className="max-w-[220px] min-w-[220px] text-[14px] text-[#4000FF] font-monteserrat">
                Purchasing items from sustainable brands reduces your carbon
                footprint
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Fashion;
