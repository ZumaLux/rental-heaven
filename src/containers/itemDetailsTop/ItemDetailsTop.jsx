import React, { useEffect, useState } from "react";
import ShortInfo from "../../components/shortInfo/ShortInfo";
import VehicleForm from "../../components/VehicleForm/VehhicleForm";
import "./ItemDetailsTop.css";
import { useNavigate } from "react-router-dom";
import RentForm from "../../components/rentForm/RentForm";

function ItemDetailsTop({ item, updateItem }) {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const updateVehicle = (item) => {
    fetch(`http://localhost:3005/cars/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).then(() => {
      updateItem(item);
      console.log("Item Updated Successfully");
    });
  };

  const deleteVehicle = (id) => {
    if (window.confirm(`Do you want to delete ${item.brand} ${item.model}?`)) {
      fetch(`http://localhost:3005/cars/${id}`, {
        method: "DELETE",
      }).then(() => {
        navigate("/cars", { replace: true });
        console.log("Item Deleted!");
      });
    }
  };

  const addRental = (rental) => {
    fetch("http://localhost:3005/rentals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rental),
    }).then(() => {
      console.log("Car Rented!");
    });
  };

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
            <button className="del-btn" onClick={() => deleteVehicle(item.id)}>
              Delete
            </button>
            <button className="rent-btn" onClick={() => setPopup(true)}>
              Rent Now
            </button>
          </div>
        </div>
      </div>
      <VehicleForm
        trigger={popup}
        setTrigger={setPopup}
        data={item}
        updateVehicle={updateVehicle}
      />
      {/* <RentForm trigger={popup} setTrigger={setPopup} data={item} addRental={addRental} /> */}
    </section>
  );
}

export default ItemDetailsTop;
