import JobsContext from "../context/JobsContext";
import React, { useState } from "react";
import axios from "axios";

export default function JobsContextProvider({ children }) {
  const PORT = 9000;
  const SERVER_HOST = "localhost";
  const serverURL = `http://${SERVER_HOST}:${PORT}`;

  const [isLoading, setIsLoading] = useState(false);

  async function getAllJobs() {
      setIsLoading(true);
    try {
      const res = await axios.get(`${serverURL}/jobs`);
      console.log("res.data", res.data);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }
  getAllJobs();
  return <JobsContext.Provider value={{}}>{children}</JobsContext.Provider>;
}
