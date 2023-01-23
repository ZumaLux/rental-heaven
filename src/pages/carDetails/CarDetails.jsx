import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ItemDetailsTop from "../../containers/itemDetailsTop/ItemDetailsTop";
import ItemDetailsBottom from "../../containers/itemDetailsBottom/ItemDetailsBottom";

const CarDetails = () => {
  const { id } = useParams();
  const { data, setData, isPending, error } = useFetch(`http://localhost:3005/cars/${id}`);
  return (
    <div className="page-container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <ItemDetailsTop item={data} updateItem={setData} />}
      {data && <ItemDetailsBottom item={data} />}
    </div>
  );
};

export default CarDetails;
