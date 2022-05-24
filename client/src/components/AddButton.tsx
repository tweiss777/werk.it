import React from "react";
import { usePopups } from "../hooks/usePopups";
import AddButtonSVG from "./AddButtonSVG";



export default function AddButton() {
  const {setShowNewJob} = usePopups();
  return (
    <div>
      <button onClick={() => setShowNewJob(true)} className="bg-addButton text-white flex items-center px-3 py-2 rounded ">
        <AddButtonSVG />
        <div className="px-1">Add Job</div>
      </button>
    </div>
  );
}
