import * as React from "react";
import { usePopups } from "../hooks/usePopups";
import JobPopUp from "../modals/JobPopUp";
import '../styles/navigationbar.css'
import BellSVG from "./BellSVG";
import LogoSVG from "./LogoSVG";
import ProfilePic from "./ProfilePic";

function NavigationBar() {
        const {showNewJob} = usePopups();
        return (<div className="font-inter">
            <div className="navigation-bar-container">
            {showNewJob && <JobPopUp />}  
                <div className="logo">
                    <LogoSVG/>
                </div>
                <div className="right-side">
                    <BellSVG/>
                    <ProfilePic img_url="https://ca.slack-edge.com/T02UUJ406K1-U030MDSN8CW-0ed4d6587952-512"/>
                </div>
        </div>
    </div>


    );
}

export default NavigationBar;
