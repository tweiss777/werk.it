import React from "react";
import FilterSVG from "./FilterSVG";
import XSVG from "./XSVG";

export default function FilterTab() {
  const filter = "Job";
  return (
    <div>
      <div className="flex py-1 px-3 my-2 border-addButton border-2 rounded">
        <FilterSVG /> <span className="px-1 text-addButton">{filter}</span>{" "}
        <XSVG />
      </div>
    </div>
  );
}
