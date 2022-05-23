import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./pages/Dashboard";

function App() { // routes should be created here

    return (
        <>
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
        </>
    );
}

export default App;
