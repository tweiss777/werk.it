import React,{useState} from "react";
import AddButton from "../components/AddButton";
import FilterTab from "../components/FilterTab";
import Search from "../components/Search";
import Table from "../components/Table";
import JobPopUp from "../modals/JobPopUp";

export default function Dashboard() {
  const [showAddPopup,setShowAddPopup] = useState<boolean>(false)
  const matchingJobs = 230;
  return (

    <div className="font-inter w-full">
      {showAddPopup && <JobPopUp setDisplay={setShowAddPopup} />}
      
      <div className="flex flex-col border-2 p-5 m-5 bg-white rounded-lg ">
        <div className="flex flex-row justify-between">
          <AddButton setShowAddJob={setShowAddPopup} /> <Search />
        </div>
        <div className="flex justify-between mx-1 ">
          <div className="text-xs py-2 self-center">
            Found {matchingJobs} matching jobs
          </div>
          <FilterTab />
        </div>
        <div className="border-outline border rounded-lg">
          <Table />
        </div>
        <div>page numeration</div>
      </div>
    </div>
  );
}
