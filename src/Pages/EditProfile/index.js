import React from "react";
import InsideNavbar from "../../Components/Sidebar/ShownNavbar";
import {
  Header,
  Horizontal,
  CircularImage,
  Wrapper,
} from "./EditProfile.styles";
import { SearchBar } from "../../Components/SearchBar/SearchBar.styles";
import Button from "../../Components/Button";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";

export default function EditProfile() {
  return (
    <Container style={{ margin: "0 0 0 0" }}>
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
          <Header>USER SETTING</Header>
          <Row>
            <Col>
              <CircularImage
                src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                style={{
                  display: "flex",
                  width: "300px",
                  height: "300px",
                }}
              />
            </Col>
            <Col>
              <BsFillPlusCircleFill
                style={{
                  fontSize: "3rem",
                  color: "var(--green)",
                  marginLeft: "-80px",
                  marginTop: "250px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  position: "absolute",
                }}
              />
            </Col>
            <Col style={{ fontSize: "2.5rem" }}>
              Basic Information
              <Row
                style={{
                  margin: "0 0 0 0",
                  fontWeight: "100",
                  fontSize: "1.75rem",
                }}
              >
                <Col>
                  Firstname
                  <SearchBar height="2.5rem" width="300px">
                    <SearchBar.Group id="email" className="text-center">
                      <SearchBar.Control></SearchBar.Control>
                    </SearchBar.Group>
                  </SearchBar>
                </Col>
                <Col>
                  Lastname
                  <SearchBar height="2.5rem" width="100%">
                    <SearchBar.Group id="email" className="text-center">
                      <SearchBar.Control></SearchBar.Control>
                    </SearchBar.Group>
                  </SearchBar>
                </Col>
              </Row>
              <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>
                Display Name
                <SearchBar height="2.5rem" width="100%">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
              <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>
                Telephone Number
                <SearchBar height="2.5rem" width="100%">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
              <Horizontal
                style={{ justifyContent: "flex-end", marginTop: "40px" }}
              >
                <Button
                  style={{ width: "50%" }}
                  text="Cancel"
                  width="9rem"
                  height="3.75rem"
                  fontSize="1.5rem"
                  fontColor="black"
                  bgColor="rgba(168, 168, 168, 0.25)"
                  fontWeight="100"
                  marginLeft="370px"
                />
                <Button
                  text="Confirm"
                  width="9rem"
                  height="3.75rem"
                  fontSize="1.5rem"
                  marginLeft="15px"
                />
              </Horizontal>
            </Col>
          </Row>
        </Wrapper>
      </Row>
    </Container>
  );
}
