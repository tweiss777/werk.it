import * as React from "react";
import MenuBar from "./MenuBar";
import { useState } from "react";

function NavigationBar() {
  const [display, setDisplay] = useState<boolean>(false);

  function handleDisplayMenu() {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }

  return (
    <div className="font-inter">
      <button onClick={handleDisplayMenu}>Menu</button>
      <MenuBar />
    </div>
      
  );
}

export default NavigationBar;
