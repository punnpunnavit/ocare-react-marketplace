import React from "react";
//components
import InsideNavbar from "../../Components/Sidebar/ShownNavbar";
import Button from "../../Components/Button";
import GreyAnnulus from "../../Components/GreyAnnulus";
import { useParams } from "react-router-dom";
import Modal from '../../Components/Modal'
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

export default function ProductDetail() {
  const { id } = useParams();
  const {
    loading,
    error,
    productsName,
    productsMainImg,
    productsImg,
    productsDes,
    productsPrice,
    productsCategory,
  } = useProductDetailsFetch(id);

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
        <Modal/>
        <StyledAnnulus />
        <GreyAnnulus />
        <div style={{ position: "absolute" }}>
          <MainHeader>{productsName}</MainHeader>
          <SubMainHeader>{productsCategory}</SubMainHeader>

          <img
            src={productsMainImg}
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
              <Button style={{ width: "50%" }} text={productsPrice + " THB"} />

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
                    <Header>{productsName}</Header>
                    <TextDes>
                      {productsDes}
                    </TextDes>
                  </div>
                </TextWrapper>
              </Description>
              <div>
                <Horizontal>
                  <SubImg src={productsImg[0]}/>
                  <SubImg src={productsImg[1]}/>
                </Horizontal>
                <Horizontal>
                  <SubImg src={productsImg[2]} />
                  <SubImg src={productsImg[3]} />
                </Horizontal>
              </div>
            </Horizontal>
          </Horizontal>
        </div>
      </Wrapper>
    </div>
  );
}
