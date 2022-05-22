import React from "react";
import { Link } from "react-router-dom";
import '../styles/menubar.css';
import AppliedJobsSVG from "./AppliedJobsSVG";
import CalendarSVG from "./CalendarSVG";
import ContactsSVG from "./ContactsSVG";
import DashbaordSVG from "./DashboardSVG";
import FilesSVG from "./FilesSVG";
import LogoSVG from "./LogoSVG";
import SettingsSVG from "./SettingsSVG";
import WishListSVG from "./WishListSVG";

interface IProps{
    isDisplayed?: boolean;
}

function MenuBar({ isDisplayed }: IProps) {
  // if (!isDisplayed) return <></>;
  // else
    return (
      <div className=" menu-bar-container">
        <div className="menu-bar">


          <Link to="/dashboard">
            <div className="menu-item">
              <DashbaordSVG />
              <button>DASHBOARD</button>
            </div>
          </Link>

          <Link to="/applied">
            <div className="menu-item">
              <AppliedJobsSVG />
              <button>APPLIED JOBS</button>
            </div>
          </Link>

          <Link to="/wishlist">
            <div className="flex flex-row menu-item">
              <WishListSVG />
              <button>WISHLIST</button>
            </div>
          </Link>

          <Link to="/calendar">
            <div className="menu-item">
              <CalendarSVG />
              <button>CALENDAR</button>
            </div>
          </Link>
          <Link to="/contacts">
            <div className="menu-item">
              <ContactsSVG />
              <button>CONTACTS</button>
            </div>
          </Link>

          <Link to="/files">
            <div className="menu-item">
              <FilesSVG />
              <button>FILES</button>
            </div>
          </Link>

          <Link to="/settings">
            <div className="menu-item">
              <SettingsSVG />
              <button>SETTINGS</button>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default MenuBar;
