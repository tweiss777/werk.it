import React from "react";
import { Link } from "react-router-dom";
import '../styles/menubar.css';
import Logo from '../images/Logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid,regular,brands} from '@fortawesome/fontawesome-svg-core'
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
                    <div className="menu-item">
                        <FontAwesomeIcon icon={solid('user-secret')}
                        <button>Saved Jobs</button>
                    </div>
                </Link>

                <Link to='/template'>
                    <div className="menu-item">
                        <button>CV Template</button>
                    </div>
                </Link>

                <Link to='/profile'>
                    <div className="menu-item">
                        <button>Profile Settings</button>
                    </div>
                </Link>

            </div>
        </div>
    )




}

export default MenuBar;