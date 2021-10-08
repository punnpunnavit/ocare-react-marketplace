import React from "react";
import { useState, useEffect } from "react";
//components
import InsideNavbar from "../../Components/Sidebar/ShownNavbar";
import Button from "../../Components/Button";
import GreyAnnulus from "../../Components/GreyAnnulus";
import { useParams } from "react-router-dom";
import Modal from "../../Components/Modal";
//styles
import useProductDetailsFetch from "../../Hooks/useProductDetailsFetch";
import {
  Wrapper,
  TextWrapper,
  Header,
  TextDes,
  Description,
  MainHeader,
  SubMainHeader,
  StyledAnnulus,
  SubImg,
  Horizontal,
  LeftContentWrapper,
} from "./ProductDetail.styles";
import fallBackImg from "../../Assets/Images/test1.jpg";
import { Container, Row, Col } from "react-bootstrap";

export default function ProductDetail() {
  const { id } = useParams();
  const { loading, error, products } = useProductDetailsFetch(id);

  const [openModal, setOpenModal] = useState(false);
  const imgs = products.productImg;

  useEffect(() => {
    console.log(products.productImg);
  });
  return (
    // hereeeeeee
    <Container
      style={{ margin: "0 0 0 0", maxWidth: "100vw", overflow: "hidden" }}
    >
      <Row
        style={{
          maxHeight: "100vh",
          height: "100%",
          minWidth: "100vw",
          width: "100%",
          display: "flex",
        }}
      >
        <InsideNavbar />
        <Wrapper>
          {openModal && (
            <Modal
              closeModal={setOpenModal}
              productName={products.productName}
              productImage={products.productMainImage}
              productDes={products.productDes}
            />
          )}
          <StyledAnnulus />
          <Row style={{ display: "flex" }}>
            <MainHeader>{products.productName}</MainHeader>
            <SubMainHeader>{products.productCategory}</SubMainHeader>

            <img
              src={products.productMainImage}
              alt=""
              style={{
                maxWidth: "1200px",
                width: "100%",
                height: "300px",
                zIndex: "10",
              }}
            />

            <Col
              lg={3}
              style={{
                marginTop: "10px",
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Row>
                <Button
                  style={{ width: "5rem" }}
                  text={products.productPrice + " THB"}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                />
              </Row>
              <Row>
                <p style={{}}>Add your banking information</p>
              </Row>
            </Col>
            <Col style={{ marginTop: "10px" }}>
              <Row>
                <Col>
                  <Description>
                    <TextWrapper>
                      <div>
                        <Header>{products.productName}</Header>
                        <TextDes>{products.productDes}</TextDes>
                      </div>
                    </TextWrapper>
                  </Description>
                </Col>
                <Col>
                  <Row>
                    <SubImg
                      src={products.productImg && products.productImg[0]}
                      alt=""
                    />
                    <SubImg
                      src={products.productImg && products.productImg[1]}
                      alt=""
                    />
                  </Row>
                  <Row>
                    <SubImg
                      src={products.productImg && products.productImg[2]}
                      alt=""
                    />
                    <SubImg
                      src={products.productImg && products.productImg[3]}
                      alt=""
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* <Row>
            <Col
            >
              <Button
                style={{ width: "5rem" }}
                text={products.productPrice + " THB"}
                onClick={() => {
                  setOpenModal(true);
                }}
              />

              <p style={{ marginTop: "10px", justifyContent: "center" }}>
                Add your banking information
              </p>
            </Col>

            <Row
              style={{ justifyContent: "flex-end", alignItems: "center" }}
            >
              <Col style={{marginRight:"0",paddingRight:"0"}}>
                <Description>
                  <TextWrapper>
                    <div>
                      <Header>{products.productName}</Header>
                      <TextDes>{products.productDes}</TextDes>
                    </div>
                  </TextWrapper>
                </Description>
              </Col>
                  <Col>
                    <Row>
                      <SubImg
                        src={products.productImg && products.productImg[0]}
                        alt=""
                      />
                      <SubImg
                        src={products.productImg && products.productImg[1]}
                        alt=""
                      />
                    </Row>
                    <Row>
                      <SubImg
                        src={products.productImg && products.productImg[2]}
                        alt=""
                      />
                      <SubImg
                        src={products.productImg && products.productImg[3]}
                        alt=""
                      />
                    </Row>
                  </Col>
            </Row>
          </Row> */}
        </Wrapper>
      </Row>
    </Container>
  );
}
