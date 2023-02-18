import React, { useState, useEffect, useRef } from "react";
import useSessionStorage from "../../hooks/useSessionStorage";
import "./CarSort.css";

const SortFilter = ({ sortValues, data, sorting }) => {
  const [sortedList, setSortedList] = useState();
  const [sortSelection, setSortSelection] = useSessionStorage(
    "carFilter",
    "default"
  );

  const cmp = function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  };

  const sortItems = (val, sortType) => {
    if (sortType.includes("asc")) {
      const newData = [
        ...data.sort(function (a, b) {
          // if (typeof data[0][val] === "string") {}
          return cmp(a[val], b[val]);
        }),
      ];
      setSortedList(newData);
    } else if (sortType.includes("desc")) {
      const newData = [
        ...data.sort(function (a, b) {
          return cmp(b[val], a[val]);
        }),
      ];
      setSortedList(newData);
    }
    // console.log(sortedList);
    sorting(sortedList);
    setSortSelection(sortType);
  };

  return (
    <div className="sort-filter">
      <select
        value={sortSelection}
        onChange={(e) => {
          sortItems(
            e.target.options[e.target.options.selectedIndex].text,
            e.target.value
          );
          console.log("teeeeeeeeeeeeeeeeeeest");
        }}
      >
        <option value="default" disabled>
          SORT BY...
        </option>
        {sortValues.map((val, index) => {
          return (
            <optgroup key={index}>
              <option label={val + " (ascending)"} value={val + "-ascending"}>
                {val}
              </option>
              <option label={val + " (descending)"} value={val + "-descending"}>
                {val}
              </option>
            </optgroup>
          );
        })}
      </select>
    </div>
  );
};

export default SortFilter;
