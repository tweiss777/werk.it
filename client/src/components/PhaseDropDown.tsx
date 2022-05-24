/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import OfferSVG from "./OfferSVG";

export default function PhaseDropDown() {
  const [phase, setPhase] = useState("");
  console.log(phase);

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
            onChange={(e: any) =>
              setPhase((e.target as HTMLInputElement).value)
            }
          >
            Application
          </option>
          <option
            value={phase}
            onChange={(e: any) =>
              setPhase((e.target as HTMLInputElement).value)
            }
          >
            Tech Interview
          </option>
          <option
            value={phase}
            onChange={(e: any) =>
              setPhase((e.target as HTMLInputElement).value)
            }
          >
            HR Interview
          </option>
          <option
            value={phase}
            onChange={(e: any) =>
              setPhase((e.target as HTMLInputElement).value)
            }
          >
            Home Assignment
          </option>
          <option
            value={phase}
            onChange={(e: any) =>
              setPhase((e.target as HTMLInputElement).value)
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
