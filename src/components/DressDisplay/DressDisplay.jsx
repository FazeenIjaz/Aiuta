import React, { useState, useEffect } from "react";
import { outfitMain } from "../../data";
import "./DressDisplay.css";

const DressDisplay = () => {
  const [currentOutfitIndex, setCurrentOutfitIndex] = useState(0);
  // const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentOutfitIndex + 1) % outfitMain.length;
      setCurrentOutfitIndex(nextIndex);
      // setImageLoaded(false);

      // setTimeout(() => {
      //   setImageLoaded(true);
      // }, 3000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentOutfitIndex]);

  const currentOutfit = outfitMain[currentOutfitIndex];

  return (
    <div
      data-id={currentOutfit.id}
      className={`flex items-center justify-end m-[20px] mt-[50px] p-[20px] dress-display`}
    >
      <img
        src={currentOutfit.lady}
        alt={`Lady ${currentOutfit.id}`}
        className="w-[250px] lady-image "
        // onLoad={() => setImageLoaded(true)}
      />

      <div className="dress-items">
        <ul className="p-[5px] flex items-center flex-col gap-[3px]">
          {["top", "bottom", "shoes"].map((item, index) => (
            <li
              key={index}
              className="details w-[8.2rem] flex items-center justify-center bg-white shadow-sm overflow-hidden"
            >
              <img
                src={currentOutfit.images[item]}
                alt=""
                className="w-[80px] h-[80px] m-[5px] "
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center gap-[10px] text-[#555] text-[0.95rem]">
        <div className="progress flex flex-col bg-white w-[140px] rounded-[8px] shadow-md text-center h-[170px] p-[10px] gap-[20px] overflow-hidden">
          <p className="flex items-center justify-center h-[4.5rem] my-[1rem] text-[1.5rem] font-semibold text-black text-center">
            <svg
              className="main-circle"
              style={{ position: "absolute" }}
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow="92"
              aria-valuetext="92%"
              width="72"
              height="72"
              viewBox="0 0 72 72"
            >
              <circle
                className="circle-progress"
                cx="36"
                cy="36"
                r="33.5"
                strokeWidth="5px"
                fill="transparent"
                style={{
                  stroke: "hsla(0, 0%, 75%, 0.4)",
                }}
              ></circle>
              <foreignObject
                x="0"
                y="0"
                width="72"
                height="72"
                mask="url(#:Ras4nd6:)"
              >
                <div
                  className="CircleProgress"
                  style={{
                    width: "100%",
                    height: "100%",
                    background:
                      "conic-gradient(#4000ff 0%,   #842be6 60%,#cc2be6 75%,#eb5d6b 95%,#4202ff 100%),#4000ff",
                  }}
                ></div>
              </foreignObject>
              <defs>
                <mask id=":Ras4nd6:">
                  <circle
                    className="CircleProgress_progress"
                    cx="36"
                    cy="36"
                    r="33.5"
                    strokeWidth="5px"
                    transform="rotate(-90 36 36)"
                    style={{
                      strokeDasharray: "210.487",
                      strokeDashoffset: "16.8389",
                    }}
                    stroke="white"
                    fill="transparent"
                    id="circle-mask"
                  ></circle>
                </mask>
              </defs>
            </svg>
            9
            <span
              className={`score-status-number `}
            >
              {currentOutfit.score}
            </span>
          </p>
          <p className="">
            You’re <br /> looking{" "}
            <span className="score-status">{currentOutfit.status}</span>
          </p>
        </div>

        <div className="flex flex-col bg-white w-[140px] h-[150px] rounded-[8px] shadow-md items-center justify-center overflow-hidden details">
          <ul className="flex flex-col gap-[10px] p-[10px]">
            {["fit", "new", "quality"].map((detail, index) => (
              <li key={index} className="detail-list-item flex gap-[10px]">
                <img
                  src={currentOutfit.details[detail].icon}
                  alt=""
                  className="w-[15px] h-[15px] object-contain icon"
                />
                <span>{currentOutfit.details[detail].status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DressDisplay;
