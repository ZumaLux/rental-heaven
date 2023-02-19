import "../index.css";
import React, { useEffect } from "react";
import { collection_customers } from "../../utils/constants";
import CustomerList from "../../containers/customerList/CustomerList";
import { auth } from "../../firebase/firebase-config";
import useFetchAPI from "../../hooks/useFetchAPI";

const Customers = () => {
  const { data, isPending, error, setReload } = useFetchAPI(collection_customers);

  return (
    <div className="page-container">
      <CustomerList
        customerData={data}
        isPending={isPending}
        error={error}
        collectionName={collection_customers}
        setReload={setReload}
      />
    </div>
  );
};

export default Customers;
