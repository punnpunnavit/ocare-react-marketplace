import React from "react";
//components
import InsideNavbar from "../../Components/Sidebar/ShownNavbar";
import Button from "../../Components/Button";


//styles
import { Wrapper,TextWrapper,Header,TextDes,Description,MainHeader,SubMainHeader,StyledAnnulus } from "./ProductDetail.styles";

export default function productDetail() {
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
      <Wrapper >
      <StyledAnnulus />
        <div style={{position:"absolute"}}>
            <MainHeader>Product Name</MainHeader>
            <SubMainHeader>category</SubMainHeader>
      
            <img
              src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              style={{ width: "1000px", height: "300px" }}
            />
          
            {/* <Annulus /> */}
            <Button style={{ width: "50%", margin: "0 auto" }}>ddHey</Button>
            <Description>
            <TextWrapper>
              <div>
                <Header>Hey</Header>
                <TextDes>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  tempora aut eum labore saepe? Qui iure ducimus adipisci neque
                  veniam!
                </TextDes>
              </div>
            </TextWrapper>
                  </Description>
                  <p>Add your banking information</p>
        </div>
      </Wrapper>
    </div>
  );
}
