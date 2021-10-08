import styled, { css } from "styled-components";
import { Container, Col, Row, Button } from "react-bootstrap";

export const ModalBackground = styled(Col)`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
`;

export const ModalButton = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: transparent;
  color: black;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  text-align: right;
  align-self: flex-end;
  padding: 0 0 0 0;
  box-shadow: none;

  &:hover {
    background-color: transparent;
    color: black;
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }
`;

export const ModalContainer = styled(Container)`
  width: 650px;
  height: 650px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const Title = styled(Col)`
  display: inline-block;
  text-align: left;
  margin-top: 10px;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

export const Body = styled(Col)`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`;

export const Footer = styled(Col)`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
