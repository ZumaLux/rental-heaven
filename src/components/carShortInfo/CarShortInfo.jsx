import React from "react";
import "./CarShortInfo.css";

const CarShortInfo = ({ name, value }) => {
  return (
    <div className="car-short-info">
      <b>{name}:</b> {value}
    </div>
  );
};

export default CarShortInfo;
