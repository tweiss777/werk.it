import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar";
import NavigationBar from "./components/NavigationBar";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthContext from "./context/AuthContext";
import PopupProivder from "./context/PopupProvider";
import { usePopups } from "./hooks/usePopups";
import JobPopUp from "./modals/JobPopUp";
import Dashboard from "./pages/Dashboard";

function App() {
  const { activeUser } = useContext(AuthContext);
  const { showNewJob } = usePopups();
  console.log(`show new job ${showNewJob}`);

  return (
    <>
      {{ activeUser } && (
        <PopupProivder>
          <BrowserRouter>
            <NavigationBar />
            <div className="flex flex-row main-container">
              <MenuBar />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </BrowserRouter>
        </PopupProivder>
      )}
    </>
  );
}

export default App;
