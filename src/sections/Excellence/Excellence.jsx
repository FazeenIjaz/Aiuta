import React from "react";
import robotImg from "../../assets/aidam.png";
import { Link } from "react-router-dom";

const Excellence = () => {
  return (
    <section className="mt-[100px] ml-[100px] relative flex gap-20 before:content-[''] before:absolute before:w-[81rem] before:h-[14rem] before:mt-[40px] before:ml-[216px] before:z-[10] before:bg-excellence-before before:bg-no-repeat ">
      {/* header */}
      <div className="flex flex-col ml-[200px]">
        <img src={robotImg} alt="" className="max-w-[220px] ml-[40px]" />
        <h2 className="mt-[130px] text-[32px] w-[22rem] leading-[2.125rem]">
          AI excellence comes into fashion… <br /> <br />
          <span className="text-[#4000FF]">Knock-Knock.</span>
        </h2>
      </div>
      {/* cards */}
      <div className="flex gap-[20px] z-[100]">
        {/* left cards */}
        <div className="">
          {/* top card */}
          <div className="p-[1.25rem] rounded-[1.25rem] bg-card-bg shadow-md backdrop-blur-sm w-[300px]">
            <h2 className="text-[1.875rem] leading-[2.125rem] mb-[16px]">
              We are <br />{" "}
              <Link to="/team">
                <span className="text-[#4000ff] underline hover:decoration-none">
                  a team
                </span>{" "}
              </Link>
              of <br /> AI-enthusiasts
            </h2>
            <p className="text-[#555] leading-snug">
              who are deeply convinced that such specific yet essential things
              as how you look and how confident you are can be improved with the
              power of technologies.
            </p>
          </div>
          {/* bottom card */}
          <div className="p-[1.25rem] rounded-[1.25rem] bg-card-bg shadow-md backdrop-blur-sm w-[300px] mt-[20px]">
            <p className="text-[#555] leading-snug">
              We’ve already teamed up with some excellent stylists worldwide to
              ensure that tech and real-life experience empower each other.
              <br />
              <br />
              <a
                target="_blank"
                href="mailto:partnership@aiuta.com"
                className="text-[#4000ff] underline"
              >
                Drop us a line
              </a>{" "}
              if you’re interested in collaborating with us
            </p>
          </div>
        </div>
        {/* right card */}
        <div className="p-[2rem] rounded-[1.25rem] bg-card-bg shadow-md backdrop-blur-sm w-[300px] h-max">
          <h2 className="text-[44px] leading-[2.7rem] mb-[30px] w-[200px]">
            <span className="text-[#4000ff] text-[92px] mb-[40px] inline-block font-monteserrat">
              25+
            </span>{" "}
            <br /> years of relevant experience
          </h2>
          <p className="text-[#555] leading-snug">
            in the fields of Artificial Intelligence, Machine Learning and
            Speech Technologies in multibillion corporations.
            <br />
            <br />
            Having built two successful product lines of smart devices with
            voice assistants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
