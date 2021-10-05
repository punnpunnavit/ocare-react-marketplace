import React, { useState } from "react";
import ContextProvider from "../../Context/SidebarContext";
import {
  CircularImage,
  SidebarDes,
  SidebarIcon,
  SidebarNumber,
  TagsContainer,
  ContentWrapper,
  NavMenu,
} from "./Sidebar.styles";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineCursorClick } from "react-icons/hi";
import { ImQrcode } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";
import {Row,Col,Container} from 'react-bootstrap'
import {TiShoppingCart} from 'react-icons/ti'

function OuterNavBar({ onClick }) {
  return (
    <ContextProvider.Consumer>
      {(sidebar) => (
        <NavMenu active={sidebar}>
          {/* <IoSettingsSharp
            style={{
              display: "flex",
              fontSize: "2.5rem",
              color: "var(--green)",
              marginRight: "10px",
            }}
          /> */}
          <Container>
            <Row style={{display:"flex",justifyContent:"center",padding:"0 0 0 0"}}>
              <CircularImage
                src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                style={{
                  display: "flex",
                  width: "300px",
                  height: "300px",
                  marginTop:"40px"
                }}
              />
              <Row
                style={{
                  display: "flex",
                  fontSize: "2.5rem",
                  justifyContent: "center",
                }}
              >
                James
              </Row>
              <ContentWrapper>
                <Col>
                  <SidebarNumber>08</SidebarNumber>
                  <SidebarIcon>
                    <TiShoppingCart
                      style={{
                        fontSize: "4rem",
                        color: "var(--purple)",
                      }}
                    />
                  </SidebarIcon>
                  <SidebarDes>Products</SidebarDes>
                </Col>
                <Col>
                  <SidebarNumber>69</SidebarNumber>
                  <SidebarIcon>
                    <AiOutlineEye
                      style={{
                        fontSize: "4rem",
                        color: "var(--purple)",
                      }}
                    />
                  </SidebarIcon>
                  <SidebarDes>Products Seen</SidebarDes>
                </Col>
                <Col>
                  <SidebarNumber>80</SidebarNumber>
                  <SidebarIcon>
                    <HiOutlineCursorClick
                      style={{ fontSize: "4rem", color: "var(--purple)" }}
                    />
                  </SidebarIcon>
                  <SidebarDes>Products CTR</SidebarDes>
                </Col>
                <Col>
                  <SidebarNumber>90</SidebarNumber>
                  <SidebarIcon>
                    <ImQrcode
                      style={{ fontSize: "4rem", color: "var(--purple)" }}
                    />
                  </SidebarIcon>
                  <SidebarDes>QR browse</SidebarDes>
                </Col>
              </ContentWrapper>
              <p style={{ display: "flex", justifyContent: "center" }}>Payment</p>
            </Row>
          </Container>
        </NavMenu>
      )}
    </ContextProvider.Consumer>
  );
}

export default OuterNavBar;
