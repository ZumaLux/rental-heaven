import React, { useEffect } from "react";
import "./RentalRow.css";

const RentalRow = ({
  customerId,
  vehicleId,
  customerName,
  vehicleName,
  dateFrom,
  dateTo,
  price,
}) => {
  //customerId/vehicleId can be used to get more info on click

  return (
    <div className="rental-row">
      <div className="field customerName">
        <span>{customerName && customerName} </span>
      </div>
      <div className="field vehicleName">
        <span>{vehicleName && vehicleName} </span>
      </div>
      <div className="field date">
        <span>{dateFrom && dateFrom} </span> <br />
        <span>{dateTo && dateTo}</span>
      </div>
      <div className="field price">
        <span>{price && price} $</span>
      </div>
    </div>
  );
};

export default RentalRow;
