import React from "react";
import PhaseDropDown from "./PhaseDropDown";
import StatusDropDown from "./StatusDropDown";
import HandedIn from "./HandedIn";
import Upcoming from "./Upcoming";


interface IProps{
  position: string,
  company_name: string,
  date: string
}

export default function Jobinfo({position,company_name,date}:IProps) {
  return (
    <div className="flex py-5 bg-white border-outline border-b">
      <div className="w-1/6 pl-3">
        <div className="text-text">{position}</div>
        <div className="text-addButton">{company_name}</div>
      </div>
      <div className="w-1/6 pl-3">
        <PhaseDropDown />
      </div>
      <div className="text-text w-1/6 pl-3">{date}</div>
      <div className="w-1/6 pl-3">
        <StatusDropDown />
      </div>
      <div className="w-1/6 pl-3">
        <HandedIn />
      </div>
      <div className="w-1/6 pl-3">
        <Upcoming />
      </div>
    </div>
  );
}
