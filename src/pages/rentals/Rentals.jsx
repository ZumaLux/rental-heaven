import React, { useEffect } from "react";
import RentalRow from "../../components/rentalRow/RentalRow";
import RentalList from "../../containers/rentalList/RentalList";
import useFetchAPI from "../../hooks/useFetchAPI";
import { collection_rentals } from "../../utils/constants";

const Rentals = () => {
  const { data, isPending, error } = useFetchAPI(collection_rentals);
  useEffect(() => {
    console.log("rentals data ", data);
  }, [data]);

  return (
    <div className="page-container">
      <RentalList rentalData={data} isPending={isPending} error={error} />
    </div>
  );
};

export default Rentals;
