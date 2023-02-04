import React, { useEffect } from "react";
import ListGrid from "../../containers/listGrid/ListGrid";
import useFetchAPI from "../../hooks/useFetchAPI";

const Customers = () => {
  const { data, isPending, error, setReload } = useFetchAPI("customers");
  const collectionName = "customers";
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="page-container">
      <ListGrid
        data={data}
        isPending={isPending}
        error={error}
        collectionName={collectionName}
        setReload={setReload}
      />
    </div>
  );
};

export default Customers;
