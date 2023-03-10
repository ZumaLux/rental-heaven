import React from "react";
import "./CarForm.css";

const getYears = () => {
  const years = [];
  for (let i = 2000; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }
  return years;
};

const CarForm = ({ trigger, setTrigger, carData, addVehicle, updateVehicle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let price = parseFloat(e.target.price.value);
    let discount = parseInt(e.target.discount.value === "" ? 0 : e.target.discount.value);

    const car = {
      brand: e.target.brand.value,
      model: e.target.model.value,
      year: parseInt(e.target.year.value),
      fuel: e.target.fuel.value,
      gearbox: e.target.gearbox.value,
      ac: e.target.ac.value,
      doors: parseInt(e.target.doors.value),
      seats: parseInt(e.target.seats.value),
      img: e.target.img.value,
      extras: e.target.extras.value,
      discount: discount,
      price: price,
      discPrice: parseFloat((price - price * (discount / 100)).toFixed(2)),
    };
    if (carData) {
      updateVehicle(car);
    } else {
      addVehicle(car);
    }
    e.target.reset();
    setTrigger(false);
  };

  return trigger ? (
    <section className="car-form-container">
      <div className="overlay"></div>
      <div className="car-form">
        <div className="title">
          {carData ? "Edit" : "Add new Car"}
          <div
            className="close-btn"
            onClick={() => {
              setTrigger(false);
            }}
          >
            X
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="car-details">
            <div className="input-box">
              <span className="details">Brand*</span>
              <input
                type="text"
                name="brand"
                placeholder="Car Brand"
                defaultValue={carData ? carData.brand : ""}
                required
              />
            </div>

            <div className="input-box">
              <span className="details">Model*</span>
              <input
                type="text"
                name="model"
                placeholder="Car Model"
                defaultValue={carData ? carData.model : ""}
                required
              />
            </div>

            <div className="input-box">
              <span className="details">Doors*</span>
              <input
                type="number"
                name="doors"
                placeholder="Doors"
                defaultValue={carData ? carData.doors : ""}
                required
              />
            </div>

            <div className="input-box">
              <span className="details">Seats*</span>
              <input
                type="number"
                name="seats"
                placeholder="Seats"
                defaultValue={carData ? carData.seats : ""}
                required
              />
            </div>

            <div className="input-box">
              <span className="details">Fuel*</span>
              <select name="fuel" defaultValue={carData ? carData.fuel : ""} required>
                <option value="f-type" disabled hidden>
                  Fuel Type
                </option>
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
                <option value="hybrid">Hybrid</option>
                <option value="electric">Electric</option>
              </select>
            </div>

            <div className="input-box">
              <span className="details">Year*</span>
              <select name="year" defaultValue={carData ? carData.year : ""} required>
                <option value="year" disabled hidden>
                  Year
                </option>
                {getYears().map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-box">
              <span className="details">Gearbox*</span>
              <select name="gearbox" defaultValue={carData ? carData.gearbox : ""} required>
                <option value="t-type" disabled hidden>
                  Gearbox
                </option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </div>

            <div className="input-box">
              <span className="details">Air Conditioning*</span>
              <select name="ac" defaultValue={carData ? carData.ac : ""} required>
                <option value="ac" disabled hidden>
                  AC
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="input-box">
              <span className="details">Image*</span>
              <input
                type="text"
                name="img"
                placeholder="Image Link"
                defaultValue={carData ? carData.img : ""}
                required
              />
            </div>

            <div className="input-box">
              <span className="details">Price*</span>
              <input
                type="number"
                step="any"
                name="price"
                placeholder="Price per Day"
                defaultValue={carData ? carData.price : ""}
                required
              />
            </div>
          </div>

          <div className="input-box">
            <span className="details">Extras ( , )</span>
            <input
              type="text"
              name="extras"
              placeholder="Extras... (,)"
              defaultValue={carData ? carData.extras : ""}
            />
          </div>

          <div className="input-box">
            <span className="details">Discount % </span>
            <input
              type="number"
              name="discount"
              placeholder="Discount (%)"
              defaultValue={carData ? carData.discount : ""}
            />
          </div>

          <button type="submit" className="car-reg-button">
            {carData ? "Edit" : "Create"}
          </button>
        </form>
      </div>
    </section>
  ) : (
    ""
  );
};

export default CarForm;
