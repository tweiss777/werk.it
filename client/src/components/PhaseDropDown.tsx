/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import OfferSVG from "./OfferSVG";

export default function PhaseDropDown() {
  const [phase, setPhase] = useState("application");
  console.log(phase);

  useEffect(() => {
    console.log(`current phase: ${phase}`);
  });

  return (
    <div>
      <div className="font-bold">
        <select
          className={`first-letter:block w-52  py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 border-none ${phase}`}
          onChange={(e: any) => {
            console.log(e.target.value);
            setPhase(e.target.value);
          }}
        >
          <option value={"application"}>Application</option>
          <option value={"tech"}>Tech Interview</option>
          <option value={"hr"}>HR Interview</option>
          <option value={"mgmt"}>Manager Interview</option>
          <option value={"home"}>Home Assignment</option>
          <option value={"offer"}>
            <OfferSVG />
            Got An Offer!
          </option>
        </select>
      </div>
    </div>
  );
}
