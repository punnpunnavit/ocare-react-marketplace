import styled, { css } from "styled-components";
import { Col, Row,Card } from "react-bootstrap";

export const Wrapper = styled(Row)`
  flex: 1;
  max-height: 100vh;
  height: 100%;
  max-width: 1000px;
  overflow-y: scroll;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const Header = styled.h1`
  font-size: 4rem;
  color: var(--purple);
  margin-right: auto;
`;

export const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
`;

export const Horizontal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ResponsiveCard = styled(Card)`



`