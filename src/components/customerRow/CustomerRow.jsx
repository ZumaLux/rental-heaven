import React from "react";
import "./CustomerRow.css";
import { AiFillEdit as EditIcon } from "react-icons/ai";
import { RiAdminLine as AdminIcon } from "react-icons/ri";
import { isMainAdmin } from "../../firebase/firebase-access-level";

const CustomerRow = ({ customer, getCustomer, setAdmin }) => {
  return (
    <div className="customer-row">
      <div className="customer">
        {customer.name} {customer.surname}
      </div>
      <div className="email">{customer.email}</div>
      <div className="phone">{customer.phone}</div>
      <div className="opt">
        {!isMainAdmin(customer) && (
          <>
            <AdminIcon
              className={customer.accessLevel === 4 ? "admin-red" : "admin-normal"}
              onClick={() => setAdmin(customer)}
            />
            <EditIcon className="edit" onClick={() => getCustomer(customer)} />
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerRow;
