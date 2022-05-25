import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "flowbite";
import JobsContextProvider from "./components/JobsContextProvider";
import EventsContextProvider from "./components/EventsContextProvider";
import AuthContextProvider from "./components/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <JobsContextProvider>
        <EventsContextProvider>
          <App />
        </EventsContextProvider>
      </JobsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
