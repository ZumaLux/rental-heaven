import React from "react";
import "../index.css";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import HomeFeatures from "../../containers/homeFeatures/HomeFeatures";
import HomeDarkLovers from "../../containers/homeDarkLovers/HomeDarkLovers";

const Home = () => {
  return (
    <div className="page-container">
      <HomeHeader />
      <HomeFeatures />
      <HomeDarkLovers />
    </div>
  );
};

export default Home;
