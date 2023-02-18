import React, { useEffect, useState } from "react";
import CarShortInfo from "../../components/carShortInfo/CarShortInfo";
import CarForm from "../../components/carForm/CarForm";
import "./CarDetailsTop.css";
import RentForm from "../../components/rentForm/RentForm";
import { useAuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../firebase/firebase-crud";
import { collection_rentals } from "../../utils/constants";

function CarDetailsTop({ car, updateVehicle, deleteVehicle }) {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const { signedUser, isAdminAuth } = useAuthContext();

  useEffect(() => {
    document.body.style.overflow = popup ? "hidden" : "visible";
  }, [popup]);

  const addRental = (rental) => {
    addItem(collection_rentals, rental);
  };

  return (
    <section className="car-details-top">
      <div className="car-details-top__img-container">
        <img src={car.img} alt="" />
      </div>
      <div className="car-details-top__info-container">
        <div className="car-details-top__title">
          <h3>
            {car.brand.toUpperCase()}&ensp;{car.model.toUpperCase()}
          </h3>
        </div>
        <div className="car-details-top__info">
          <CarShortInfo name="YEAR" value={car.year} />
          <CarShortInfo name="FUEL" value={car.fuel} />
          <CarShortInfo name="SEATS" value={car.seats} />
          <CarShortInfo name="GEARBOX" value={car.gearbox} />
          <CarShortInfo name="DOORS" value={car.doors} />
          <CarShortInfo name="AC" value={car.ac} />
        </div>
        <div>
          <div className="car-details-top__price">
            <h3>$ {car.discPrice}</h3>
            <h3>-{car.discount}% Discount</h3>
          </div>
          <div className="car-details-top__buttons">
            {isAdminAuth() ? (
              <>
                <button className="edit-btn" onClick={() => setPopup(true)}>
                  Edit
                </button>
                <button className="del-btn" onClick={() => deleteVehicle()}>
                  Delete
                </button>
              </>
            ) : (
              <button
                className="rent-btn"
                onClick={() => {
                  if (signedUser) setPopup(true);
                  else navigate("/signIn");
                }}
              >
                Rent Now
              </button>
            )}
          </div>
        </div>
      </div>
      <RentForm
        trigger={popup}
        setTrigger={setPopup}
        carData={car}
        addRental={addRental}
        signedUser={signedUser}
      />
      {isAdminAuth() && (
        <CarForm
          trigger={popup}
          setTrigger={setPopup}
          carData={car}
          updateVehicle={updateVehicle}
        />
      )}
    </section>
  );
}

export default CarDetailsTop;
