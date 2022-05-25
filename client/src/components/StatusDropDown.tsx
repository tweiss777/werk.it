import React, { useState } from "react";

export default function StatusDropDown() {
  const [status, setStatus] = useState("completed");
  console.log(status);
  return (
    <div>
      <div className="font-bold">
        <select
          className={`block w-52 py-2 px-3 border border-none  rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${status}`}
          onChange={(e: any) => {
            console.log(e.target.value);
            setStatus(e.target.value);
          }}
        >
          <option value={"completed"}>Completed</option>
          <option value={"process"}>In Process</option>
          <option value={"rejected"}>Rejected</option>
          <option value={"inactive"}>Inactive</option>
        </select>
      </div>
    </div>
  );
}
