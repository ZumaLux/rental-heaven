import { useState, useEffect, useMemo } from "react";
import {db} from "../firebase/firebase-config";
import { useAppContext } from "../context/context";
import { collection, getDocs } from "firebase/firestore";

const useFetchAPI = (dbColl) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { setCarlist } = useAppContext();
  const [reload, setReload] = useState(false);

  const ref = collection(db, dbColl);

  useEffect(() => {
    const getItems = () => {
      // if (carList.length > 0) return;
      setIsPending(true);
      try {
        getDocs(ref).then((doc) => {
          const newData = [];
          doc.docs.map((item) => {
            return newData.push({ ...item.data(), id: item.id });
          });
          console.log("fetched");
          setData(newData);
          setCarlist(newData);
        });
      } catch (err) {
        setError(err);
      }
      setIsPending(false);
      setReload(false);
    };
    return getItems;
  }, [reload]);

  return { data, isPending, error, setReload };
};

export default useFetchAPI;
