import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import MenuBar from "./components/MenuBar";
import NavigationBar from "./components/NavigationBar";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthContext from "./context/AuthContext";
import PopupProivder from "./context/PopupProvider";
import { usePopups } from "./hooks/usePopups";
import JobPopUp from "./modals/JobPopUp";
import Dashboard from "./pages/Dashboard";
import Wishlist from "./pages/Wishlist";

function App() {
  const { user } = useContext(AuthContext);
  const { showNewJob } = usePopups();

  return (
    <>
      <BrowserRouter>
        {!user && <LandingPage />}
        {user && (
          <PopupProivder>

            <div className="flex flex-col h-full">
              <NavigationBar />
              <div className="flex flex-row main-container grow">
                <MenuBar />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </div>
            </div>
          </PopupProivder>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
