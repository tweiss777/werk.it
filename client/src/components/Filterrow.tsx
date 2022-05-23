import React from "react";
import ArrowSVG from "./ArrowSVG";
import FilterSVG from "./FilterSVG";

export default function Filterrow() {
  return (
    <div className="flex flex-row bg-bgRow w-full">
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6">
        <div className="text-text w-max font-bold pr-10">Job</div>
        <div className="flex flex-row">
          <FilterSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6">
        <div className="text-text w-max font-bold pr-10">Phase</div>
        <div className="flex flex-row">
          <FilterSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6">
        <div className="text-text w-max font-bold pr-10">Deadline</div>
        <div className="flex flex-row">
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6">
        <div className="text-text w-max font-bold pr-10">Status</div>
        <div className="flex flex-row">
          <FilterSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6">
        <div className="text-text w-max font-bold pr-10">Handed in</div>
        <div className="flex flex-row">
          <FilterSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-3 w-1/6 truncate">
        <div className="text-text  font-bold pr-10">Upcoming Events</div>
        <div className="flex flex-row">
          <ArrowSVG />
        </div>
      </div>
    </div>
  );
}
