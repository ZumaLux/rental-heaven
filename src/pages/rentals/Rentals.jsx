import React, { useEffect } from "react";
import RentalRow from "../../components/rentalRow/RentalRow";
import useFetchAPI from "../../hooks/useFetchAPI";
import { collection_rentals } from "../../utils/constants";

const Rentals = () => {
  const { data, isPending, error } = useFetchAPI(collection_rentals);
  useEffect(() => {
    console.log(data[0].name);
  }, [data]);

  return (
    <div className="page-container">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data &&
        data.map((item) => {
          return <RentalRow {...item} key={item.id} />;
        })}
    </div>
  );
};

export default Rentals;
