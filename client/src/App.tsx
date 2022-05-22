import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./pages/Dashboard";

function App() {
  // routes should be created here

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
