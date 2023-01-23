import React from "react";
import useFetch from "../../hooks/useFetch";
import Grid from "../../containers/grtid/Grid";

const Cars = () => {
  //Initial fetch
  const { data, setData, isPending, error } = useFetch("http://localhost:3005/cars");

  return (
    <div className="page-container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <Grid data={data} setData={setData} />}
    </div>
  );
};

export default Cars;
