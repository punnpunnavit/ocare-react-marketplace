import styled, { css } from "styled-components";
import { Col, Row, Card } from "react-bootstrap";

export const Wrapper = styled(Row)`
  flex: 1;
  max-height: 100vh;
  height: 100%;
  max-width: 100vw;
  margin-left: 80px;
  margin-right: 60px;
  margin-top: 50px;
  overflow-y: scroll;
  overflow: visible;
  
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
  width: 220px;
  
  height: 150px;
  outline: 4px dashed rgba(168, 168, 168, 0.45);
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
