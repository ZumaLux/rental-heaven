import React from "react";
import "./ShortInfo.css";

const ShortInfo = ({ name, value }) => {
  return (
    <div className="short-info">
      <b>{name}:</b> {value}
    </div>
  );
};

export default ShortInfo;
