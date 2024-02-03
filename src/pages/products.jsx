import React, { useEffect } from "react";
import appleStore from "../assets/apple-store.svg";
import Header from "../components/Header/Header";
import googlePlay from "../assets/google-play.svg";
import mobileImg from "../assets/app_desktop.png";
import extensionsImg from "../assets/extension_desktop.png";
import diversityImg from "../assets/diversity_desktop.png";
import Footer from "../components/Footer/Footer";

const Products = () => {
  

  useEffect(() => {
    document.title = `Aiuta - Your personal AI stylist with virtual try on and expert second opinion! —  Aiuta — the next generation personal AI-stylist`;

    return () => {
      document.title = "Aiuta — the next generation personal AI-stylist";
    };
  }, []);
  return (
    <div className="relative  px-[190px]">
      <Header className="" />
      <main>
        {/* header */}
        <div className=" w-[34.375rem] after:content-[''] after:bg-products-bg after:absolute after:top-[120px] after:right-0 after:bg-no-repeat after:w-[40rem] after:h-[15rem] mt-[30px]">
          <h2 className="mb-[22px] text-[36px] leading-[40px] tracking-tight font-[500]">
            Our <b>products</b> for <br /> consumers and businesses
          </h2>
          <p className="text-[19px] pr-[30px] text-[#555] monteserrat">
            Aiuta is a collection of AI-based products that empower people to
            feel confident & satisfied with what they wear and how they look.
          </p>
        </div>
        <article className="bg-card-bg shadow-lg mt-[4rem] rounded-[2.25rem] flex gap-10 monteserrat">
          {/* text */}
          <div className="pt-[2.375rem] px-[2.75rem] pb-[2.625rem] w-[50%]">
            <h3 className="text-[30px] leading-[34px] mb-[16px]">
              Mobile fashion stylist for everyone
            </h3>
            <p className="text-[#666]">
              Virtual try-on enables trends exploration, makes you social
              through engaging social mechanics, and creates astonishing content
              to share with friends.
              <br />
              <br />
              Get a second opinion from expert stylists to speed up your
              decision-making on what to wear or buy.
            </p>
            <div className="flex mt-[30px]">
              <a
                href="https://apps.apple.com/app/aiuta-ai-stylist/id6447555778"
                className="w-full"
              >
                <img src={appleStore} alt="" className="max-w-[9.875rem]" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.aiuta.fashion"
                className="w-full"
              >
                <img src={googlePlay} alt="" className="max-w-[11rem]" />
              </a>
            </div>
          </div>
          {/* images */}
          <div className="w-[50%] -mt-[80px]">
            <img src={mobileImg} alt="" className="w-[100%] h-auto" />
          </div>
        </article>
        <article className="bg-card-bg shadow-lg mt-[4rem] rounded-[2.25rem] flex gap-10 monteserrat">
          {/* text */}
          <div className="pt-[2.375rem] px-[2.75rem] pb-[2.625rem] w-[50%]">
            <h3 className="text-[30px] leading-[34px] mb-[16px]">
              Browser extension for happy shopping
            </h3>
            <p className="text-[#666]">
              Shop confidently online; get expert stylist advice & community
              feedback directly from your browser.
              <br />
              <br />
              Ensure that your purchase idea suits you and maximizes your look.
            </p>
          </div>
          {/* images */}
          <div className="w-[50%]">
            <img src={extensionsImg} alt="" className="w-[100%] h-auto" />
          </div>
        </article>
        <article className="bg-card-bg shadow-lg mt-[4rem] rounded-[2.25rem] flex gap-10 monteserrat">
          {/* text */}
          <div className="pt-[2.375rem] px-[2.75rem] pb-[2.625rem] w-[50%]">
            <h3 className="text-[30px] leading-[34px] mb-[16px]">
              Diversity booster for clothing stores
            </h3>
            <p className="text-[#666]">
              Reduce costs on photoshoots, expand your market, and address every
              consumer with tailored imagery powered by AI.
              <br />
              <br />
              Try our demo and enjoy the model diversity in your store.
            </p>
          </div>
          {/* images */}
          <div className="w-[50%]">
            <img src={diversityImg} alt="" className="w-[100%] h-auto" />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
