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
    <div className="h-full font-inter">
      <MenuBar />
    </div>
      
  );
}

export default NavigationBar;
