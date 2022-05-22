import React from "react";
import ArrowSVG from "./ArrowSVG";
import FilterSVG from "./FilterSVG";

export default function Filterrow() {
  return (
    <div className="flex flex-row w-max bg-bgRow w-full">
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6">
        <div className="text-text w-max font-bold pr-10">Job</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6">
        <div className="text-text w-max font-bold pr-10">Phase</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6">
        <div className="text-text w-max font-bold pr-10">Status</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6">
        <div className="text-text w-max font-bold pr-10">Handed In</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6">
        <div className="text-text w-max font-bold pr-10">Next Events</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6 truncate">
        <div className="text-text  font-bold pr-10">Last Updated</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
    </div>
  );
}
