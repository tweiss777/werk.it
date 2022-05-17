import React from "react";
import { Link } from "react-router-dom";
import '../styles/menubar.css';
export default function MenuBar() {

    return (
        // flex box
        <div className="menu-bar-container">

            <div className="menu-bar">
                <Link to='/saved'>
                    <div className="menuItem">
                        <button>Saved Jobs</button>
                    </div>
                </Link>

                <Link to='/template'>
                    <div className="menuItem">
                        <button>CV Template</button>
                    </div>
                </Link>

                <Link to='/profile'>
                    <div className="menuItem">
                        <button>Profile Settings</button>
                    </div>
                </Link>

            </div>
        </div>
    )




}