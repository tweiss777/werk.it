import EventsContext from "../context/EventsContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import JobsContext from "../context/JobsContext";
import { api, TOKEN } from "../utils/api";

export default function EventsContextProvider({ children }) {
  const { isLoading, setIsLoading } = useContext(JobsContext);

  axios.defaults.headers.common = { Authorization: `bearer ${TOKEN}` };

  async function getAllEvents() {
    setIsLoading(true);
    try {
      const res = await axios.get(`${api}/events`);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function getEventById(id) {
    setIsLoading(true);
    try {
      const res = await axios.get(`${api}/events/${id}`);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function getAllEventsForJob(id) {
    setIsLoading(true);
    try {
      const res = await axios.get(`${api}/events/job/${id}`);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function addNewEvent(eventObj) {
    setIsLoading(true);
    try {
      const res = await axios.post(`${api}/events/`, eventObj);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function updateEvent(id, newEventObj) {
    setIsLoading(true);
    try {
      const res = await axios.put(`${api}/events/${id}`, newEventObj);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  async function deleteEvent(id) {
    setIsLoading(true);
    try {
      const res = await axios.delete(`${api}/events/${id}`);
      setIsLoading(false);
      return res.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return (
    <EventsContext.Provider
      value={{
        getAllEvents,
        getEventById,
        getAllEventsForJob,
        addNewEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}
