import React from "react";
import "./SearchBar.css";
import { GoSearch as SearchIcon } from "react-icons/go";

const SearchBar = ({ searchPhrase }) => {
  return (
    <div className="search-bar">
      <input
        className="input"
        placeholder="Search"
        onChange={(e) => searchPhrase(e.target.value)}
      ></input>
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
