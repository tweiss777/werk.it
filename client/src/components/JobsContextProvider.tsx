import JobsContext from "../context/JobsContext";
import React, { useState } from "react";
import axios from "axios";

export default function JobsContextProvider({ children }) {
  const PORT = 9000;
  const SERVER_HOST = "localhost";
  const serverURL = `http://${SERVER_HOST}:${PORT}`;

  const [isLoading, setIsLoading] = useState(false);

  async function fetchAllJobs() {
    setIsLoading(true);
    try {
      const res = await axios.get(`${serverURL}/jobs`);
      console.log("res.data get all jobs", res.data);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function fetchJobById(id) {
    setIsLoading(true);
    try {
      const res = await axios.get(`${serverURL}/jobs/${id}`);
      console.log("res.data fetch job by id", res.data);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function addNewJob(newJobObj) {
    setIsLoading(true);
    try {
      const res = await axios.post(`${serverURL}/jobs/`, newJobObj);
      console.log("res.data edit job", res.data);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function editJob(id, newJobObj) {
    setIsLoading(true);
    try {
      const res = await axios.put(`${serverURL}/jobs/${id}`, newJobObj);
      console.log("res.data edit job", res.data);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return <JobsContext.Provider value={{}}>{children}</JobsContext.Provider>;
}
