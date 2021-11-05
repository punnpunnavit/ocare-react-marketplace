import React from "react";
import InsideNavbar from "../../Components/Sidebar/ShownNavbar";
import {
  Header,
  Horizontal,
  CircularImage,
  Wrapper,
  InstructionWrapper,
  SearchBar,
  AddIcon,
} from "./EditProfile.styles";
import Button from "../../Components/Button";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import EditProfileAPI from "../../Services/APIs/UpdateProfile";
import grayImage from '../../Assets/Images/gray.png'

export default function EditProfile() {
  const [userData, setUserData] = useState([]);
  const [file, setFile] = useState();
  const [uploadFile, setUploadFile] = useState([]);
  const firstName = useRef();
  const lastName = useRef();
  const displayName = useRef();
  const tel = useRef();
  const fileRef = useRef();

  //edited

  const handleImageChange = (e) => {
    setFile(e.target.files);
  };

  const fileHandler = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setUploadFile([e.target.files[0]]);
    console.log(file);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const currentProfile = await EditProfileAPI.getCurrentProfile();

    setUserData(currentProfile);
    setFile(currentProfile?.imageUser);
    console.log("hereee");
    console.log(currentProfile?.firstName);
    console.log("hereee");
  };

  const submit = async () => {
    console.log("hi");
    const res = await EditProfileAPI.updateProfile(
      displayName.current.value != ""
        ? displayName.current.value
        : userData.displayName,
      firstName.current.value != ""
        ? firstName.current.value
        : userData.firstName,
      lastName.current.value != "" ? lastName.current.value : userData.lastName,
      tel.current.value != "" ? tel.current.value : userData.tel,
      uploadFile != "" ? uploadFile : file
    );
    setUserData([]);
  };

  return (
    <Container style={{ margin: "0 0 0 0", maxWidth: "100vw" }}>
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
            <Col style={{}}>
              <CircularImage
                onClick={() => {
                  fileRef.current.click();
                }}
                src={file != undefined ? file : grayImage}
              ></CircularImage>
              <input
                type="file"
                onChange={fileHandler}
                style={{ visibility: "hidden" }}
                ref={fileRef}
              />
              <AddIcon />
            </Col>

            <InstructionWrapper>
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
                      <SearchBar.Control
                        placeholder={userData?.firstName}
                        ref={firstName}
                      ></SearchBar.Control>
                    </SearchBar.Group>
                  </SearchBar>
                </Col>
                <Col>
                  Lastname
                  <SearchBar height="2.5rem" width="100%">
                    <SearchBar.Group id="email" className="text-center">
                      <SearchBar.Control
                        placeholder={userData?.lastName}
                        ref={lastName}
                      ></SearchBar.Control>
                    </SearchBar.Group>
                  </SearchBar>
                </Col>
              </Row>
              <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>
                Display Name
                <SearchBar height="2.5rem" width="100%">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control
                      placeholder={userData?.displayName}
                      ref={displayName}
                    ></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
              <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>
                Telephone Number
                <SearchBar>
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control
                      placeholder={userData?.tel}
                      ref={tel}
                    ></SearchBar.Control>
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
                  onClick={submit}
                />
              </Horizontal>
            </InstructionWrapper>
          </Row>
        </Wrapper>
      </Row>
    </Container>
  );
}
