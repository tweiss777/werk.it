import React from "react";
import AddButtonSVG from "../components/AddButtonSVG";

export default function AddButton() {
  return (
    <div>
      <button className="bg-addButton text-white flex items-center px-3 py-2 rounded ">
        <AddButtonSVG />
        <div className="px-1"> Add Job</div>
      </button>
    </div>
  );
}
