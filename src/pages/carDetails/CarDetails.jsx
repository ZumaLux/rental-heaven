import "../index.css";
import { useNavigate, useParams } from "react-router-dom";
import { collection_vehicles } from "../../utils/constants";
import CarDetailsTop from "../../containers/carDetailsTop/CarDetailsTop";
import CarDetailsBot from "../../containers/carDetailsBot/CarDetailsBot";
import { deleteItem, updateItem } from "../../firebase/firebase-crud";
import useDocSnap from "../../hooks/useDocSnap";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { itemData, isPending, error } = useDocSnap(collection_vehicles, id);

  const updateVehicle = (car) => {
    updateItem(collection_vehicles, car, id);
  };

  const deleteVehicle = async () => {
    await deleteItem(collection_vehicles, itemData, id).then((confirm) => {
      if (confirm) navigate("/cars", { replace: true });
    });
  };

  return (
    <div className="page-container">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {itemData && (
        <>
          <CarDetailsTop
            car={itemData}
            updateVehicle={updateVehicle}
            deleteVehicle={deleteVehicle}
          />
          <CarDetailsBot car={itemData} />
        </>
      )}
    </div>
  );
};

export default CarDetails;
