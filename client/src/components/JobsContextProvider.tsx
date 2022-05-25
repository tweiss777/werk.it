import JobsContext from "../context/JobsContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { api, TOKEN } from "../utils/api";

export default function JobsContextProvider({ children }) {
  axios.defaults.headers.common = { Authorization: `bearer ${TOKEN}` };

  const { isLoading, setIsLoading } = useContext(AuthContext);

  async function fetchAllJobs() {
    setIsLoading(true);
    try {
      const res = await axios.get(`${api}/jobs`);
      setIsLoading(false);
      // console.log(res.data)
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function fetchJobById(id) {
    setIsLoading(true);
    try {
      const res = await axios.get(`${api}/jobs/${id}`);
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
      const res = await axios.post(`${api}/jobs/`, newJobObj);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function updateJob(id, newJobObj) {
    setIsLoading(true);
    try {
      const res = await axios.put(`${api}/jobs/${id}`, newJobObj);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function deleteJob(id) {
    setIsLoading(true);
    try {
      const res = await axios.delete(`${api}/jobs/${id}`);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  // Wishlist Jobs

  async function fetchAllWishlistJobs() {
    setIsLoading(true);
    try {
      const res = await axios.get(`${api}/jobs/wishlist`);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function fetchWishlistJobById(id) {
    setIsLoading(true);
    try {
      const res = await axios.get(`${api}/jobs/wishlist/${id}`);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function deleteWishlistJob(id) {
    setIsLoading(true);
    try {
      const res = await axios.delete(`${api}/jobs/${id}`);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return (
    <JobsContext.Provider
      value={{
        isLoading: isLoading,
        setIsLoading:setIsLoading,
        fetchAllJobs: fetchAllJobs,
        fetchJobById: fetchJobById,
        addNewJob: addNewJob,
        updateJob: updateJob,
        deleteJob: deleteJob,
        fetchAllWishlistJobs: fetchAllWishlistJobs,
        fetchWishlistJobById: fetchWishlistJobById,
        deleteWishlistJob: deleteWishlistJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}
