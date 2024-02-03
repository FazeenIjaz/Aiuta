import React, { useState } from "react";
import placeHolder from "../../assets/videoPlaceholder.png";

const Assistant = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };
  return (
    <section className="mt-[100px] relative ml-[100px] flex gap-20 before:content-[''] before:bg-spline-assistant-before before:absolute before:-top-[30px] before:left-0 before:bg-no-repeat before:w-[120rem] before:h-[31rem] before:z-10">
      {/* header */}
      <div className="min-w-[20rem] max-w-[20rem] mt-[16rem]">
        <h2 className="text-[1.875rem] font-[500] leading-[2rem]">
          Aiuta is not just an app, it’s a powerful assistant
        </h2>
        <p className="text-[#555] mt-[1rem] text-[1rem]">
          You can ask Aiuta whatever you want in human language: using voice,
          uploading photos or sending a video
        </p>
      </div>
      {/* video */}
      <div className="after:content-[''] after:w-[20rem] after:h-[34rem] after:bg-videoFrame after:bg-no-repeat after:absolute after:top-[0px] after:left-0 relative after:z-0  after:bg-center after:bg-contain ml-[40px] z-[100]">
        {videoLoaded ? null : (
          <img
            src={placeHolder}
            alt=""
            className="max-w-[14rem] absolute top-0 h-[30.9rem] mt-[24px] ml-[48px] rounded-[2rem] z-0"
          />
        )}
        <video
          className={`max-w-[14rem] h-[30.9rem] mt-[24px] ml-[48px] rounded-[2rem] ${
            videoLoaded ? "z-10" : "z-0"
          }`}
          muted={true}
          autoPlay={true}
          loop={true}
          onLoadedData={handleVideoLoad}
        >
          <source src="https://storage.googleapis.com/aiuta_prod_frontend_uploads_storage/application_demo_8bc0aa904c/application_demo_8bc0aa904c.mp4" />
        </video>
      </div>
      {/* cards list */}
      <ul className="ml-[190px] z-[100]">
        <li className="relative before:content-[''] before:w-[2.25rem] before:h-[2.25rem] before:bg-dna before:bg-no-repeat before:absolute before:top-[8px] before:right-[16px] before:bg-contain w-[325px] text-[17px] p-[1rem] rounded-[1.25rem] shadow-md backdrop-blur-sm bg-card-bg">
          <h3 className="mr-[3.25rem] mb-[8px] text-[1.2rem]">FashionGPT</h3>
          <p className="text-[#555] leading-[1.1875rem] text-[14px]">
            helps to create amazing outfits, just like text models behind
            ChatGPT generate captivating texts
          </p>
        </li>
        <li className="relative before:content-[''] before:w-[2.25rem] before:h-[2.25rem] before:bg-heart-hand before:bg-no-repeat before:absolute before:top-[8px] before:right-[16px] before:bg-contain w-[242px] text-[17px] p-[1rem] rounded-[1.25rem] shadow-md backdrop-blur-sm bg-card-bg mt-[.875rem] -ml-[3rem]">
          <h3 className="mr-[3.25rem] mb-[8px] text-[1.2rem]">Wishmaker</h3>
          <p className="text-[#555] leading-[1.1875rem] text-[14px]">
            allows Aiuta to solve even complicated tasks
          </p>
        </li>
        <li className="relative before:content-[''] before:w-[2.25rem] before:h-[2.25rem] before:bg-square before:bg-no-repeat before:absolute before:top-[8px] before:right-[16px] before:bg-contain w-[264px] text-[17px] p-[1rem] rounded-[1.25rem] shadow-md backdrop-blur-sm bg-card-bg mt-[.875rem] ">
          <h3 className="mr-[3.25rem] mb-[8px] text-[1.2rem]">Check-it-out</h3>
          <p className="text-[#555] leading-[1.1875rem] text-[14px]">
            helps you make a reasoned choice by providing you with a second
            opinion
          </p>
        </li>
        <li className="relative before:content-[''] before:w-[2.25rem] before:h-[2.25rem] before:bg-mic before:bg-no-repeat before:absolute before:top-[8px] before:right-[16px] before:bg-contain w-[233px] text-[17px] p-[1rem] rounded-[1.25rem] shadow-md backdrop-blur-sm bg-card-bg mt-[.875rem] ml-[90px]">
          <h3 className="mr-[3.25rem] mb-[8px] text-[1.2rem]">NLP</h3>
          <p className="text-[#555] leading-[1.1875rem] text-[14px]">
            makes your interactions with Aiuta more natural
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Assistant;
