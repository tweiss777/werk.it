import React, { useState } from "react";
import CloseSVG from "../components/CloseSVG";
import LogoSVG from "../components/LogoSVG";
import { usePopups } from "../hooks/usePopups";
import { IAppliedJob } from "../Interfaces/IAppliedJob";
import '../styles/appliedjobpopup.css'
import '../styles/jobpopup.css';



export default function AppliedJobPopup(){
    const {setShowJobInfo} = usePopups();
    const [status,setStatus] = useState<string>('')
    const [phase, setPhase] = useState<string>('')
    const [upcomingEvent, setUpcomingEvent] = useState<string>('')

    function handleSubmit(){

    }

    function handleClose(){
        setShowJobInfo(false)
    }


    return(
        <div className="popup-bg">
            <div className="popup">
                <div className="form-top">
                    <LogoSVG/>
                    <button onClick={handleClose}><CloseSVG/></button>
                </div>
            </div>
        </div>   
    )

}

