import React, { useState } from "react";
import useSessionStorage from "../../hooks/useSessionStorage";
import "./SortFilter.css";

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.substring(1);
};

const SortFilter = ({ sortOptions, sortItems, filterValue }) => {
  return (
    <div className="sort-filter">
      <select
        value={filterValue}
        onChange={(e) => {
          sortItems(e.target.value);
          // e.target.options[e.target.options.selectedIndex].text,
        }}
      >
        <option value="default" disabled>
          SORT BY...
        </option>
        {sortOptions.map((opt, index) => {
          return (
            <optgroup key={index}>
              {opt!=="discount"&&
              <option value={"ascending " + opt}>{capitalize(opt.split(" ")[0])} Ascending</option>
              }
              <option value={"descending " + opt}>
                {capitalize(opt.split(" ")[0])} Descending
              </option>
            </optgroup>
          );
        })}
      </select>
    </div>
  );
};

export default SortFilter;
