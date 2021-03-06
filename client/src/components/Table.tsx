import React from "react";
import Filterrow from "./Filterrow";
import Jobinfo from "./Jobinfo";
import '../styles/jobInfo.css';

export default function Table() {
  const array: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      <Filterrow />
      <div className="job-info-container">
      {array.map((item, index) => {
        return <Jobinfo key={index} />;
      })}  
      </div>
      {/* {array.map((item, index) => {
        return <Jobinfo key={index} />;
      })} */}
    </>
  );
}
