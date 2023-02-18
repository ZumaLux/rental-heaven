import React, { useState } from "react";
import CustomerRow from "../../components/customerRow/CustomerRow";
import "./CustomerList.css";
import CustomerForm from "../../components/customerForm/CustomerForm";
import { updateItem} from "../../firebase/firebase-crud";
import { setAdminRole } from "../../firebase/firebase-access-level";

const CustomerList = ({ customerData, isPending, error, collectionName, setReload }) => {
  const [popup, setPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  const getCustomer = (item) => {
    setCurrentItem(item);
    console.log(item);
    setPopup(true);
  };

  const updateCustomer = (id, newCustomer) => {
    updateItem(collectionName, newCustomer, id);
    setReload(true);
  };

  const setAdmin = (customer) => {
    setAdminRole(collectionName, customer).then((confirm) => {
      if (confirm) setReload(true);
    });
  };

  return (
    <section className="customer-list">
      <div className="customer-list__titles">
        <div>Name</div>
        <div>E-mail</div>
        <div>Phone</div>
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {customerData &&
        customerData.map((customer) => {
          return (
            <CustomerRow
              key={customer.id}
              customer={customer}
              getCustomer={getCustomer}
              setAdmin={setAdmin}
            />
          );
        })}
      <CustomerForm
        customerData={currentItem}
        trigger={popup}
        setTrigger={setPopup}
        updateCustomer={updateCustomer}
      />
    </section>
  );
};

export default CustomerList;
