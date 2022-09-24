import React from "react";
import BannerHome from "./BannerHome";
import RecentWork from "./recent_work";
import Services from "./services";

const Home = () => {
  return (
    <>
      <header>
        <BannerHome />
        <Services />
        <RecentWork />
      </header>
    </>
  );
};

export default Home;
