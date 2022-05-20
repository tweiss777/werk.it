import React from "react";
import { Link } from "react-router-dom";
import '../styles/menubar.css';
export default function MenuBar() {

    return (
        // flex box
        <div className="menu-bar-container">
<<<<<<< HEAD
            
=======
            <div className="profile-info">
                <img alt="donald" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" />
            </div>
>>>>>>> fb3946781d2ba25c1098a174ebf3933b80ac8724
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