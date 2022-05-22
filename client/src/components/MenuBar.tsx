import React from "react";
import { Link } from "react-router-dom";
import '../styles/menubar.css';
import DashbaordSVG from "./DashboardSVG";
import LogoSVG from "./LogoSVG";

interface IProps{
    isDisplayed?: boolean;
}

function MenuBar({ isDisplayed }: IProps) {
  if (!isDisplayed) return <></>;
  else
    return (
      <div className="menu-bar-container">
        <div className="menu-bar">
          <div className="profile-info">
            <LogoSVG />

          </div>

          <Link to="/saved">
            <div className="flex flex-row menu-item">
              <DashbaordSVG />
              <button>DASHBOARD</button>
            </div>
          </Link>

          <Link to="/template">
            <div className="flex flex-row menu-item">

              <button>APPLIED JOBS</button>
            </div>
          </Link>

          <Link to="/wishlist">
            <div className="flex flex-row menu-item">
              <button>WISHLIST</button>
            </div>
          </Link>

          <Link to="/calendar">
            <div className="flex flex-row menu-item">
              <button>CALENDAR</button>
            </div>
          </Link>
          <Link to="/contacts">
            <div className="flex flex-row menu-item">
              <button>CONTACTS</button>
            </div>
          </Link>

          <Link to="/files">
            <div className="flex flex-row menu-item">
              <button>FILES</button>
            </div>
          </Link>

          <Link to="/settings">
            <div className="flex flex-row menu-item">
              <button>SETTINGS</button>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default MenuBar;
