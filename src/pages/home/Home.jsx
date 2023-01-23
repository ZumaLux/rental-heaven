import React from "react";
import "./Home.css";
import LandingHeader from "../../components/landingHeader/LandingHeader";
import LandingFeatures from "../../containers/landingFeatures/LandingFeatures";
import InfoOne from "../../components/infoOne/InfoOne";

const Home = () => {
  return (
    <div className="page-container">
      <LandingHeader />
      <LandingFeatures />
      <InfoOne />
    </div>
  );
};

export default Home;
