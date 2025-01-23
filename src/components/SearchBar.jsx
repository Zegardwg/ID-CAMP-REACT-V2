import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ searchKeyword, setSearchKeyword }) {
  return (
    <div className="search-bar">
      <FaSearch className="icon-search" />
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
