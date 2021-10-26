import React, { useState, useEffect, useRef } from "react";
import InsideNavbar from "../../Components/Sidebar/ShownNavbar";
import AddProductsAPI from "../../Services/APIs/AddProducts";

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
import { StyledTextArea } from "../../Components/TextArea/TextArea.styles";
import { Form, FloatingLabel, Col, Row, Container } from "react-bootstrap";

export default function AddProducts() {
  const fileRef = useRef();

  const productNameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [firstAdded, setFirstAdded] = useState(false);
  const [secondAdded, setSecondAdded] = useState(false);
  const [thirdAdded, setThirdAdded] = useState(false);
  const [forthAdded, setForthAdded] = useState(false);
  const [fifthAdded, setFifthAdded] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const confirmAdd = async () => {
    const res = await AddProductsAPI.addProduct(
      productNameRef.current.value,
      selectedFiles,
      descriptionRef.current.value,
      priceRef.current.value,
      categoryRef.current.value
    );
  };

  //edited

  const handleImageChange = (e) => {
    console.log(e.target.files);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  useEffect(() => {
    console.log(selectedFiles);
    // console.log(productNameRef.current.value)
  }, [selectedFiles]);
  return (
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
          <Row>
            <Col>
              <Header>ADD PRODUCT</Header>
            </Col>
            <Button
              marginRight="0"
              text="Cancel"
              width="8rem"
              height="3rem"
              fontSize="1.25rem"
              fontColor="black"
              bgColor="rgba(168, 168, 168, 0.25)"
              fontWeight="100"
            />
            <Button
              marginRight="0"
              text="Confirm"
              width="8rem"
              height="3rem"
              fontSize="1.25rem"
              onClick={confirmAdd}
            />
          </Row>
          <Row>
            <UploadImageWrapper
              style={{
                width: "100%",
                height: "250px",
              }}
              onClick={() => {
                fileRef.current.click();
                setFirstAdded(true);
              }}
              active={firstAdded}
            >
              {!firstAdded && (
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
              )}
              {firstAdded && (
                <img
                  style={{
                    minWidth: "100%",
                    minHeight: "100%",
                    objectFit: "cover",
                  }}
                  src={selectedFiles[0]}
                />
              )}
            </UploadImageWrapper>
            <input
              onChange={handleImageChange}
              style={{ display: "none" }}
              ref={fileRef}
              type="file"
              accept=".jpg,.jpeg,.png"
            />
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col>
              <div style={{ fontWeight: "100", fontSize: "1.5rem" }}>
                Product Name
                <SearchBar height="2.5rem" width="18rem">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control ref={productNameRef}></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
              <div style={{ fontWeight: "100", fontSize: "1.5rem" }}>
                Category
                <SearchBar height="2.5rem" width="18rem">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control ref={categoryRef}></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
              <div style={{ fontWeight: "100", fontSize: "1.5rem" }}>
                Price
                <SearchBar height="2.5rem" width="18rem">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control ref={priceRef}></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  fontWeight: "100",
                  fontSize: "1.5rem",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                Product Description
                <StyledTextArea
                  controlId="floatingTextarea2"
                  style={{ height: "100%" }}
                >
                  <Form.Control
                    as="textarea"
                    style={{ height: "100%" }}
                    ref={descriptionRef}
                  />
                </StyledTextArea>
              </div>
            </Col>
            <Col
              style={{
                marginRight: "0",
                paddingRight: "10px",
                marginLeft: "10px",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <UploadImageWrapper
                  onClick={() => {
                    fileRef.current.click();
                    setSecondAdded(true);
                  }}
                  active={secondAdded}
                >
                  {!firstAdded && (
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
                  )}
                  {selectedFiles && (
                    <img
                      style={{
                        maxWidth: "100%",
                        minHeight: "100%",
                        objectFit: "cover",
                      }}
                      src={selectedFiles[1]}
                    />
                  )}
                </UploadImageWrapper>
                <input
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  ref={fileRef}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                />
              </div>{" "}
              <div style={{ marginTop: "10px" }}>
                <UploadImageWrapper
                  onClick={() => {
                    fileRef.current.click();
                    setThirdAdded(true);
                  }}
                  active={thirdAdded}
                >
                  {thirdAdded}
                  {!firstAdded && (
                    <div style={{ width: "100px" }}>
                      <div
                        style={{
                          fontSize: "15px",
                          color: "rgba(168, 168, 168, 1)",
                        }}
                      >
                        Upload your image heref
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
                  )}
                  {selectedFiles && (
                    <img
                      style={{
                        maxWidth: "100%",
                        minHeight: "100%",
                        objectFit: "cover",
                      }}
                      src={selectedFiles[2]}
                    />
                  )}
                </UploadImageWrapper>
                <input
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  ref={fileRef}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                />
              </div>{" "}
            </Col>

            <Col>
              <div style={{ marginTop: "10px" }}>
                <UploadImageWrapper
                  onClick={() => {
                    fileRef.current.click();
                    setForthAdded(true);
                  }}
                  active={forthAdded}
                >
                  {!firstAdded && (
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
                  )}
                  {selectedFiles && (
                    <img
                      style={{
                        maxWidth: "100%",
                        minHeight: "100%",
                        objectFit: "cover",
                      }}
                      src={selectedFiles[3]}
                    />
                  )}
                </UploadImageWrapper>
                <input
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  ref={fileRef}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                />
              </div>{" "}
              <div style={{ marginTop: "10px" }}>
                <UploadImageWrapper
                  onClick={() => {
                    fileRef.current.click();
                    setFifthAdded(true);
                  }}
                  active={fifthAdded}
                >
                  {!firstAdded && (
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
                  )}
                  {selectedFiles && (
                    <img
                      style={{
                        maxWidth: "100%",
                        minHeight: "100%",
                        objectFit: "cover",
                      }}
                      src={selectedFiles[4]}
                    />
                  )}
                </UploadImageWrapper>
                <input
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  ref={fileRef}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                />
              </div>
            </Col>
          </Row>
        </Wrapper>
      </Row>
    </Container>
  );
}
