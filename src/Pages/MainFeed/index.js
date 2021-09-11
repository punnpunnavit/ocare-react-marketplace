//Hooks
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
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
import { Link } from "react-router-dom";

function MainFeed() {
  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

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
          console.log("next pls");
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
  console.log("XXX");

  const cards = useMemo(() => {
    console.log("YYY");
    return products.map((products, index) => {
      return (
        <div
          ref={lastProductElementRef}
          key={index}
          style={{
            display: "flex",
            marginBottom: "15px",
          }}
        >
          <Profile
            profileURL={products.userImage}
            username={products.username}
            loading={loading}
          />
          <Link to={`/blogs/${products.id}`}>
            <ProductFeed
              productPicture={products.image}
              Header={products.name}
              Description={products.description}
              loading={loading}
            />
          </Link>
        </div>
      );
    });
  }, [products, loading]);
  //group objects into one object + absolute path + error boundary + debouncing axios + backแก้ตัวสุดท้าย + fix bg height + button width + minmax???
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
        <div>
          <HeaderWrapper>
            <Header>YOUR FRIENDS</Header>

            <FaFilter
              style={{ color: "var(--green)", marginRight: "-670px" }}
            />
            <SearchBar marginRight="0px">
              <SearchBar.Group
                id="email"
                className="text-center"
                onChange={handleSearch}
              >
                <SearchBar.Control placeholder="Search"></SearchBar.Control>
              </SearchBar.Group>
            </SearchBar>
          </HeaderWrapper>
          {console.log(383)}
          <div>
            {cards}
            {loading && (
              <div style={{ display: "flex", marginBottom: "15px" }}>
                <SkeletonLoadingProfile />
                <ProductFeedLoading />
              </div>
            )}
          </div>
          <div>{error && "Error"}</div>
        </div>
      </Wrapper>
    </div>
  );
}

export default MainFeed;
