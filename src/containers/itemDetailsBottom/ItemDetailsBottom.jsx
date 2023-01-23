import React from "react";
import "./ItemDetailsBottom.css";

const ItemDetailsBottom = ({ item }) => {
  return (
    <section className="item-details-bottom">
      <div className="item-details-bottom__description">
        <h3 className="description-title">Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi, officia officiis
          culpa blanditiis nemo. Vel in inventore accusantium necessitatibus obcaecati reiciendis
          fuga error, esse excepturi amet optio illum nemo.
        </p>
      </div>
      <div className="item-details-bottom__info">
        {Object.keys(item).map((key, index) => {
          if (
            key === "id" ||
            key === "img" ||
            key === "discount" ||
            key === "price" ||
            key === "discPrice"
          )
            return;
          return (
            <div className="row" key={index}>
              <div className="row-title">
                <b>{key.toUpperCase()}</b>
              </div>
              <div className="row-info">{item[key]}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ItemDetailsBottom;
