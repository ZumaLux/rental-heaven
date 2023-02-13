import { useState, useEffect } from "react";
import { db } from "../firebase/firebase-config";
import { doc, onSnapshot } from "firebase/firestore";

const useDocSnap = (collectionName, itemId) => {
  const [itemData, setItemData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    try {
      const dataDocumentRef = doc(db, collectionName, itemId);
      const unsubscribe = onSnapshot(dataDocumentRef, (snapshot) => {
        setItemData({ ...snapshot.data(), id: snapshot.id });
        console.log("FETCHED_DETAILS", { ...snapshot.data(), id: snapshot.id });
      });
      setIsPending(false);
      return unsubscribe;
    } catch (err) {
      console.log(err.message);
      setError(error);
      setIsPending(false);
    }
  }, [itemId, collectionName]);

  return { itemData, isPending, error };
};

export default useDocSnap;
