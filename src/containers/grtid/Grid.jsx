import React, { useState, useMemo, useEffect } from "react";
import ItemCard from "../../components/itemCard/ItemCard";
import Pagination from "../../components/pagination/Pagination";
import SortFilter2 from "../../components/sortFilter/SortFilter2";
import useSessionStorage from "../../hooks/useSessionStorage";
import "./Grid.css";
import SearchBar from "../../components/searchBar/SearchBar";
import VehicleForm from "../../components/VehicleForm/VehhicleForm";

const Grid = ({ data, setData }) => {
  //Sorting variables
  const sortOptions = ["brand model", "price brand", "year brand", "discount"];
  const [filterValue, setFilterValue] = useSessionStorage("car-Filter", "default");
  const [searchPhrase, setSearchPhrase] = useState("");
  //Pagination variables
  const [currentPage, setCurrentPage] = useSessionStorage("car-CurrentPage", 1);
  const postsPerPage = 12;
  //Form popup
  const [popup, setPopup] = useState(false);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const searchData = searchItems(searchPhrase);

  //Display data (searched + sorted)
  const displayData = useMemo(() => {
    sortItems(filterValue);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return searchData.reverse().slice(indexOfFirstPost, indexOfLastPost);
  }, [filterValue, currentPage, searchData]);

  //Searching data
  function searchItems(word) {
    const excludedColumns = ["id", "img"];
    const _word = word.toLowerCase().trim();
    return data.filter((item) => {
      return Object.keys(item).some((key) =>
        excludedColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(_word)
      );
    });
  }

  //Sorting data
  function cmp(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  function sortItems(sortValue) {
    if (sortValue === "default") return;
    if (sortValue.split(" ")[0].includes("ascending")) {
      return [
        data.sort(function (a, b) {
          return (
            cmp(b[sortValue.split(" ")[1]], a[sortValue.split(" ")[1]]) ||
            cmp(b[sortValue.split(" ")[2]], a[sortValue.split(" ")[2]])
          );
        }),
      ];
    } else if (sortValue.split(" ")[0].includes("descending")) {
      return [
        data.sort(function (a, b) {
          return (
            cmp(a[sortValue.split(" ")[1]], b[sortValue.split(" ")[1]]) ||
            cmp(a[sortValue.split(" ")[2]], b[sortValue.split(" ")[2]])
          );
        }),
      ];
    }
  }

  function addVehicle(car) {
    fetch("http://localhost:3005/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    }).then(() => {
      setData([...data, car]);
      // setData([car].concat([...data])); //add at the beginning
      console.log("Item Added Successfully");
    });
  }

  useEffect(() => {
    document.body.style.overflow = popup ? "hidden" : "scroll";
  }, [popup]);

  return (
    <section className="grid-container">
      <div className="grid-container__opt">
        <div className="search-container">
          <SearchBar searchPhrase={(value) => setSearchPhrase(value)} />
        </div>
        <div className="add-btn-container">
          <button onClick={()=>setPopup(true)}>Add</button>
        </div>
        <div className="sort-container">
          <SortFilter2
            sortOptions={sortOptions}
            sortItems={(value) => setFilterValue(value)}
            filterValue={filterValue}
          />
        </div>
      </div>
      <div className="grid-container__content">
        {displayData &&
          displayData.map((item) => {
            return <ItemCard {...item} key={item.id} />;
          })}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={searchData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <VehicleForm trigger={popup} setTrigger={setPopup} addVehicle={addVehicle} />
    </section>
  );
};

export default Grid;

//  return data.filter((item) => {
//  for (const [key, value] of Object.entries(item)) {
//    if (value.toString().toLowerCase().includes(word.toLowerCase())) {
//      return item;
//      }
//    }
//  });
