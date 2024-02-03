import React from "react";
import mobileImg from "../../assets/hand.png";
import tickImg from "../../assets/tick-table.png";
import blueTick from "../../assets/blue-tick-table.png";
const Compare = () => {
  return (
    <section className="mt-[120px] ml-[20px] flex flex-nowrap gap-10 relative z-[100]">
      {/* header */}

      <div className="min-w-[20rem] max-w-[20rem] mt-[1rem]">
        <h2 className="text-[1.875rem] font-[500] leading-[2rem]">
          Everyone deserves to look great
        </h2>
        <p className="text-[#555] gap-[5px] mt-[1rem] text-[1rem]">
          Celebrities have stylists always following them. With Aiuta, you have
          one right in your pocket. And it’s affordable too.
        </p>
      </div>
      {/* image */}
      <div className="before:content-[''] before:bg-spline-mobile-before before:w-[20rem] before:h-[12rem] before:absolute before:top-[343px] before:left-[28%] before:-z-10 before:bg-no-repeat after:content-[''] after:bg-spline-mobile-after after:w-[100rem] after:h-[120rem] after:absolute after:-top-[22px] after:left-[40px] after:b after:bg-no-repeat">
        <img src={mobileImg} alt="mobile in hand" className="max-w-[290px] z-[100]" />
      </div>
      {/* table */}
      <div className="bg-card-bg w-[490px] p-[1rem] rounded-[1.25rem] pb-[2rem] shadow-md h-max text-[15px]  ml-[90px] text-black z-[100] backdrop-blur-sm">
        <table className="">
          <thead className="bg-black rounded-[20px] text-white p-[10px] text-left">
            <tr>
              <th className="w-[50%] p-[10px] px-[20px] text-[#c9c8c8]">
                Human stylist
              </th>
              <th className="w-[50%] p-[10px] px-[20px]">AI-stylist</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="flex w-full  text-[#555] gap-[5px] pt-[1.5rem]">
                <img
                  src={tickImg}
                  alt=""
                  className="w-[20px] h-[20px] object-contain"
                />
                <p>
                  Significant <br />
                  hourly payments
                </p>
              </td>
              <td className=" pr-[.5rem] pt-[1.25rem] pl-[.375rem]">
                <img
                  src={blueTick}
                  alt=""
                  className="w-[20px] h-[20px] object-contain"
                />
                <p className="ml-[25px] -mt-[20px]">
                  It’s free. Pay only for <br />
                  pro-features
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="flex  text-[#555] gap-[5px] pt-[1.5rem]">
                <img
                  src={tickImg}
                  alt=""
                  className="w-[20px] h-[20px] object-contain"
                />
                <p>
                  Vacations, weekends <br /> and other clients
                </p>
              </td>
              <td className=" pr-[.5rem] pt-[1.25rem] pl-[.375rem]">
                <img
                  src={blueTick}
                  alt=""
                  className="w-[20px] h-[20px] object-contain"
                />
                <p className="ml-[25px] -mt-[20px]">
                  Available 24/7
                  <br />
                  only for you
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="flex  text-[#555] gap-[5px] pt-[1.5rem]">
                <img
                  src={tickImg}
                  alt=""
                  className="w-[20px] h-[20px] object-contain"
                />
                <p>
                  May have an <br /> outdated opinion
                </p>
              </td>
              <td className=" pr-[.5rem] pt-[1.25rem] pl-[.375rem]">
                <img
                  src={blueTick}
                  alt=""
                  className="w-[20px] h-[20px] object-contain"
                />
                <p className="ml-[25px] -mt-[20px]">
                  AI powered
                  <br />
                  and always up to date
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="flex  text-[#555] gap-[5px] pt-[1.5rem]">
                <img
                  src={tickImg}
                  alt=""
                  className="w-[20px] h-[20px] object-contain"
                />
                <p>
                  Geographically <br /> limited
                </p>
              </td>
              <td className="pr-[.5rem] pt-[1.25rem] pl-[.375rem]">
                <img
                  src={blueTick}
                  alt=""
                  className="w-[20px] h-[20px] object-contain"
                />
                <p className="ml-[25px] -mt-[20px]">
                  Works anywhere you have connection
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Compare;
