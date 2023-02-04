import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetailsTop from "../../containers/itemDetailsTop/ItemDetailsTop";
import ItemDetailsBottom from "../../containers/itemDetailsBottom/ItemDetailsBottom";
import db from "../../firebase/firebase-config";
import { doc, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore";

const CarDetails = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState();
  const navigate = useNavigate();
  const collectionName = "vehicles";

  useEffect(() => {
    const dataDocumentRef = doc(db, collectionName, id);
    const unsubscribe = onSnapshot(dataDocumentRef, (snapshot) => {
      setItemData({ ...snapshot.data(), id: snapshot.id });
      console.log("FETCHED_DETAILS", { ...snapshot.data(), id: snapshot.id });
    });
    return unsubscribe;
  }, [id]);

  const updateItem = (car) => {
    const itemDocRef = doc(db, collectionName, id);
    updateDoc(itemDocRef, car);
    console.log("Item Updated!");
  };

  const deleteItem = () => {
    if (window.confirm(`Do you want to delete ${itemData.brand} ${itemData.model}?`)) {
      const itemDocRef = doc(db, collectionName, id);
      deleteDoc(itemDocRef);
      navigate("/cars", { replace: true });
      console.log("Item Deleted!");
    }
  };

  return (
    <div className="page-container">
      {itemData && (
        <ItemDetailsTop item={itemData} updateItem={updateItem} deleteItem={deleteItem} />
      )}
      {itemData && <ItemDetailsBottom item={itemData} />}
    </div>
  );
};

export default CarDetails;
