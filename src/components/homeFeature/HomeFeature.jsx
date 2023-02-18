import React from "react";
import "./HomeFeature.css";

const HomeFeature = ({ title, text, icon }) => {
  return (
    <div className="home-feature">
      <div className="home-feature__icon">{icon}</div>
      <h3 className="home-feature__title">{title}</h3>
      <p className="home-feature__text">{text}</p>
    </div>
  );
};

export default HomeFeature;
