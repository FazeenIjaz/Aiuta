import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Team = () => {
  useEffect(() => {
    document.title = `Aiuta team: experienced team with an impressive track record —  Aiuta — the next generation personal AI-stylist`;
    return () => {
      document.title = "Aiuta — the next generation personal AI-stylist";
    };
  }, []);
  return (
    <div className="px-[190px]">
      <Header />
      <main>Our team</main>
      <Footer />
    </div>
  );
};

export default Team;
