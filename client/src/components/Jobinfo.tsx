import React from "react";
import PhaseDropDown from "./PhaseDropDown";
import StatusDropDown from "./StatusDropDown";
import HandedIn from "./HandedIn";
import Upcoming from "./Upcoming";

export default function Jobinfo() {
  return (
    <div className="flex py-5 bg-white border-border">
      <div className="w-1/6 pl-3">
        <div className="text-text">Fullstack Developer</div>
        <div className="text-addButton">ITC</div>
      </div>
      <div className="w-1/6 pl-3">
        <PhaseDropDown />
      </div>
      <div className="w-1/6 pl-3">
        <StatusDropDown />
      </div>
      <div className="w-1/6 pl-3">
        <HandedIn />
      </div>
      <div className="w-1/6 pl-3">
        <Upcoming />
      </div>
      <div className="text-text w-1/6 pl-3">May 21, 2022</div>
    </div>
  );
}
