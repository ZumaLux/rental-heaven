import React, { useState } from "react";
import { auth } from "../../firebase/firebase-config";
import { getCurrentDate, getTotalPriceByDays } from "../../utils/rentalUtils";
import "./RentForm.css";

const RentForm = ({ trigger, setTrigger, carData, addRental, signedUser }) => {
  const [startDate, setStartDate] = useState(getCurrentDate());
  const [endDate, setEndDate] = useState(getCurrentDate());

  const resetCalendar = () => {
    setStartDate(getCurrentDate());
    setEndDate(getCurrentDate());
  };

  const getTotalPrice = () => {
    if (!startDate || !endDate) return;
    if (endDate < startDate) return;
    return getTotalPriceByDays(carData, startDate, endDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rental = {
      customerId: auth.currentUser.uid,
      vehicleId: carData.id,
      dateFrom: e.target.dateFrom.value,
      dateTo: e.target.dateTo.value,
      price: parseFloat(getTotalPrice()),
    };
    console.log("rental=> ", signedUser);
    addRental(rental);
    e.target.reset();
    setTrigger(false);
    resetCalendar();
  };

  return trigger ? (
    <section className="rent-form-container">
      <div className="overlay"></div>
      <div className="rent-form">
        <div className="title">
          Rent
          <div
            className="close-btn"
            onClick={() => {
              setTrigger(false);
              resetCalendar();
            }}
          >
            X
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <b>Name:</b> {signedUser.name} {signedUser.surname}
          <br />
          <br />
          <b>Vehicle: </b> {carData.brand} {carData.model} {carData.year}
          <br />
          <b>Details: </b> {carData.fuel}, {carData.gearbox}
          <br />
          <b>Price: </b>${carData.price} /day
          <div className="date-container">
            <div>
              <label htmlFor="dateFrom">From:</label>
              <input
                name="dateFrom"
                type="date"
                required
                defaultValue={getCurrentDate()}
                min={getCurrentDate()}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  getTotalPrice();
                }}
              />
            </div>
            <div>
              <label htmlFor="dateTo">To:</label>
              <input
                name="dateTo"
                type="date"
                required
                defaultValue={getCurrentDate()}
                min={startDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  getTotalPrice();
                }}
              />
            </div>
          </div>
          <div className="total">
            Total: <b>${getTotalPrice()}</b>
          </div>
          <button className="rent-button" type="submit">
            Rent Now
          </button>
        </form>
      </div>
    </section>
  ) : (
    ""
  );
};

export default RentForm;
