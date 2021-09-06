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

export default function EditProfile() {
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
        <Header>USER SETTING</Header>
        <div style={{ marginTop: "60px" }}>
          <Horizontal>
            <CircularImage
              src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              style={{
                display: "flex",
                width: "300px",
                height: "300px",
              }}
            />
            <BsFillPlusCircleFill style={{fontSize:"3rem",color:"var(--green)",marginLeft:"-80px",marginTop:"240px",backgroundColor:"white",borderRadius:"50%"}}/>
            <div style={{ marginLeft: "60px", fontSize: "2.5rem" }}>
              Basic Information
              <Horizontal>
                <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>
                  Firstname
                  <SearchBar height="2.5rem" width="20rem">
                    <SearchBar.Group id="email" className="text-center">
                      <SearchBar.Control></SearchBar.Control>
                    </SearchBar.Group>
                  </SearchBar>
                </div>
                <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>
                  Lastname
                  <SearchBar height="2.5rem" width="18rem">
                    <SearchBar.Group id="email" className="text-center">
                      <SearchBar.Control></SearchBar.Control>
                    </SearchBar.Group>
                  </SearchBar>
                </div>
              </Horizontal>
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
            </div>
          </Horizontal>
        </div>
      </Wrapper>
    </div>
  );
}
