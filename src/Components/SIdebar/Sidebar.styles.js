import styled, { css, keyframes } from "styled-components";

const displaceContent = keyframes`
 from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(250px);
  }
`;

export const Navbar2 = styled.div`
  background-color: #060b26;
  width: 100px;
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  &.active {
    background-color: #060b26;
    width: 100px;
    height: 100vh;
    display: flex;
    justify-content: start;
    align-items: center;

    animation-name: ${displaceContent};
    animation-duration: 10ms;

    animation-fill-mode: forwards;
  }
`;

export const NavMenu = styled.div`
  background-color: white;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;

  &.active {
    left: 0;
    transition: 10ms;
  }
`;

export const CircularImage = styled.img`
 
  justify-content: center;
  border-radius: 50%;
  width: 175px;
  height: 175px;
`;

export const SidebarNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--green);
  text-align: center;
`;

export const SidebarIcon = styled.div`
 justify-content: center;
 display: flex;
  align-items: center;
 
`

export const SidebarDes = styled.div`
  font-weight: 100;
  font-size: 1.5rem;
  text-align: center;
`;

export const TagsContainer = styled.div`
  justify-content: center;
  width: 100px;
  margin-right: 30px;
`;

export const ContentWrapper = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 80px;

`