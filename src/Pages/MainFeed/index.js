//Hooks
import React, { useState, useEffect, useRef, useCallback } from "react";
import InsideNavbar from "../../Components/Sidebar/ShownNavbar";
import useBookSearch from "../../Hooks/useBookSearch";
import useMainFeedFetch from "../../Hooks/useMainFeedFetch";
//Components
import Profile from "../../Components/Profile";
import ProductFeed from "../../Components/ProductFeed";
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
  Horizontal
} from "./MainFeed.styles";

function MainFeed() {
  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const { products, productsDes, productsImg, hasMore, loading, error } =
    useMainFeedFetch(category, pageNumber);

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
            <SearchbarWrapper>
              <FaFilter
                style={{ color: "var(--green)", marginRight: "-200px" }}
              />
              <SearchBar>
                <SearchBar.Group id="email" className="text-center">
                  <SearchBar.Control placeholder="Search"></SearchBar.Control>
                </SearchBar.Group>
              </SearchBar>
            </SearchbarWrapper>
          </HeaderWrapper>
          <FeedWrapper>
            {products.map((products, index) => {
              if (products.length === index + 1) {
                return (
                  <div
                    ref={lastProductElementRef}
                    key={products.productId}
                    style={{ display: "flex", marginBottom: "15px" }}
                  >
                    <Profile
                      profileURL="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      username="Jolie"
                    />
                    <ProductFeed
                      productPicture={productsImg}
                      Header={products}
                      Description={productsDes}
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    ref={lastProductElementRef}
                    key={products.productId}
                    style={{ display: "flex", marginBottom: "15px" }}
                  >
                    <Profile
                      profileURL="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      username="Jolie"
                    />
                    <ProductFeed
                      productPicture={productsImg[index]}
                      Header={products}
                      Description={productsDes[index]}
                    />
                  </div>
                );
              }
            })}
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error"}</div>
          </FeedWrapper>
        </div>
      </Wrapper>
    </div>
  );
}

export default MainFeed;
