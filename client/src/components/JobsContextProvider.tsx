import JobsContext from "../context/JobsContext";
import React, { useState } from "react";

export default function JobsContextProvider({ children }) {
  const [testValue, setTestValue] = useState("Test value string");
  return <JobsContext.Provider value={{testValue}}>{children}</JobsContext.Provider>;
}
