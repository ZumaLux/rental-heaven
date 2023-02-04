import React from "react";
import "./ItemRow.css";
import { AiFillEdit as EditIcon } from "react-icons/ai";
import { MdDelete as DeleteIcon } from "react-icons/md";

const ItemRow = ({ item, deleteItem, getItem }) => {
  return (
    <div className="item-row">
      <div className="customer">
        {item.name} {item.surname}
      </div>
      <div className="email">{item.email}</div>
      <div className="phone">{item.phone}</div>
      <div className="opt">
        <EditIcon onClick={() => getItem(item)} />
        <DeleteIcon onClick={() => deleteItem(item.id, item.name, item.surname)} />
      </div>
    </div>
  );
};

export default ItemRow;
