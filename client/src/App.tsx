import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'

function App() {
    // routes should be created here

    return (
        <>
            <BrowserRouter>
                <NavigationBar />
                <Routes>


                    
                </Routes>
            
            </BrowserRouter>

        </>
    )
}

export default App
