import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import MenuBar from './components/MenuBar'

function App() {
    // routes should be created here

    return (
        <>
            <BrowserRouter>
                <MenuBar />
                <Routes>


                    
                </Routes>
            
            </BrowserRouter>

        </>
    )
}

export default App
