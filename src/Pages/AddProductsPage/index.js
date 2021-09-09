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
import useProductsAdd from "../../Hooks/useProductsAdd";
import image1 from "../../Assets/Images/test1.jpg";
import image2 from "../../Assets/Images/test2.jpg";
import image3 from "../../Assets/Images/test3.jpg";
import image4 from "../../Assets/Images/test4.jpg";

export default function AddProducts() {
  const fileRef = useRef();

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
      uploadImages,
      description,
      price,
      category
    );
  };

  const pickImageHandler = (event) => {
    if (event.target.files && event.target.files.length === 1) {
      setFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    setProductName("Yo");
    setUploadImages([image1, image2, image3, image4]);
    setDescription("testing in vscode");
    setPrice(998);
    setCategory("delicious");
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
              <div style={{ fontWeight: "100", fontSize: "1.75rem" }}>
                Product Name
                <SearchBar height="3.5rem" width="20rem">
                  <SearchBar.Group id="email" className="text-center">
                    <SearchBar.Control></SearchBar.Control>
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
