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
    <>
      <button onClick={handleDisplayMenu}>Menu</button>
      <MenuBar isDisplayed={display} />
    </>
  );
}

export default NavigationBar;
