import React, { useEffect, useState } from "react";
import ShortInfo from "../../components/shortInfo/ShortInfo";
import VehicleForm from "../../components/VehicleForm/VehhicleForm";
import "./ItemDetailsTop.css";
import RentForm from "../../components/rentForm/RentForm";

function ItemDetailsTop({ item, updateVehicle, deleteVehicle }) {
  const [popup, setPopup] = useState(false);

  const addRental = (rental) => {};

  useEffect(() => {
    document.body.style.overflow = popup ? "hidden" : "visible";
  }, [popup]);

  return (
    <section className="item-details-top">
      <div className="item-details-top__img-container">
        <img src={item.img} alt="" />
      </div>
      <div className="item-details-top__info-container">
        <div className="item-details-top__title">
          <h3>
            {item.brand.toUpperCase()}&ensp;{item.model.toUpperCase()}
          </h3>
        </div>
        <div className="item-details-top__info">
          <ShortInfo name="YEAR" value={item.year} />
          <ShortInfo name="FUEL" value={item.fuel} />
          <ShortInfo name="SEATS" value={item.seats} />
          <ShortInfo name="GEARBOX" value={item.gearbox} />
          <ShortInfo name="DOORS" value={item.doors} />
          <ShortInfo name="AC" value={item.ac} />
        </div>
        <div>
          <div className="item-details-top__price">
            <h3>$ {item.discPrice}</h3>
            <h3>-{item.discount}% Discount</h3>
          </div>
          <div className="item-details-top__buttons">
            <button className="edit-btn" onClick={() => setPopup(true)}>
              Edit
            </button>
            <button className="del-btn" onClick={() => deleteVehicle()}>
              Delete
            </button>
            <button className="rent-btn" onClick={() => setPopup(true)}>
              Rent Now
            </button>
          </div>
        </div>
      </div>
      <VehicleForm trigger={popup} setTrigger={setPopup} data={item} updateVehicle={updateVehicle} />
      {/* <RentForm trigger={popup} setTrigger={setPopup} data={item} addRental={addRental} /> */}
    </section>
  );
}

export default ItemDetailsTop;
