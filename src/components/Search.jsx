import React from "react";
import { SearchContext } from "../App";

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className="search">
      <img
        width={22}
        height={22}
        src="img/search.svg"
        alt="Search"
        className="img__search"
      />
      <input
        value={searchValue}
        type="text"
        placeholder="Пошук ..."
        className="search__input"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <img
        width={22}
        height={22}
        src="img/clear.svg"
        alt="Clear"
        className="img__clear"
        onClick={() => setSearchValue("")}
      />
    </div>
  );
}

export default Search;
