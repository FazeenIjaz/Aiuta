import React, { useEffect, useRef, useState } from "react";
import Intro from "../sections/Intro/Intro";
import Features from "../sections/Features/Features";
import Prompts from "../sections/Prompts/Prompts";
import NewLook from "../sections/NewLook/NewLook";
import Compare from "../sections/Compare/Compare";
import Availability from "../sections/Availability/Availability";
import GenerativeTry from "../sections/GenerativeTry/GenerativeTry";
import Working from "../sections/Working/Working";
import Fashion from "../sections/Fashion/Fashion";
import Examples from "../sections/Examples/Examples";
import Assistant from "../sections/Assistant/Assistant";
import Excellence from "../sections/Excellence/Excellence";
import Globe from "../sections/Globe/Globe";
import Contact from "../sections/Contact/Contact";
import Header from "../components/Header/Header";

const Main = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [realContentWidth, setRealContentWidth] = useState(0);
  const realContentRef = useRef(null);

  const handleScroll = () => {
    setScrollLeft(-window.scrollY);
  };

  useEffect(() => {
    const updateRealContentWidth = () => {
      const width = realContentRef.current.offsetWidth;
      setRealContentWidth(width);
    };
    window.addEventListener("scroll", handleScroll);
    updateRealContentWidth();
  }, [realContentWidth]);

  const realContentStyle = {
    left: `${scrollLeft}px`,
  };

  const fakeContentStyle = {
    height: `${realContentWidth}px`,
    // height: `18850px`,
  };
  return (
    <>
      <div
        ref={realContentRef}
        style={realContentStyle}
        className={`fixed w-auto min-h-[100vh] `}
      >
        <div className="flex row flex-nowrap gap-[30px]">
          <Header className="fixed top-0 left-0" />
          <Intro />
          <Features />
          <Prompts />
          <NewLook />
          <Compare />
          <Availability />
          <GenerativeTry />
          <Working />
          <Fashion />
          <div className="">
            <Examples />
          </div>
          <Assistant />
          <Excellence />
          <Globe />
          <Contact />
        </div>
      </div>
      <div id="fakecontent" style={fakeContentStyle}></div>
    </>
  );
};

export default Main;
