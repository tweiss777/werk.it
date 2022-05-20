import React from "react";
import { Link } from "react-router-dom";
import '../styles/menubar.css';
export default function MenuBar() {

    return (
        // flex box
        <div className="menu-bar-container">
            <div className="profile-info">
                <img alt="donald" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" />
            </div>
            <div className="menu-bar">
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