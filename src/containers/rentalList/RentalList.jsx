import React from "react";
import "./RentalList.css";
import RentalRow from "../../components/rentalRow/RentalRow";

const RentalList = ({ rentalData, isPending, error }) => {
  return (
    <div className="rental-list">
      <div className="rental-list__titles">
        <div>Customer</div>
        <div>Vehicle</div>
        <div>Date</div>
        <div>Price</div>
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {rentalData &&
        rentalData.map((item) => {
          return <RentalRow {...item} key={item.id} />;
        })}
    </div>
  );
};

export default RentalList;
