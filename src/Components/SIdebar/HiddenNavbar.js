import React, { useState } from "react";
import ContextProvider from "../../Context/SidebarContext";
import NavMenu from './Sidebar.styles'
function OuterNavBar({ onClick }) {
  return (
    <ContextProvider.Consumer>
      {(sidebar) => (
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        </nav>
      )}
    </ContextProvider.Consumer>
  );
}

export default OuterNavBar;
