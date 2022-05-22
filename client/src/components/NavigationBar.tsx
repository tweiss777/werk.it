import * as React from "react";
import MenuBar from "./MenuBar";
import '../styles/navigationbar.css'
import { useState } from "react";
import LogoSVG from "./LogoSVG";

function NavigationBar() {

  return (
    
    <div className="h-full font-inter">
      <div className="w-full flex flex-row navigation-bar-container">
        <div className="logo">
          <LogoSVG />
        </div>
      </div>
      <MenuBar />
    </div>
    
      
  );
}

export default NavigationBar;
