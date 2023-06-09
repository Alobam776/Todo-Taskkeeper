import React from "react";
import { IconContext } from "react-icons";
import { SlNotebook } from "react-icons/sl";

function Header() {
  return (
    <header>
      <h1>
        <IconContext.Provider
          value={{ className: "book-icon" }}
        ></IconContext.Provider>
        <IconContext.Provider value={{ size: "1.6em", className: "book-icon" }}>
          <SlNotebook />
        </IconContext.Provider>
        TaskKeeper
      </h1>
    </header>
  );
}

export default Header;
