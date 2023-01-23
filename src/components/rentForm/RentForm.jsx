import React, { useState } from "react";
import "./RentForm.css";

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getTotalPrice = (item, start, end) => {
  const timeCount = new Date(end).getTime() - new Date(start).getTime();
  const dayCount = Math.ceil(timeCount / (1000 * 3600 * 24)) + 1;
  return parseFloat(item.discPrice * dayCount).toFixed(2);
};

const RentForm = ({ trigger, setTrigger, data, addRental }) => {
  const [startDate, setStartDate] = useState(getCurrentDate());
  const [endDate, setEndDate] = useState(getCurrentDate());

  const resetState = () => {
    setStartDate(getCurrentDate());
    setEndDate(getCurrentDate());
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const rental = {
      id: `${"customerId"}:${data.id}`,
      customerId: "awewe",
      vehicleId: data.id,
      dateFrom: e.target.dateFrom.value,
      dateTo: e.target.dateTo.value,
    };
    addRental(rental);
    e.target.reset();
    setTrigger(false);
    resetState();
  };

  const getTotal = () => {
    if (!startDate || !endDate) return;
    if (endDate < startDate) return;
    return getTotalPrice(data, startDate, endDate);
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
              resetState();
            }}
          >
            X
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <b>Name:</b> Ivan Ivanov
          <br />
          <br />
          <b>Vehicle: </b> {data.brand} {data.model} {data.year}
          <br />
          <b>Details: </b> {data.fuel}, {data.gearbox}
          <br />
          <b>Price: </b>${data.price} /day
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
                  getTotal();
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
                  getTotal();
                }}
              />
            </div>
          </div>
          <div className="total">
            Total: <b>${getTotal()}</b>
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
