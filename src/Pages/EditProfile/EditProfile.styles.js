import styled, { css } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const Wrapper = styled(Row)`
  flex: 1;
  max-height: 100vh;
  height: 100%;
  max-width: 100vw;
  overflow-y: scroll;
  margin-top: 70px;
  margin-left: 50px;
  overflow: visible;
  margin-right: 50px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Header = styled.h1`
  font-size: 4rem;
  color: var(--purple);
`;

export const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0;
`;

export const FeedWrapper = styled.div``;
export const Horizontal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const CircularImage = styled.img`
  justify-content: center;
  border-radius: 90%;
  width: 175px;
  height: 175px;
`;
