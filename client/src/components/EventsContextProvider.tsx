import EventsContext from "../context/EventsContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import JobsContext from "../context/JobsContext";

export default function EventsContextProvider({ children }) {
  const { isLoading, setIsLoading } = useContext(JobsContext);

  //hardcoded for testing
  const PORT = 9000;
  const SERVER_HOST = "localhost";
  const serverURL = `http://${SERVER_HOST}:${PORT}`;

  //hardcoded token for testing
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMmYwN2IxNDgtZWZhNy00OTE3LWExMTctNWViZjBmZGVhNTM2IiwiZW1haWwiOiJyb2xmQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFRQWm9uNjk3MHJ1cUQyMG1lSlRBUE9mdUwvcnc0Tkl5R2dkaGtSVk8wOVlBVkdHck9HVmwuIiwiZmlyc3ROYW1lIjoidGVzdCIsImxhc3ROYW1lIjoidGVzdCIsImlzX2FkbWluIjpmYWxzZSwicmVmcmVzaF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeUlqcDdJbWxrSWpvaU1tWXdOMkl4TkRndFpXWmhOeTAwT1RFM0xXRXhNVGN0TldWaVpqQm1aR1ZoTlRNMklpd2laVzFoYVd3aU9pSnliMnhtUUdkdFlXbHNMbU52YlNJc0luQmhjM04zYjNKa0lqb2lKREppSkRFd0pGUlFXbTl1TmprM01ISjFjVVF5TUcxbFNsUkJVRTltZFV3dmNuYzBUa2w1UjJka2FHdFNWazh3T1ZsQlZrZEhjazlIVm13dUlpd2labWx5YzNST1lXMWxJam9pZEdWemRDSXNJbXhoYzNST1lXMWxJam9pZEdWemRDSXNJbWx6WDJGa2JXbHVJanBtWVd4elpTd2ljbVZtY21WemFGOTBiMnRsYmlJNkltVjVTbWhpUjJOcFQybEtTVlY2U1RGT2FVbHpTVzVTTldORFNUWkphM0JZVmtOS09TNWxlVW94WXpKV2VVbHFjRGRKYld4clNXcHZhVTF0V1hkT01rbDRUa1JuZEZwWFdtaE9lVEF3VDFSRk0weFhSWGhOVkdOMFRsZFdhVnBxUW0xYVIxWm9UbFJOTWtscGQybGFWekZvWVZkM2FVOXBTbmxpTW5odFVVZGtkRmxYYkhOTWJVNTJZbE5KYzBsdVFtaGpNMDR6WWpOS2EwbHFiMmxLUkVwcFNrUkZkMHBHVWxGWGJUbDFUbXByTTAxSVNqRmpWVkY1VFVjeGJGTnNVa0pWUlRsdFpGVjNkbU51WXpCVWEydzFVakprYTJGSGRGTldhemgzVDFac1FsWnJaRWhqYXpsSVZtMTNkVWxwZDJsYWJXeDVZek5TVDFsWE1XeEphbTlwWkVkV2VtUkRTWE5KYlhob1l6TlNUMWxYTVd4SmFtOXBaRWRXZW1SRFNYTkpiV3g2V0RKR2EySlhiSFZKYW5CdFdWZDRlbHBUZDJsamJWWnRZMjFXZW1GR09UQmlNblJzWW1sSk5rbHRWalZUYldocFVqSk9jRlF5YkV0VFZsWTJVMVJHVDJGVmJIcFRWelZUVGxkT1JGTlVXa3BoTTBKWlZtdE9TMDlUTld4bFZXOTRXWHBLVjJWV1RsaFZWMnhRWVZWc05WZHRjRUpOTVd4eFVsUkNVRkY2Um5OWGJURkdUVEI0VlZWVVZrNVdSMDR3VjFaU1JtVkZOVFZOUkVaaFZqQndkRlJWWkdGaE1YQllVbFJHVG1Wc2JIQlVSVTVMWTBac1dWVlhiRkJoYTFWNVZHeFNUbVZyTlRaYWVrWlBVa1pzZWxOWE1WZE9SMDVFVTFSYVRsWkdhM2hVV0hCU1RXczFSV0Y2UWs5aWFrRjFWVmRzY2xVeGNFMU9iRnBSVDBVNWJVNVZiRVpoYXpFMFpVUkZkMWxyVWxGaVJFVjVZa2RrUldWR2J6TlRSRnB6VWxkS1RtTnNSbTFaZVVselNXMU9lVnBYUmpCYVYxSkNaRU5KTmtscVNYZE5ha2wwVFVSVmRFMXFUbFZOVkUwMlRVUkZOazFVUVhWTlJFRjNWMmxKYzBsdVZuZGFSMFl3V2xkU1FtUkRTVFpKYWtsM1RXcEpkRTFFVlhSTmFsSlZUVVJqTms1RWF6Wk5SRmwxVFVSQmQxZHBTamxNUTBwd1dWaFJhVTlxUlRKT1ZFMTZUMFJKZDA5VWEzTkpiVlkwWTBOSk5rMVVXVEZOZWxFeVQwUlJOVTlZTUM1TlRFTnRkbXRQTUhwTUxYaGlhekoyWjNNd1RHaHpSMnA1VEdvd1dYcFBaV3R2WTBWNmJFTkJaREYzSWl3aVkzSmxZWFJsWkVGMElqb2lNakF5TWkwd05TMHlNMVF4TXpvd01Ub3hNQzR3TURCYUlpd2lkWEJrWVhSbFpFRjBJam9pTWpBeU1pMHdOUzB5TkZRd09EbzBPRG94T1M0d01EQmFJbjBzSW1saGRDSTZNVFkxTXpNNE5USXdPQ3dpWlhod0lqb3hOalV6TkRjeE5qQTRmUS5WanBEYkdxcm52YnRIZ3NMalpMRk1qRm9ENDJVMHI0SWsteFc4RjdXQ2FNIiwiY3JlYXRlZEF0IjoiMjAyMi0wNS0yM1QxMzowMToxMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMi0wNS0yNFQwOTo0MDowOC4wMDBaIn0sImlhdCI6MTY1MzQwODUyOCwiZXhwIjoxNjUzNDk0OTI4fQ.gc5EzkjlJdt3pp4YiccWWwCqxkzJlXyp55C460Tcneo";
  axios.defaults.headers.common = { Authorization: `bearer ${TOKEN}` };

  async function getAllEvents() {
    setIsLoading(true);
    try {
      const res = await axios.get(`${serverURL}/events`);
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
      const res = await axios.get(`${serverURL}/events/${id}`);
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
      const res = await axios.get(`${serverURL}/events/job/${id}`);
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
      const res = await axios.post(`${serverURL}/events/`, eventObj);
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
      const res = await axios.put(`${serverURL}/events/${id}`, newEventObj);
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
      const res = await axios.delete(`${serverURL}/events/${id}`);
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
