import React from "react";
import card1img from "../../assets/step-5-card1.png";
import card2img from "../../assets/step-5-card2.png";
import card3img from "../../assets/step-5-card3.png";
import card4img from "../../assets/step-5-card-4.png";
import card5img from "../../assets/step-5-card-5.png";
import card6img from "../../assets/step-5-lastCard.png";
const Examples = () => {
  return (
    <section className="mt-[100px] ml-[170px] flex gap-10 before:bg-examples-before relative before:w-[130rem] before:h-[18rem] before:content-[''] before:z-[1] before:bg-no-repeat before:absolute before:top-[0px] before:-left-[190px]">
      {/* header */}
      <div className="mt-[260px] w-[21rem] z-[100]">
        <span className="text-[#4000FF] text-[52px]">5</span>
        <h2 className="text-[36px] font-[500] leading-[2rem]">
          more examples how Aiuta helps you
        </h2>
      </div>
      {/* cards */}
      <div className=" relative z-[10]">
        <ul className="">
          <li className="bg-gray-card-bg w-[652px] h-[380px] pt-[36px] px-[38px] rounded-[20px] before:content-[''] before:w-[160px] before:h-[277px] before:absolute before:bg-card-1-bg before:bg-no-repeat before:left-[222px] before:bg-contain before:top-[105px] ">
            <div className="flex ">
              <div className="w-[331px]">
                <h2 className="text-[2.2rem] font-[500] leading-[2.125rem]">
                  to make better buying decisions
                </h2>
                <p className="w-[10.25rem] mt-[2.5625rem] leading-[1.1875rem] text-[#555]">
                  Aiuta maximises your benefits while purchasing online or
                  offline, because it knows your preferences and recommends the
                  best
                </p>
              </div>
              <img src={card1img} alt="" className="max-w-[233px]" />
            </div>
          </li>
          <li className="bg-gray-card-bg w-[652px] h-[380px] pt-[36px] px-[38px] rounded-[20px] mt-[60px] ml-[70px] relative">
            <div className="flex ">
              <div className="">
                <h3 className="w-[226px] leading-[34px] font-[500] text-[35px]">
                  to make your shopping more personal
                </h3>
                <p className="text-[#555] leading-[19px] w-[164px] mt-[27px]">
                  Choose the best hoodie from thousands. Easy! The more Aiuta
                  knows, the more helpful it becomes, and even goes shopping for
                  you
                </p>
              </div>
              <img
                src={card2img}
                alt=""
                className="absolute max-w-[355px] right-[44px] bottom-[45px]"
              />
            </div>
            <div className="absolute right-[44px] top-[4rem] w-[16rem] h-[55px] flex items-center pr-[55px] pl-[24px] text-[16px] border-2 border-[#4000ff] rounded-[36px] text-[#4000ff] font-[500] cursor-text bg-search bg-no-repeat bg-[right_16px_top_8px]">
              black hoodie
            </div>
          </li>
          <li className="relative bg-gray-card-bg w-[652px] h-[380px] pt-[36px] px-[38px] rounded-[20px] mt-[80px] before:content-[''] before:w-[242px] before:h-[255px] before:absolute before:bg-card-3-bg before:bg-no-repeat before:left-[201px] before:bg-contain before:bottom-0 ">
            <div className="flex">
              <div className="w-[331px]">
                <h2 className="text-[2.2rem] font-[500] leading-[2.125rem]">
                  to decide what to wear today
                </h2>
                <p className="w-[10.25rem] mt-[2.5625rem] leading-[1.1875rem] text-[#555]">
                  No more wardrobe panic. Create some ready-to-wear outfits from
                  your digitised wardrobe. Get the best combinations supported
                  by the opinion of the stylists
                </p>
              </div>
              <img src={card3img} alt="" className="max-w-[233px]" />
            </div>
          </li>
          <li className="bg-gray-card-bg w-[652px] h-[380px] pt-[36px] px-[38px] rounded-[20px] mt-[60px] ml-[70px] relative ">
            <div className="flex backdrop-blur-md">
              <div className="">
                <h3 className="w-[284px] leading-[34px] font-[500] text-[35px]">
                  to enjoy reactions and be aware of trends
                </h3>
                <p className="text-[#555] leading-[19px] w-[264px] mt-[27px]">
                  Be social, share your looks, ask for a second opinion, enjoy
                  conversations about trendy clothes and fits
                </p>
              </div>
              <img
                src={card4img}
                alt=""
                className="absolute max-w-[187px] right-[0px] -top-[10px]"
              />
            </div>
            <div className="text-[#4000FF] flex items-baseline mt-[2.25rem] -ml-[16px]   text-[16px]">
              <div className="px-[9px] py-[10px] rounded-full bg-[#4000ff] text-white before:content-[''] before:w-[36px] before:h-[24px] before:mr-[0.1875rem] before:bg-thumb before:inline-block">
                245
              </div>
              <div className="ml-[19px]">96% admire your look</div>
            </div>
          </li>
          <li className="bg-gray-card-bg w-[652px] h-[380px] pt-[36px] px-[38px] rounded-[20px] mt-[60px]  relative ">
            <div className="flex before:absolute before:right-[87px] before:bottom-[52px] before:content-[''] before:w-[4rem] before:h-[5.2rem] before:bg-card-4-bg  before:bg-no-repeat">
              <div className="">
                <h3 className="w-[284px] leading-[34px] font-[500] text-[35px]">
                  to be more sustainable and eco-friendly
                </h3>
                <p className="text-[#555] leading-[19px] w-[264px] mt-[27px]">
                  Buying only the things you adore helps you wear them longer.
                  This way, you need fewer things to be satisfied.
                  <span className="">
                    <br />
                    <br />
                    Just being more conscious, you reduce fashion`s
                    environmental impact
                  </span>
                </p>
              </div>
              <img
                src={card5img}
                alt=""
                className="absolute max-w-[213px] top-[20px] left-[311px]"
              />
            </div>
          </li>
          <li className="relative mt-[30px]">
            <img src={card6img} alt="" className="max-w-[353px]" />
            <h2 className="absolute w-[19rem] text-[1.9rem] leading-[2.3rem] top-[100px] left-[332px]">
              <span className="text-[#4000FF] ">In a nutshell,</span>
              Aiuta is here to make you look terrific.
            </h2>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Examples;
