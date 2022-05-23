import React from "react";
import AddButton from "../components/AddButton";
import Search from "../components/Search";
import Table from "../components/Table";

export default function Dashboard() {
  return (
    <div className="flex flex-col border-2  p-5 m-5 bg-white rounded-lg">
      <div className="flex flex-row justify-between">
        <AddButton /> <Search />
      </div>
      <div>found ... jobs + activated filters</div>
      <div>
        <Table />
      </div>
      <div>page numeration</div>
    </div>
  );
}
