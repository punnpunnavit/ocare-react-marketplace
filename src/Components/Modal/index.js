import React from "react";
import {
  ModalBackground,
  ModalButton,
  ModalContainer,
  Title,
  ModalImage,
  Body,
  Footer,
} from "./Modal.styles";
import { Col, Row, Card } from "react-bootstrap";

function Modal({ closeModal, productName, productImage, productDes, qrCode }) {
  return (
    <ModalBackground>
      <ModalContainer>
        <Row>
          <Title
            style={{
              fontSize: "3rem",
              selfAlign: "flex-start",
              fonwWeight: "400",
              color: "var(--purple)",
            }}
          >
            {productName}
          </Title>
          <ModalButton
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </ModalButton>
        </Row>
        <Body>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <ModalImage src={productImage} />
            <Card style={{ width: "96%" ,backgroundColor:" rgba(168, 168, 168, 0.25)"}}>
              <Card.Body style={{ textAlign: "left" }}>
                <Card.Title style={{color: "var(--purple)"}}>Feature</Card.Title>
                <Card.Text>{productDes}</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Body>
        <Footer>
          <h1>Shop Now!</h1>
          <p>QR CODE BE HERE</p>
        </Footer>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
