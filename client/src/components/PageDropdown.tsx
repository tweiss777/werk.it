import React from "react";

export default function PageDropdown() {
  return (
    <div className="px-2">
      <select
        className="block w-20 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        name="animals"
      >
        <option value="dog">10</option>
        <option value="cat">20</option>
      </select>
    </div>
  );
}
