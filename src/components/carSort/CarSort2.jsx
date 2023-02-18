import "./CarSort.css";

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.substring(1);
};

const CarSort = ({ sortOptions, sortItems, filterValue }) => {
  return (
    <div className="car-sort">
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

export default CarSort;
