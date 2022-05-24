import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar";
import NavigationBar from "./components/NavigationBar";
import PopupProivder from "./context/PopupProvider";
import { usePopups } from "./hooks/usePopups";
import JobPopUp from "./modals/JobPopUp";
import Dashboard from "./pages/Dashboard";

function App() { // routes should be created here
    const {showNewJob} = usePopups()
    console.log(`show new job ${showNewJob}`)


    return (
        <>
            <PopupProivder>
                <BrowserRouter>

                    <NavigationBar/>
                    <div className="flex flex-row main-container">
                        
                        <MenuBar/>
                        <Routes>
                            <Route path="/dashboard"
                                element={<Dashboard/>}/>
                        </Routes>
                    </div>

                </BrowserRouter>

            </PopupProivder>
        </>
    );
}

export default App;
