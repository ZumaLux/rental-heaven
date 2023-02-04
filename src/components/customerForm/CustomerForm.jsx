import React from "react";
import "./CustomerForm.css";

const CustomerForm = ({ trigger, setTrigger, data, updateItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const customer = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };
    updateItem(data.id, customer);
    e.target.reset();
    setTrigger(false);
  };

  return trigger ? (
    <section className="car-form-container">
      <div className="overlay"></div>
      <div className="car-form">
        <div className="title">
          Edit Profile
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
              <span className="details">Name*</span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={data ? data.name : ""}
                required
              />
            </div>

            <div className="input-box">
              <span className="details">Surname*</span>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                defaultValue={data ? data.surname : ""}
                required
              />
            </div>

            <div className="input-box">
              <span className="details">E-mail*</span>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                defaultValue={data ? data.email : ""}
                required
              />
            </div>

            <div className="input-box">
              <span className="details">Phone*</span>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                defaultValue={data ? data.phone : ""}
                required
              />
            </div>
          </div>

          <button type="submit" className="car-reg-button">
            Edit
          </button>
        </form>
      </div>
    </section>
  ) : (
    ""
  );
};

export default CustomerForm;
