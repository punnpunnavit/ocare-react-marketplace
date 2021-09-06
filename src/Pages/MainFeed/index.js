//Hooks
import React, { useState, useEffect, useRef, useCallback } from "react";
import InsideNavbar from "../../Components/Sidebar/ShownNavbar";
import useBookSearch from "../../Hooks/useBookSearch";
import useMainFeedFetch from "../../Hooks/useMainFeedFetch";
//Components
import { Profile, SkeletonLoadingProfile } from "../../Components/Profile";
import { ProductFeed, ProductFeedLoading } from "../../Components/ProductFeed";
import { SearchBar } from "../../Components/SearchBar/SearchBar.styles";
//APIs
import { useMainInfoFetch } from "../../Hooks/useMainInfoFetch";
//Styles
import { FaFilter } from "react-icons/fa";
import {
  Header,
  Wrapper,
  FeedWrapper,
  HeaderWrapper,
  SearchbarWrapper,
  Horizontal,
} from "./MainFeed.styles";
import { RiDivideFill } from "react-icons/ri";
import { CircularImageLoading } from "../../Components/Profile/Profile.styles";

function MainFeed() {
  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const {
    products,
    productsDes,
    productsImg,
    productsUsername,
    productsUserImg,
    hasMore,
    loading,
    error,
  } = useMainFeedFetch(category, pageNumber);

  const observer = useRef();
  const lastProductElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("next pls");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleScroll(e) {
    console.log(e.target.scrollHeight);
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      console.log("bottom");
    }
  }

  function handleSearch(e) {
    setCategory(e.target.value);
    setPageNumber(1);
  }

  console.log("XXX");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
      onScroll={handleScroll}
    >
      <InsideNavbar
        style={{ position: "-webkit-sticky", position: "sticky", top: "0" }}
      />
      <Wrapper>
        <div>
          <HeaderWrapper>
            <Header>YOUR FRIENDS</Header>

            <FaFilter
              style={{ color: "var(--green)", marginRight: "-200px" }}
            />
            <SearchBar marginRight="0px">
              <SearchBar.Group id="email" className="text-center">
                <SearchBar.Control placeholder="Search"></SearchBar.Control>
              </SearchBar.Group>
            </SearchBar>
          </HeaderWrapper>

          {products.map((products, index) => {
            console.log("YYY");
            if (products.length === index + 1) {
              return (
                <div
                  ref={lastProductElementRef}
                  key={products.productId}
                  style={{
                    display: "flex",
                    marginBottom: "15px",
                  }}
                >
                  <Profile
                    profileURL={productsUserImg}
                    username={productsUsername}
                    loading={loading}
                  />
                  <ProductFeed
                    productPicture={productsImg}
                    Header={products}
                    Description={productsDes}
                    loading={loading}
                  />
                </div>
              );
            } else {
              return (
                <div
                  ref={lastProductElementRef}
                  key={products.productId}
                  style={{
                    display: "flex",
                    marginBottom: "15px",
                  }}
                >
                  <Profile
                    profileURL={productsUserImg[index]}
                    username={productsUsername[index]}
                    loading={loading}
                  />
                  <ProductFeed
                    productPicture={productsImg[index]}
                    Header={products}
                    Description={productsDes[index]}
                    loading={loading}
                  />
                </div>
              );
            }
          })}
          {/* <div>
              {true && (
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <SkeletonLoadingProfile />
                  <ProductFeedLoading />
                </div>
              )}
            </div> */}
          <div>{error && "Error"}</div>
        </div>
      </Wrapper>
    </div>
  );
}

export default MainFeed;
