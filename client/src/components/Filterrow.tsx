import React from "react";
import ArrowSVG from "./ArrowSVG";
import FilterSVG from "./FilterSVG";

export default function Filterrow() {
  return (
    <div className="flex flex-row  justify-between">
      <div className="flex justify-between py-3 bg-bgRow pl-7">
        <div className="text-text w-max font-bold pr-10">Job</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-7">
        <div className="text-text w-max font-bold pr-10">Phase</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-7">
        <div className="text-text w-max font-bold pr-10">Status</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-7">
        <div className="text-text w-max font-bold pr-10">Handed In</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-7">
        <div className="text-text w-max font-bold pr-10">Upcoming Events</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
      <div className="flex justify-between py-3 bg-bgRow pl-7">
        <div className="text-text w-max font-bold pr-10">Last Updated</div>
        <div className="flex flex-row">
          <FilterSVG />
          <ArrowSVG />
        </div>
      </div>
    </div>
  );
}
