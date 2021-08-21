import React, { useState } from "react";
import "./Navbar.css";
import ContextProvider from "../../Context/SidebarContext";
import OuterNavBar from "./HiddenNavbar";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(true);
  };

  const hideSideBar = () => {
    setSidebar(false);
  };

  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <ContextProvider.Provider value={sidebar}>
      <div className={sidebar ? "navbar active" : "navbar"} >
        <button onClick={toggleSideBar}>Open</button>
      </div>
      <OuterNavBar onClick={hideSideBar} />
    </ContextProvider.Provider>
  );
}

export default Navbar;
