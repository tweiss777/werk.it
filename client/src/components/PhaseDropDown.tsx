/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState,useEffect } from "react";
import OfferSVG from "./OfferSVG";

export default function PhaseDropDown() {
  const [phase, setPhase] = useState("application");
  console.log(phase);

  useEffect(() => {

    console.log(`current phase: ${phase}`)
  })  

function handlePhaseChange(phase_value: string){
  setPhase(phase_value)
  console.log(phase)
}


  return (
    <div>
      <div>
        {}
        <select
          className={`first-letter:block w-52  py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
            phase === "application"
              ? "application"
              : phase === "tech"
              ? "tech"
              : phase === "hr"
              ? "hr"
              : phase === "home"
              ? "home"
              : "offer"
          }`}
          name="phase"
        >
          <option
            value={phase}
            onChange={(e: React.ChangeEvent<HTMLOptionElement>) => handlePhaseChange(e.target.value)}
          >
            Application
          </option>
          <option
            value={phase}
            onChange={(e: React.ChangeEvent<HTMLOptionElement>) =>
              handlePhaseChange(e.target.value)}
          >
            Tech Interview
          </option>
          <option
            value={phase}
            onChange={(e: React.ChangeEvent<HTMLOptionElement>) =>
              handlePhaseChange(e.target.value)
            }
          >
            HR Interview
          </option>
          <option
            value={phase}
            onChange={(e: any) =>
              handlePhaseChange((e.target as HTMLInputElement).value)
            }
          >
            Home Assignment
          </option>
          <option
            value={phase}
            onChange={(e: React.ChangeEvent<HTMLOptionElement>) =>
              handlePhaseChange(e.target.value)
            }
          >
            <OfferSVG />
            Got An Offer!
          </option>
        </select>
      </div>
    </div>
  );
}
