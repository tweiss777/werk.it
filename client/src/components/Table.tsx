import React, { useEffect } from "react";
import Filterrow from "./Filterrow";
import Jobinfo from "./Jobinfo";
import "../styles/jobInfo.css";
import { useContext } from "react";
import JobsContext from "../context/JobsContext"; 


export default function Table() {
  const {fetchAllJobs} = useContext(JobsContext)  
  
  const array: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  useEffect(() => fetchAllJobs()) 

  return (
    <>
      <Filterrow />
      <div className="job-info-container">
        {array.map((item, index) => {
          return <Jobinfo key={index} />;
        })}
      </div>
    </>
  );
}
