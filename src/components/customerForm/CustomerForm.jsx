import React from "react";
import "./CustomerForm.css";

const CustomerForm = ({ trigger, setTrigger, customerData, updateCustomer }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const customer = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: customerData.email,
      phone: e.target.phone.value,
    };
    updateCustomer(customerData.id, customer);
    e.target.reset();
    setTrigger(false);
  };

  return trigger ? (
    <section className="customer-form-container">
      <div className="overlay"></div>
      <div className="customer-form">
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
          <div className="customer-details">
            <div className="input-box">
              <span className="details">Name*</span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={customerData ? customerData.name : ""}
                required
              />
            </div>

            <div className="input-box">
              <span className="details">Surname*</span>
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                defaultValue={customerData ? customerData.surname : ""}
                required
              />
            </div>

            {!customerData && (
              <div className="input-box">
                <span className="details">E-mail*</span>
                <input type="email" name="email" placeholder="E-mail" required />
              </div>
            )}

            <div className="input-box">
              <span className="details">Phone*</span>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                defaultValue={customerData ? customerData.phone : ""}
                required
              />
            </div>
          </div>

          <button type="submit" className="customer-reg-button">
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
