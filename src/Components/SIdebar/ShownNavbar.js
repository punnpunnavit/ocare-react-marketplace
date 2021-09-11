import React, { useState } from "react";
import "./Navbar.css";
import ContextProvider from "../../Context/SidebarContext";
import OuterNavBar from "./HiddenNavbar";
import { FaBars } from "react-icons/fa";

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
      <div
        className={sidebar ? "navbar active" : "navbar"}
        style={{
          display: "flex",
          justifyContent: "center",
         
        }}
      >
        <FaBars
          onClick={toggleSideBar}
          style={{
            color: "white",
            fontSize: "2.25em",
            marginTop: "50px",
            marginLeft: "30px",
            marginRight: "30px"
          }}
        />
        {/* // <button onClick={toggleSideBar}>Open</button> */}
      </div>
      <OuterNavBar onClick={hideSideBar} />
    </ContextProvider.Provider>
  );
}

export default Navbar;
