import React from "react";
import CalenderSVG from "./CalenderSVG";

export default function Upcoming() {
  return (
    <div className="flex bg-calenderbg rounded-lg p-2 align-baseline">
      <CalenderSVG />
      <div className="flex flex-col">
        <div className="text-text"> Mon, Jun 6, 2022</div>
        <div className="text-addButton"> Phone Call w/ Ohad</div>
      </div>
    </div>
  );
}
