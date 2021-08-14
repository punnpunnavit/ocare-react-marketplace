import styled, { css } from "styled-components";

export const Content = styled.div`
  body {
    font-family: sans-serif;
  }

  #menu_active {
    position: absolute;
  }

  #wrapper {
    padding-left: 200px;
    transition: all 1s;
  }

  #menu_active:checked + #wrapper {
    padding-left: 44px;
    transition: all 1s;
  }

  #menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #1f1f1f;
    transition: all 1s;
  }

  #menu_active:checked + #wrapper #menu {
    left: -160px;
    transition: all 1s;
  }

  #menu_active:checked + #wrapper .fa-bars,
  #wrapper i.fa-arrow-left {
    display: block;
  }

  #menu_active:checked + #wrapper .fa-arrow-left,
  #wrapper i.fa-bars {
    display: none;
  }

  #menu i {
    width: 40px;
    text-align: center;
  }

  #site-name {
    color: white;
    display: block;
    padding: 10px;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 50px;
    padding-right: 0px;
  }

  #site-name i {
    float: right;
  }

  #site-name label {
    color: white;
    font-size: 30px;
  }

  #menu ul {
    padding: 0;
  }

  #menu ul li {
    color: white;
    list-style: none;
    padding: 10px;
    border-left: 4px solid transparent;
    padding-right: 0px;
  }

  #menu ul li:hover {
    color: #d32a4a;
    border-left: 4px solid #d32a4a;
  }

  #menu ul li i {
    float: right;
    font-size: 24px;
  }

  #menu ul a {
    text-decoration: none;
    color: white;
    display: block;
    height: 100%;
  }
`;
