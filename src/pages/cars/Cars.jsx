import "../index.css";
import CarGrid from "../../containers/carGrid/CarGrid";

const Cars = () => {
  return (
    <div className="page-container">
      {/* <h1 className="page-title">Pick your desired car</h1>
      <h3 className="page-title page-subtitle">We will take care of the rest</h3> */}
      <CarGrid />
    </div>
  );
};

export default Cars;
