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

export default function ProductDetail() {
  const { id } = useParams();
  const { loading, error, products } = useProductDetailsFetch(id);

  const [openModal, setOpenModal] = useState(false);
  const imgs = products.productImg

  useEffect(()=>{
    console.log(products.productImg)
  })
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <InsideNavbar
        style={{ position: "-webkit-sticky", position: "sticky", top: "0" }}
      />
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
        <GreyAnnulus />
        <div style={{ position: "absolute" }}>
          <MainHeader>{products.productName}</MainHeader>
          <SubMainHeader>{products.productCategory}</SubMainHeader>

          <img
            src={products.productMainImage}
            alt=""
            style={{ width: "1000px", height: "300px" }}
          />

          <Horizontal>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Button
                style={{ width: "50%" }}
                text={products.productPrice + " THB"}
                onClick={() => {
                  setOpenModal(true);
                }}
              />

              <p style={{ marginTop: "52px", justifyContent: "center" }}>
                Add your banking information
              </p>
            </div>

            <Horizontal
              style={{ justifyContent: "flex-end", alignItems: "center" }}
            >
              <Description>
                <TextWrapper>
                  <div>
                    <Header>{products.productName}</Header>
                    <TextDes>{products.productDes}</TextDes>
                  </div>
                </TextWrapper>
              </Description>
              <div>
                {/* <Horizontal>
                  <SubImg src={products.productImg[0]} alt="" />
                  <SubImg src={products.productImg[1]} alt="" />
                </Horizontal>
                <Horizontal>
                  <SubImg src={products.productImg[2]} alt="" />
                  <SubImg src={products.productImg[3]} alt="" />
                </Horizontal> */}
              </div>
            </Horizontal>
          </Horizontal>
        </div>
      </Wrapper>
    </div>
  );
}
