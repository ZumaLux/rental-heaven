import React from "react";
import "./LandingFeatures.css";
import Feature from "../../components/feature/Feature";
import { AiFillCar as CarIcon } from "react-icons/ai";
import { FaRegMoneyBillAlt as MoneyIcon } from "react-icons/fa";
import { GiClick as ClickIcon } from "react-icons/gi";

const LandingFeatures = () => {
  return (
    <section className="landing-features">
      <Feature
        title="Quality cars"
        text="We have many different types of vehicles to fit your taste. And we keep them in top shape."
        icon={<CarIcon />}
      />
      <Feature
        title="Low prices"
        text="Drive around the world carefree with the lowest prices"
        icon={<MoneyIcon />}
      />
      <Feature
        title="Fast rent"
        text="Renting a car has never been so easy. You are just one click away"
        icon={<ClickIcon />}
      />
    </section>
  );
};

export default LandingFeatures;
