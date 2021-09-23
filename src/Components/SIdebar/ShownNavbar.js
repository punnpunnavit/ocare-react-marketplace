import React, { useState } from "react";
import "./Navbar.css";
import ContextProvider from "../../Context/SidebarContext";
import OuterNavBar from "./HiddenNavbar";
import { FaBars } from "react-icons/fa";
import { NavbarShown } from "./Sidebar.styles";
import { Row, Container } from "react-bootstrap";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const hideSideBar = () => {
    setSidebar(false);
  };

  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <ContextProvider.Provider value={sidebar}>
        <NavbarShown active={sidebar}>
          <FaBars
            onClick={toggleSideBar}
            style={{
              color: "white",
              fontSize: "2.25em",
              marginTop: "50px",
              marginLeft: "30px",
              marginRight: "30px",
            }}
          />
        </NavbarShown>
        <OuterNavBar onClick={hideSideBar} />
    </ContextProvider.Provider>
  );
}

export default Navbar;
