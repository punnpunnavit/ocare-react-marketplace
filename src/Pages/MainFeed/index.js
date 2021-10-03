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
import { Container, Row, Col } from "react-bootstrap";

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

  const cards = useMemo(() => {
    return products.map((products, index) => {
      return (
        <div
          ref={lastProductElementRef}
          key={index}
          style={{
            display: "flex",
            marginBottom: "15px",
            justifyContent:"space-between"
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


  
  return (
    <Container style={{ margin: "0 0 0 0"}}>
      <Row style={{ maxHeight: "100vh", height: "100%",minWidth:"100vw",width:"100%",display:"flex" }}>
        <InsideNavbar/>
        <Wrapper>
        <HeaderWrapper>
          <Header>YOUR FRIENDS</Header>

          <Row>
            <FaFilter style={{ color: "var(--green)"}} />
            <SearchBar marginRight="0px">
              <SearchBar.Group
                id="email"
                className="text-center"
                onChange={handleSearch}
              >
                <SearchBar.Control placeholder="Search"></SearchBar.Control>
              </SearchBar.Group>
            </SearchBar>
          </Row>
        </HeaderWrapper>
        <div style={{ maxWidth: "100vw", width: "100%" }}>
          {cards}
          {loading && (
            <div style={{ display: "flex", marginBottom: "15px" }}>
              <SkeletonLoadingProfile />
              <ProductFeedLoading />
            </div>
          )}
        </div>
        <div>{error && "Error"}</div>
      </Wrapper>
      </Row>
    </Container>
  );
}

export default MainFeed;
