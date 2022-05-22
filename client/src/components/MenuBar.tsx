import React from "react";
import { Link } from "react-router-dom";
import '../styles/menubar.css';
import Logo from '../images/Logo.svg'
import DashbaordSVG from "./DashboardSVG";
// import {solid,regular,brands} from '@fortawesome/fontawesome-svg-core' //this is giving issues
interface IProps{
    isDisplayed?: boolean
}

function MenuBar({isDisplayed}:IProps) {

    if (!isDisplayed) return <></>
    
    else return (
        
        // flex box
        <div className="menu-bar-container">
            <div className="menu-bar">
                <div className="profile-info">
                    <img src={Logo} alt="" />
                    {/* <p>Rolf Hegrand</p> */}

                </div>

                <Link to='/saved'>
                    <div className="flex flex-row menu-item">
                        <DashbaordSVG/>
                        <button>Dashboard</button>
                    </div>
                </Link>

                <Link to='/template'>
                    <div className="flex flex-row menu-item">
                        <button>Jobs Applied</button>
                    </div>
                </Link>

                <Link to='/calendar'>
                    <div className="flex flex-row menu-item">
                        <button>Calendar</button>
                    </div>
                </Link>

                <Link to='/files'>
                    <div className="flex flex-row menu-item">
                        <button>Files</button>
                    </div>
                </Link>

                <Link to='/settings'>
                    <div className="flex flex-row menu-item">
                        <button>Settings</button>
                    </div>
                </Link>

            </div>
        </div>
    )




}

export default MenuBar;