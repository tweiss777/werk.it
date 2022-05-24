import React, { useState } from "react";

export default function StatusDropDown() {
  const [status, setStatus] = useState("");
  return (
    <div>
      <div>
        <select
          className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="animals"
        >
          <option value={status}>Completed</option>
          <option value={status}>In Process</option>
          <option value={status}>Rejected</option>
          <option value={status}>Label</option>
          <option value={status}>Inactive</option>
        </select>
      </div>
    </div>
  );
}
