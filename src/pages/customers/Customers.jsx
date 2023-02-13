import React, { useEffect } from "react";
import { collection_customers } from "../../constants";
import ListGrid from "../../containers/listGrid/ListGrid";
import { auth } from "../../firebase/firebase-config";
import useFetchAPI from "../../hooks/useFetchAPI";

const Customers = () => {
  const { data, isPending, error, setReload } = useFetchAPI(collection_customers);
  useEffect(() => {
    console.log(data);
    console.log(auth.currentUser);
  }, [data]);

  return (
    <div className="page-container">
      <ListGrid
        data={data}
        isPending={isPending}
        error={error}
        collectionName={collection_customers}
        setReload={setReload}
      />
    </div>
  );
};

export default Customers;
