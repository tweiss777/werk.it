/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import AddButton from "../components/AddButton";
import FilterTab from "../components/FilterTab";
import PageDropdown from "../components/PageDropdown";
import Search from "../components/Search";
import Table from "../components/Table";
import { usePopups } from "../hooks/usePopups";

import JobPopUp from "../modals/JobPopUp";

export default function Dashboard() {
  const matchingJobs = 230;
  const { showNewJob } = usePopups();
  return (
    <div className="font-inter w-full">
      {/* {showNewJob && <JobPopUp />}   */}
      <div className="flex flex-col border-2 p-5 m-5 bg-white rounded-lg ">
        <div className="flex flex-row justify-between">
          <AddButton /> <Search />
        </div>
        <div className="flex justify-between mx-1 ">
          <div className=" py-2 self-center">
            Found {matchingJobs} matching jobs
          </div>
          <FilterTab />
        </div>
        <div className="border-outline border rounded-lg">
          <Table />
        </div>
        <div>
          <div className="flex py-3">
            <span className="self-center">Show</span> <PageDropdown />
            <span className="self-center"> entries per page</span>
          </div>

          <div>{/* <Pages/> */}</div>
        </div>
      </div>
    </div>
  );
}
