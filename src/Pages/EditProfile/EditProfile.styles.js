import styled, { css } from "styled-components";
import { Container, Row, Col, Form } from "react-bootstrap";
import breakpoint from "../../Helpers/Breakpoints";

export const Wrapper = styled(Row)`
  flex: 1;
  max-height: 100vh;
  height: 100%;
  max-width: 90vw;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
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
  background-color: gray;
  @media ${breakpoint.device.md} {
    width: 100px;
    height: 100px;
  }
`;

export const InstructionWrapper = styled(Col)`
  font-size: 2.5rem;
  @media ${breakpoint.device.md} {
    font-size: 2rem;
  }
`;

export const SearchBar = styled(Form)`
  .form-control {
    background-color: rgba(168, 168, 168, 0.25);
    border: none;
    box-shadow: none;
    height: 2.5rem;
    max-width: 300px;
    width: 100%;
    @media ${breakpoint.device.md} {
      display: block;
    }
    &::placeholder {
      color: rgba(168, 168, 168, 0.8);
      font-weight: 100;
    }
  }
`;
