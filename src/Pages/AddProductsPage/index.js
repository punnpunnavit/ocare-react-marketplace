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
import {Container,Row} from 'react-bootstrap'

export default function AddProducts() {
  const fileRef = useRef();

  const productNameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef()

  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState();
  const [productName, setProductName] = useState([]);
  const [uploadImages, setUploadImages] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const confirmAdd = async () => {
    console.log("hi");

    const res = await AddProductsAPI.addProduct(
      productName,
      file,
      description,
      price,
      category
    );
  };

  //edited
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
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
      <InsideNavbar
      />
      <Wrapper>
        <div
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            overflowX: "hidden",
          }}
        ></div>
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
              marginLeft="370px"
            />
            <Button
              text="Confirm"
              width="9rem"
              height="3.75rem"
              fontSize="1.5rem"
              marginLeft="15px"
              onClick={confirmAdd}
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
              {selectedFiles && (
                <img
                  style={{
                    width: "200px",
                    maxHeight: "200px",
                    objectFit: "cover",
                  }}
                  src={selectedFiles[0]}
                  alt="Preview"
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
          <Horizontal>
            <div>
              <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>

                Product Name
                <SearchBar height="3.5rem" width="20rem">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control ref={productName}>
                
                    </SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>

              </div>
              <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>
                Category
                <SearchBar height="3.5rem" width="20rem">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
              <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>
                Price
                <SearchBar height="3.5rem" width="20rem">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>
                Product Description
                <SearchBar height="15.8rem" width="22rem">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: "10px" }}>
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
                  {selectedFiles && (
                    <img
                      style={{
                        width: "200px",
                        maxHeight: "200px",
                        objectFit: "cover",
                      }}
                      src={selectedFiles[1]}
                      alt="Preview"
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
                  {selectedFiles && (
                    <img
                      style={{
                        width: "200px",
                        maxHeight: "200px",
                        objectFit: "cover",
                      }}
                      src={selectedFiles[2]}
                      alt="Preview"
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
            </div>

            <div>
              <div style={{ marginBottom: "10px" }}>
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
                  {selectedFiles && (
                    <img
                      style={{
                        width: "200px",
                        maxHeight: "200px",
                        objectFit: "cover",
                      }}
                      src={selectedFiles[3]}
                      alt="Preview"
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
                  {selectedFiles && (
                    <img
                      style={{
                        width: "200px",
                        maxHeight: "200px",
                        objectFit: "cover",
                      }}
                      src={selectedFiles[4]}
                      alt="Preview"
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
            </div>
          </Horizontal>
       
      </Wrapper>
   </Row>
   </Container>
  );
}
