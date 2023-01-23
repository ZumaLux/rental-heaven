import React from "react";
import "./InfoOne.css";
import jeep from "../../assets/jeep.jpg";

const InfoOne = () => {
  return (
    <section className="info-one">
      <div className="info-one__image-container">
        <img src={jeep} alt="" />
        <p className="info-one__author-name">Photo by Kam Pratt</p>
      </div>
      <div className="info-one__text-container">
        <h1>Dark Lovers</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
          voluptas unde magni laborum deserunt ratione, illum vitae, explicabo,
          illo aliquam distinctio suscipit placeat eum ut cumque eligendi
          repellat. Fuga repellat consequatur asperiores! Porro, optio quae
          quibusdam eum fuga tenetur nulla vel cupiditate, impedit ipsum vitae
          recusandae asperiores omnis, veritatis ullam?
        </p>
        <button>See more</button>
      </div>
    </section>
  );
};

export default InfoOne;
