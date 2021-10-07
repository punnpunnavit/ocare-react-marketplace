import styled, { css, keyframes } from "styled-components";
import { Col, Row } from "react-bootstrap";
import breakpoint from "../../Helpers/Breakpoints";

export const CircularImage = styled.img`
  border-radius: 50%;
  display: flex;
  width: 300px;
  height: 300px;
  margin-top: 40px;
  @media ${breakpoint.device.md} {
    width: 250px;
    height: 250px;
  }
`;

export const Header = styled(Row)`
  display: "flex";
  font-size: 2.5rem;
  justify-content: center;
  @media ${breakpoint.device.md} {
    font-size: 2rem;
  }
`;

export const SidebarNumber = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--green);
  text-align: center;
  order: 0;
  @media ${breakpoint.device.md} {
    flex-direction: row;
    order: 1;
  }
`;

export const SidebarIcon = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const SidebarDes = styled.div`
  font-weight: 100;
  font-size: 1.5rem;
  text-align: center;
  @media ${breakpoint.device.md} {
    font-size: 1.25rem;
  }
`;

export const TagsContainer = styled.div`
  width: 100px;
  margin-right: 30px;
  background-color: black;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-bottom: 30px;
  padding: 0 0 0 0;
  flex-direction: row;
  white-space: nowrap;

  @media ${breakpoint.device.md} {
    flex-direction: column;
    margin-bottom: 5px;
  }
`;

export const NumericWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${breakpoint.device.md} {
    flex-direction: row;
  }
`;

export const VisualWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  @media ${breakpoint.device.md} {
    flex-direction: column;
    align-items: center;
  }
`;

const displaceContent = (start, end) => keyframes`
  0%{
    transform: translateX(${start});
  }
  100%{
    transform: translateX(${end});
  }
`;

export const NavbarShown = styled(Col)`
  background-image: linear-gradient(var(--green), var(--blue));
  opacity: 0.98;
  max-width: 100px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  ${({ active }) =>
    active &&
    css`
      width: 100px;
      height: 100vh;
      z-index: 100;
      animation-name: ${displaceContent("0px", "500px")};
      animation-duration: 1ms;
      animation-fill-mode: forwards;
      @media ${breakpoint.device.md} {
        max-width: 50px;
        animation-name: ${displaceContent("0px", "300px")};
        animation-duration: 1ms;
        animation-fill-mode: forwards;
      }
    `}

  @media  ${breakpoint.device.md} {
    max-width: 50px;
  }
`;

export const NavMenu = styled(Col)`
  max-width: 500px;
  display: none;
  justify-content: center;
  ${({ active }) =>
    active &&
    css`
      height: 100vh;
      display: flex;
      margin: 0;
      padding: 0;
      z-index: 100;
      background-color: white;
      position: absolute;
      @media ${breakpoint.device.md} {
        max-width: 300px;
      }
    `}
`;
