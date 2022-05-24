import React from "react";
import AddButtonSVG from "./AddButtonSVG";

interface IProps{
  setShowAddJob: Function;
}


export default function AddButton({setShowAddJob}: IProps) {
  return (
    <div>
      <button onClick={() => setShowAddJob(true)} className="bg-addButton text-white flex items-center px-3 py-2 rounded ">
        <AddButtonSVG />
        <div className="px-1"> Add Job</div>
      </button>
    </div>
  );
}
