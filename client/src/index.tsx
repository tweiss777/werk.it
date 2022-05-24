import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "flowbite";
import JobsContextProvider from "./components/JobsContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JobsContextProvider>
      <App />
    </JobsContextProvider>
  </React.StrictMode>
);
