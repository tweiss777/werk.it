import React from "react";

export default function StatusDropDown() {
  return (
    <div>
      <div>
        <select
          className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="animals"
        >
          <option value="dog">Completed</option>
          <option value="cat">In Process</option>
          <option value="hamster">Rejected</option>
        </select>
      </div>
    </div>
  );
}
