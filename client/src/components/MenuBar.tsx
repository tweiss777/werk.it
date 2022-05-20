import React from "react";
import { Link } from "react-router-dom";
import '../styles/menubar.css';
export default function MenuBar() {

    return (
        // flex box
        <div className="menu-bar-container">
            
            <div className="menu-bar">
                <div className="profile-info">
                    <img src="https://ca.slack-edge.com/T02UUJ406K1-U030MDSN8CW-0ed4d6587952-512" alt="" />
                    <p>Rolf Hegrand</p>

                </div>

                <Link to='/saved'>
                    <div className="menu-item">
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