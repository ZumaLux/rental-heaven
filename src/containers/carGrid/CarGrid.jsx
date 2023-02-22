import React, { useState, useMemo, useEffect } from "react";
import { collection_vehicles } from "../../utils/constants";
import CarCard from "../../components/carCard/CarCard";
import Pagination from "../../components/pagination/Pagination";
import CarSort2 from "../../components/carSort/CarSort2";
import useSessionStorage from "../../hooks/useSessionStorage";
import "./CarGrid.css";
import SearchBar from "../../components/searchBar/SearchBar";
import CarForm from "../../components/carForm/CarForm";
import useFetchAPI from "../../hooks/useFetchAPI";
import { addItem } from "../../firebase/firebase-crud";
import { useAuthContext } from "../../context/authContext";
import { sortItems, searchItems } from "../../utils/sortAndFilter";

const CarGrid = () => {
  //Auth Context
  const { isAdminAuth } = useAuthContext();
  //Initial fetch
  const { data, isPending, error, setReload } = useFetchAPI(collection_vehicles);
  //Sorting variables
  const sortOptions = ["brand model", "price brand", "year brand", "discount"];
  const [filterValue, setFilterValue] = useSessionStorage("car-Filter", "default");
  const [searchPhrase, setSearchPhrase] = useState("");
  //Pagination variables
  const [currentPage, setCurrentPage] = useSessionStorage("car-CurrentPage", 1);
  const postsPerPage = 10;
  //Form popup
  const [popup, setPopup] = useState(false);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const searchData = searchItems(data, searchPhrase);

  // Display data (searched + sorted)
  const displayData = useMemo(() => {
    sortItems(data, filterValue);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return searchData.reverse().slice(indexOfFirstPost, indexOfLastPost);
  }, [filterValue, currentPage, searchData]);

  //Add vehicle
  async function addVehicle(car) {
    await addItem(collection_vehicles, car).then((res) => {
      if (res) setReload((prev) => !prev);
    });
  }

  useEffect(() => {
    document.body.style.overflowY = popup ? "hidden" : "scroll";
  }, [popup]);

  //TEST
  useEffect(() => {
    console.log("data => ", data);
  }, [data]);

  return (
    <section className="car-grid">
      <div className="car-grid__nav">
        <div className="search-container">
          <SearchBar searchPhrase={(value) => setSearchPhrase(value)} />
        </div>
        {isAdminAuth() && (
          <div className="add-btn-container">
            <button onClick={() => setPopup(true)}>Add</button>
          </div>
        )}
        <div className="sort-container">
          <CarSort2
            sortOptions={sortOptions}
            sortItems={(value) => setFilterValue(value)}
            filterValue={filterValue}
          />
        </div>
      </div>

      {/* Loading */}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div className="car-grid__content">
        {displayData &&
          displayData.map((item) => {
            return <CarCard {...item} key={item.id} />;
          })}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={searchData.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      <CarForm trigger={popup} setTrigger={setPopup} addVehicle={addVehicle} />
    </section>
  );
};

export default CarGrid;
