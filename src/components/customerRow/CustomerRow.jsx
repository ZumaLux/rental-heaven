import React from "react";
import "./CustomerRow.css";
import { AiFillEdit as EditIcon } from "react-icons/ai";
import { RiAdminLine as AdminIcon } from "react-icons/ri";
import { isAdmin, isMainAdmin } from "../../firebase/firebase-access-level";
import { useAuthContext } from "../../context/authContext";

const CustomerRow = ({ customer, getCustomer, setAdmin }) => {
  const { isMainAdminAuth } = useAuthContext();
  return (
    <div className="customer-row">
      <div className="field customer">
        {customer.name} {customer.surname}
      </div>
      <div className="field email">{customer.email}</div>
      <div className="field phone">{customer.phone}</div>
      {isMainAdminAuth() && (
        <div className="field opt">
          {!isMainAdmin(customer) && (
            <>
              <AdminIcon
                className={isAdmin(customer) ? "admin-red" : "admin-normal"}
                onClick={() => setAdmin(customer)}
              />
              <EditIcon className="edit" onClick={() => getCustomer(customer)} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomerRow;
