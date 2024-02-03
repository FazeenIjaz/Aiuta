import React from "react";
import { InView } from "react-intersection-observer";
import lady from "../../assets/last-lady.png";
import ladyDress from "../../assets/last-ladyDress.png";

const Globe = () => {
  return (
    <section className="w-[80rem] relative mt-[100px] ml-[100px] after:content-[''] after:absolute after:w-[30.375rem] after:h-[29.5625rem] after:top-[0px] after:left-[730px] after:z-10 after:bg-globe after:bg-no-repeat">
      <div className="relative ml-[240px] before:bg-lady-back-spline before:content-[''] before:absolute before:w-[29rem] before:ml-[0px] before:h-[23rem] before:bg-no-repeat before:top-[120px] before:-left-[80px] before:z-0 before:bg-cover after:bg-lady-front-spline after:content-[''] after:absolute after:w-[44rem] after:h-[30rem] after:bg-no-repeat after:top-[129px] after:-left-[100px] after:z-[100] after:bg-contain">
        <div className="z-[100]">
          <img
            src={lady}
            alt="lady"
            className={`max-w-[250px] absolute top-0 left-0 z-20`}
          />
          <InView>
            {({ inView, ref }) => (
              <>
                <img
                  ref={ref}
                  src={ladyDress}
                  alt="lady-dress"
                  className={`max-w-[250px]  lady-dress-img absolute top-0 left-0 ${
                    inView ? "visible" : ""
                  } z-30`}
                />
              </>
            )}
          </InView>
        </div>
      </div>
    </section>
  );
};

export default Globe;
