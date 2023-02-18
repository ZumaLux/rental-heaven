import React from "react";
import "./HomeHeader.css";
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const navigate = useNavigate();
  return (
    <section className="home-header">
      <div className="home-header__left-side">
        <h1>Keep steering. Leave the rest to us.</h1>
        <button onClick={() => navigate("/cars")}>RENT NOW</button>
      </div>
      <h5 className="home-header__author-name">Photo by Lukas Žvikas</h5>
    </section>
  );
};

export default HomeHeader;
