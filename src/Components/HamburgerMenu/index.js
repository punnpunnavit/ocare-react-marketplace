import React, { useState } from "react";

const HamburgerMenu = () => {
  return (
    <>
      <input type="checkbox" id="menu_active" checked />
      <div id="wrapper" class="active">
        <div id="menu">
          <span id="site-name">
            <label for="menu_active">
              <i class="fa fa-arrow-left"></i>
              <i class="fa fa-bars"></i>
            </label>
          </span>
          <ul>
            <a href="">
              <li>
                Home<i class="fa fa-home"></i>
              </li>
            </a>
            <a href="">
              <li>
                Work<i class="fa fa-briefcase"></i>
              </li>
            </a>
            <a href="">
              <li>
                About<i class="fa fa-user"></i>
              </li>
            </a>
            <a href="">
              <li>
                Contact<i class="fa fa-send"></i>
              </li>
            </a>
            <a href="https://www.twitter.com/bastien_mottier" target="_blank">
              <li>
                Twitter<i class="fa fa-twitter"></i>
              </li>
            </a>
          </ul>
        </div>
        <div id="page-content">
          <h1>Expandable Sidebar Menu Demo</h1>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
