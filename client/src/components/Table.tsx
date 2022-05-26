import React, { useEffect, useState } from "react";
import Filterrow from "./Filterrow";
import Jobinfo from "./Jobinfo";
import "../styles/jobInfo.css";
import { useContext } from "react";
import JobsContext from "../context/JobsContext"; 
import { IJob } from "../Interfaces/IJob";


export default function Table() {
  const {fetchAllJobs} = useContext(JobsContext)  
  const [jobs,setJobs] = useState<IJob[]>([])
  

  useEffect(() => {
    const loadData = async () => {
      const results: IJob[] = await fetchAllJobs();
      setJobs(results)
     
    }    
    loadData();
  },[]) 


  
  return (
    <div className="grow">
      <Filterrow />
      <div className="job-info-container">
        {jobs.map( (job,index) => {
          return <Jobinfo position={job.position} company_name={job.company_name} date={job.createdAt} key={index} />;
        })}
      </div>
    </div>
  );
}
