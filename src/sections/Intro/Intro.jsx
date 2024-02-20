import React from "react";
import DressDisplay from "../../components/DressDisplay/DressDisplay";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <>
      <section className="flex justify-between p-[40px]  gap-[200px]">
        <div className="mt-[140px] w-[34rem]  max-w-[50%]">
          <p className="font-400 text-[#555] mb-[1rem] text-[17px] maru">
            The thing we dream of is
          </p>
          <h1 className="text-[3.3rem] leading-[3.8rem] monteserrat ">
            The next
            <br />
            generation <br />
            personal AI-stylist
          </h1>
          {window.scrollY < 80 && (
            <Link to="/products">
              <button className="bg-lightGrey text-[#4000ff] w-[190px] h-[50px] rounded-[10px] mt-[130px]">
                Download Aiuta App
              </button>
            </Link>
          )}
        </div>
        <div className="max-w-[50%]">
          <DressDisplay />
          {window.scrollY < 50 && (
            <p className="bg-transparent text-[#4000ff] text-[20px] animate-bounce ml-[290px] mt-[40px]">
              start scrolling
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Intro;
