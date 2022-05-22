import React from "react";
import SearchSVG from "./SearchSVG";

export default function Search() {
  return (
    <div className="flex">
      <SearchSVG />
      <input type="text" />
    </div>
  );
}
