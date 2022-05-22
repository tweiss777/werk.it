import React from "react";
import OfferSVG from "./OfferSVG";

export default function PhaseDropDown() {
  return (
    <div>
      <select
        className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        name="animals"
      >
        <option value="dog">Application</option>
        <option value="cat">Tech Interview</option>
        <option value="hamster">HR Interview</option>
        <option value="parrot">Home Assignment</option>
        <option value="spider">
          <OfferSVG />
          Got An Offer!
        </option>
      </select>
    </div>
  );
}
