import React from "react";
import { Link } from "react-router-dom";
// this will be hooked to the navigation bar
export default function MenuBar(){




    return(
        // flex box
        <div className="menu-bar-container">
            <div className="menu-bar">

                <Link to='/saved'>
                    <button>Saved Jobs</button>
                </Link>

                <Link to='/template'>
                    <button>CV Template</button>
                </Link>

                <Link to='/profile'>
                    <button>Profile Settings</button>
                </Link>

            </div>
        </div>
        )




}