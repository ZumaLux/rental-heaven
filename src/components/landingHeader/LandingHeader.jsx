import React from "react";
import "./LandingHeader.css";
import { useNavigate } from "react-router-dom";

const LandingHeader = () => {
  const navigate = useNavigate();
  return (
    <section className="landing-header">
      <div className="landing-header__left-side">
        <h1>Keep steering. Leave the rest to us.</h1>
        <button onClick={() => navigate("/cars")}>RENT NOW</button>
      </div>
      <h5 className="landing-header__author-name">Photo by Lukas Žvikas</h5>
    </section>
  );
};

export default LandingHeader;
