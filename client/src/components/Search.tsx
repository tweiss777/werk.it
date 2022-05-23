import React from "react";
import SearchSVG from "./SearchSVG";

export default function Search() {
  return (
    <div className="flex border-border rounded-lg border-2 align-center bg-white justify-between ">
      <SearchSVG />
      <input
        type="text"
        placeholder="Search by job name, phase, status, etc..."
        className="rounded w-96"
      />
    </div>
  );
}
