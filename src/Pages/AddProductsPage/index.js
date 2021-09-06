import React, { useState, useEffect, useRef } from "react";
import InsideNavbar from "../../Components/Sidebar/ShownNavbar";
import {
  Wrapper,
  Header,
  SearchbarWrapper,
  HeaderWrapper,
  UploadImageWrapper,
  Horizontal,
} from "./AddProducts.styles";
import Button from "../../Components/Button";
import { SearchBar } from "../../Components/SearchBar/SearchBar.styles";
import { RiFileLine } from "react-icons/ri";

export default function AddProducts() {
  const fileRef = useRef();

  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState();

  const pickImageHandler = (event) => {
    if (event.target.files && event.target.files.length === 1) {
      setFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFileUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

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
        <div
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: "50px",
            }}
          >
            <Header>ADD PRODUCT</Header>
            <Button
              style={{ width: "50%" }}
              text="Cancel"
              width="9rem"
              height="3.75rem"
              fontSize="1.5rem"
              fontColor="black"
              bgColor="rgba(168, 168, 168, 0.25)"
              fontWeight="100"
            />
            <Button
              text="Confirm"
              width="9rem"
              height="3.75rem"
              fontSize="1.5rem"
              marginLeft="30px"
              marginRight="10px"
            />
          </div>
          <div>
            <UploadImageWrapper
              style={{
                width: "100%",
              }}
              onClick={() => {
                fileRef.current.click();
              }}
            >
              <div style={{ width: "100px" }}>
                <div
                  style={{ fontSize: "15px", color: "rgba(168, 168, 168, 1)" }}
                >
                  Upload your image here
                </div>
                <div>
                  <RiFileLine
                    style={{
                      fontSize: "25px",
                      color: "rgba(168, 168, 168, 1)",
                    }}
                  />
                </div>
              </div>
              {fileUrl && (
                <img
                  style={{
                    width: "200px",
                    maxHeight: "200px",
                    objectFit: "cover",
                  }}
                  src={fileUrl}
                  alt="Preview"
                />
              )}
            </UploadImageWrapper>
            <input
              onChange={pickImageHandler}
              style={{ display: "none" }}
              ref={fileRef}
              type="file"
              accept=".jpg,.jpeg,.png"
            />
          </div>
          <Horizontal>
            <div>
              <div>
                Product Name
                <SearchBar>
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
              <div>
                Category
                <SearchBar>
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
              <div>
                Price
                <SearchBar>
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
            </div>
            <div>
              <div>
                <UploadImageWrapper
                  onClick={() => {
                    fileRef.current.click();
                  }}
                >
                  <div style={{ width: "100px" }}>
                    <div
                      style={{
                        fontSize: "15px",
                        color: "rgba(168, 168, 168, 1)",
                      }}
                    >
                      Upload your image here
                    </div>
                    <div>
                      <RiFileLine
                        style={{
                          fontSize: "25px",
                          color: "rgba(168, 168, 168, 1)",
                        }}
                      />
                    </div>
                  </div>
                  {fileUrl && (
                    <img
                      style={{
                        width: "200px",
                        maxHeight: "200px",
                        objectFit: "cover",
                      }}
                      src={fileUrl}
                      alt="Preview"
                    />
                  )}
                </UploadImageWrapper>
                <input
                  onChange={pickImageHandler}
                  style={{ display: "none" }}
                  ref={fileRef}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                />
              </div>{" "}
            </div>
            <div>
              <div>
                <UploadImageWrapper
                  onClick={() => {
                    fileRef.current.click();
                  }}
                >
                  <div style={{ width: "100px" }}>
                    <div
                      style={{
                        fontSize: "15px",
                        color: "rgba(168, 168, 168, 1)",
                      }}
                    >
                      Upload your image here
                    </div>
                    <div>
                      <RiFileLine
                        style={{
                          fontSize: "25px",
                          color: "rgba(168, 168, 168, 1)",
                        }}
                      />
                    </div>
                  </div>
                  {fileUrl && (
                    <img
                      style={{
                        width: "200px",
                        maxHeight: "200px",
                        objectFit: "cover",
                      }}
                      src={fileUrl}
                      alt="Preview"
                    />
                  )}
                </UploadImageWrapper>
                <input
                  onChange={pickImageHandler}
                  style={{ display: "none" }}
                  ref={fileRef}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                />
              </div>{" "}
              <div>
                <UploadImageWrapper
                  onClick={() => {
                    fileRef.current.click();
                  }}
                >
                  <div style={{ width: "100px" }}>
                    <div
                      style={{
                        fontSize: "15px",
                        color: "rgba(168, 168, 168, 1)",
                      }}
                    >
                      Upload your image here
                    </div>
                    <div>
                      <RiFileLine
                        style={{
                          fontSize: "25px",
                          color: "rgba(168, 168, 168, 1)",
                        }}
                      />
                    </div>
                  </div>
                  {fileUrl && (
                    <img
                      style={{
                        width: "200px",
                        maxHeight: "200px",
                        objectFit: "cover",
                      }}
                      src={fileUrl}
                      alt="Preview"
                    />
                  )}
                </UploadImageWrapper>
                <input
                  onChange={pickImageHandler}
                  style={{ display: "none" }}
                  ref={fileRef}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                />
              </div>
            </div>
          </Horizontal>
        </div>
      </Wrapper>
    </div>
  );
}
