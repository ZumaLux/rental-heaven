import React from "react";
import "./HomeDarkLovers.css";
import jeep from "../../assets/jeep.jpg";

const HomeDarkLovers = () => {
  return (
    <section className="home-dark-lovers">
      <div className="home-dark-lovers__image-container">
        <img src={jeep} alt="" />
        <p className="home-dark-lovers__author-name">Photo by Kam Pratt</p>
      </div>
      <div className="home-dark-lovers__text-container">
        <h1>Dark Lovers</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptas unde magni
          laborum deserunt ratione, illum vitae, explicabo, illo aliquam distinctio suscipit placeat
          eum ut cumque eligendi repellat. Fuga repellat consequatur asperiores! Porro, optio quae
          quibusdam eum fuga tenetur nulla vel cupiditate, impedit ipsum vitae recusandae asperiores
          omnis, veritatis ullam?
        </p>
        <button>See more</button>
      </div>
    </section>
  );
};

export default HomeDarkLovers;
