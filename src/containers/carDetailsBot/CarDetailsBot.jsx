import React from "react";
import "./CarDetailsBot.css";

const CarDetailsBottom = ({ car }) => {
  return (
    <section className="car-details-bottom">
      <div className="car-details-bottom__description">
        <h3 className="description-title">Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi, officia officiis
          culpa blanditiis nemo. Vel in inventore accusantium necessitatibus obcaecati reiciendis
          fuga error, esse excepturi amet optio illum nemo.
        </p>
      </div>
      <div className="car-details-bottom__info">
        {Object.keys(car).map((key, index) => {
          if (
            key === "id" ||
            key === "img" ||
            key === "discount" ||
            key === "price" ||
            key === "discPrice"
          )
            return "";

          return (
            <div className="row" key={index}>
              <div className="row-title">
                <b>{key.toUpperCase()}</b>
              </div>
              <div className="row-info">{car[key]}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CarDetailsBottom;
