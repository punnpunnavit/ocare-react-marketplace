import styled, { css } from "styled-components";
import breakpoint from "../../Helpers/Breakpoints";
import { Col, Row, Card } from "react-bootstrap";

export const Wrapper = styled(Row)`
  flex: 1;
  max-height: 100vh;
  height: 100%;
  max-width: 90vw;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 50px;
`;

export const Header = styled.h1`
  font-size: 3.5rem;
  color: var(--purple);
  white-space: nowrap;

  @media ${breakpoint.device.md} {
    font-size: 2.5rem;
  }
`;

export const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0;
`;

export const UploadImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 0;
  padding-right: 0;
  height: 160px;
  outline: ${props => props.active === false && '4px dashed rgba(168, 168, 168, 0.45)'};
  outline-offset: -20px;
  background-color: rgba(168, 168, 168, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FeedWrapper = styled.div``;

export const Horizontal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
  margin-top: 10px;
`;
