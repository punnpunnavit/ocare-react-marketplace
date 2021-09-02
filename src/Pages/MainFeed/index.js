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
} from "./MainFeed.styles";

function MainFeed() {
  // const { state, loading, error } = useMainInfoFetch();

  // const [query, setQuery] = useState("");
  // const [pageNumber, setPageNumber] = useState(1);

  // const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  // const observer = useRef();
  // const lastBookElementRef = useCallback(
  //   (node) => {
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMore]
  // );

  // function handleSearch(e) {
  //   setQuery(e.target.value);
  //   setPageNumber(1);
  // }
  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { products, hasMore, loading, error } = useMainFeedFetch(
    category,
    pageNumber
  );

  const observer = useRef();
  const lastProductElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

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
    >
      <InsideNavbar
        style={{ position: "-webkit-sticky", position: "sticky", top: "0" }}
      />
      <Wrapper>
        <div style={{}}>
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
            {/* <div style={{ display: "flex", marginBottom: "15px" }}> */}
            <div style={{ marginBottom: "15px" }}>
              {products.map((products, index) => {
                if (products.length === index + 1) {
                  return (
                    <div ref={lastProductElementRef} key={products}>
                      {products}
                    </div>
                  );
                } else {
                  return <div key={products}>{products}</div>;
                }
              })}
              <div>{loading && "Loading..."}</div>
              <div>{error && "Error"}</div>
              {/* <Profile
                profileURL="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                username="Jolie"
              />
              <ProductFeed
                productPicture="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                Header="efegrgrgrgrgf"
                Description="wefrewf"
              /> */}
            </div>
          </FeedWrapper>
        </div>

        {/* <input type="text" value={query} onChange={handleSearch}></input>
          {books.map((book, index) => {
            if (books.length === index + 1) {
              return (
                <div ref={lastBookElementRef} key={book}>
                  {book}
                </div>
              );
            } else {
              return <div key={book}>{book}</div>;
            }
          })}
          <div>{loading && "Loading..."}</div>
          <div>{error && "Error"}</div> */}
      </Wrapper>
    </div>
  );
}

export default MainFeed;
