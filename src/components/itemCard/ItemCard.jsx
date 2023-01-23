import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";

const ItemCard = ({ id, brand, model, fuel, year, seats, img, price, discount, discPrice }) => {
  return (
    <Link to={`/cars/${id}`}>
      <div className="item-card">
        <div className="item-card__image">
          <img src={img} alt={brand} />
        </div>
        <div className="item-card__info">
          <div className="item-card__extras">
            <span>{year}</span>
            <span>{fuel}</span>
            <span>{seats}-seat</span>
          </div>
          <span className="item-card__model">
            {brand}&nbsp; {model}
          </span>
          <div className="item-card__price">
            {discount > 0 && (
              <span>
                <s>${price} </s> &ensp;
              </span>
            )}
            ${discPrice}
          </div>
        </div>
        {discount > 0 && (
          <div className="item-card__promo">
            <span>-{discount}%</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ItemCard;
