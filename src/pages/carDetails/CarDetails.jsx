import { useNavigate, useParams } from "react-router-dom";
import { collection_vehicles } from "../../constants";
import ItemDetailsTop from "../../containers/itemDetailsTop/ItemDetailsTop";
import ItemDetailsBottom from "../../containers/itemDetailsBottom/ItemDetailsBottom";
import { deleteitem, updateItem } from "../../firebase/firebase-crud";
import useDocSnap from "../../hooks/useDocSnap";

const CarDetails = () => {
  const { id } = useParams();
  // const [itemData, setItemData] = useState();
  const navigate = useNavigate();
  const collectionName = collection_vehicles;
  const { itemData, isPending, error } = useDocSnap(collectionName, id);

  const updateVehicle = (car) => {
    updateItem(collectionName, car, id);
  };

  const deleteVehicle = async () => {
    await deleteitem(collectionName, itemData, id).then((confirm) => {
      if (confirm) navigate("/cars", { replace: true });
    });
  };

  return (
    <div className="page-container">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {itemData && (
        <>
          <ItemDetailsTop
            item={itemData}
            updateVehicle={updateVehicle}
            deleteVehicle={deleteVehicle}
          />
          <ItemDetailsBottom item={itemData} />
        </>
      )}
    </div>
  );
};

export default CarDetails;
