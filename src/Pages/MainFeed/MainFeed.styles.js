import styled, { css } from "styled-components";
import { Col, Row, Card, Form } from "react-bootstrap";
import breakpoint from "../../Helpers/Breakpoints";

export const StyledSearchBar = styled(Form)`
  .form-control {
    background-color: rgba(168, 168, 168, 0.25);
    border: none;
    width: ${(props) => props.width || "13rem"};
    height: ${(props) => props.height || "2rem"};
    margin-left: ${(props) => props.marginLeft || "0rem"};
    margin-right: ${(props) => props.marginRight || "0rem"};
    margin-top: ${(props) => props.marginTop || "0rem"};
    margin-bottom: ${(props) => props.marginBottom || "0rem"};

    @media ${breakpoint.device.md} {
      display: block;
      margin-left: 0;
      margin-right: 0;
    }

    box-shadow: none;
    &::placeholder {
      color: rgba(168, 168, 168, 0.8);
      font-weight: 100;
    }
  }
`;

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

  @media ${breakpoint.device.md} {
    flex-direction: column;
  }
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

export const ResponsiveCard = styled(Card)``;
