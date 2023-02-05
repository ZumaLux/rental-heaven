import React, { useState } from "react";
import ItemRow from "../../components/itemRow/ItemRow";
import "./ListGrid.css";
import {db} from "../../firebase/firebase-config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import CustomerForm from "../../components/customerForm/CustomerForm";

const ListGrid = ({ data, isPending, error, collectionName, setReload }) => {
  const [popup, setPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  const getItem = (item) => {
    setCurrentItem(item);
    console.log(item);
    setPopup(true);
  };

  const updateItem = (id, customer) => {
    const itemDocRef = doc(db, collectionName, id);
    updateDoc(itemDocRef, customer);
    setReload(true);
    console.log("Item Updated!");
  };

  const deleteItem = (id, name, surname) => {
    if (window.confirm(`Do you want to delete ${name} ${surname}?`)) {
      const itemDocRef = doc(db, collectionName, id);
      deleteDoc(itemDocRef);
      setReload(true);
      console.log("Item Deleted!");
    }
  };

  return (
    <section className="list-grid">
      <div className="list-grid__titles">
        <div>Name</div>
        <div>E-mail</div>
        <div>Phone</div>
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data &&
        data.map((item) => {
          return <ItemRow key={item.id} item={item} getItem={getItem} deleteItem={deleteItem} />;
        })}
      <CustomerForm
        data={currentItem}
        trigger={popup}
        setTrigger={setPopup}
        updateItem={updateItem}
      />
    </section>
  );
};

export default ListGrid;
