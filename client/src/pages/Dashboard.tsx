import React from "react";
import AddButton from "../components/AddButton";
import Search from "../components/Search";

export default function Dashboard() {
  return (
    <div className="flex flex-col border-2 border-black p-5 m-5">
      <div className="flex flex-row">
        <AddButton /> <Search />
      </div>
      <div>found ... jobs + activated filters</div>
      <div>table</div>
      <div>page numeration</div>
    </div>
  );
}
