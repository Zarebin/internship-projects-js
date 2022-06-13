import React from "react";
import close from "../styles-dir/images/close-search.png";
import search from "../styles-dir/images/search.png";

function SearchArea() {
  return (
    <div class="search-container">
      <img class="icon-2" src={close} />
      <div class="flex-center">
        <input class="input-search" placeholder="جستجو کنید" />
        <img class="icon-1" src={search} />
      </div>
    </div>
  );
}

export default SearchArea;
