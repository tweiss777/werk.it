import React from "react";
import PhaseDropDown from "./PhaseDropDown";
import StatusDropDown from "./StatusDropDown";
import HandedIn from "./HandedIn";
import Upcoming from "./Upcoming";

export default function Jobinfo() {
  return (
    <div className="flex py-5 bg-white border-border">
      <div>
        <div>Fullstack Developer</div>
        <div>ITC</div>
      </div>
      <PhaseDropDown />
      <div>
        <StatusDropDown />
      </div>
      <div>
        <HandedIn />
      </div>
      <div>
        <Upcoming />
      </div>
    </div>
  );
}
