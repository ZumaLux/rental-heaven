import React, { useEffect } from "react";
import "./RentalRow.css";
import useDocSnap from "../../hooks/useDocSnap";
import { collection_customers, collection_vehicles } from "../../utils/constants";

const RentalRow = ({ customerId, vehicleId, dateFrom, dateTo, price }) => {
  const { itemData: customerData } = useDocSnap(collection_customers, customerId);
  const { itemData: vehicleData } = useDocSnap(collection_vehicles, vehicleId);

  return (
    <div className="rental-row">
      <div className="field">
        <span>{customerData?.name} </span>
        <span>{customerData?.surname}</span>
      </div>
      <div className="field">
        <span>{vehicleData?.brand} </span>
        <span>{vehicleData?.model}</span>
      </div>
      <div className="field">
        <span>{dateFrom && dateFrom} - </span>
        <span>{dateTo && dateTo}</span>
      </div>
      <div className="field">
        <span>$ {price && price}</span>
      </div>
    </div>
  );
};

export default RentalRow;
