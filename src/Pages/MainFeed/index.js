//Hooks
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import InsideNavbar from "../../Components/Sidebar/ShownNavbar";
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
} from "./MainFeed.styles";
import { RiDivideFill } from "react-icons/ri";
import { CircularImageLoading } from "../../Components/Profile/Profile.styles";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import breakpointRes from "../../Helpers/Breakpoints";

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
            justifyContent: "space-between",
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

  const cardsResponsive = useMemo(() => {
    return products.map((products, index) => {
      return (
        <div
          ref={lastProductElementRef}
          key={index}
          style={{
            display: "flex",
            marginBottom: "15px",
            justifyContent: "space-between",
          }}
        >
          <Profile
            profileURL={products.userImage}
            username={products.username}
            loading={loading}
          />
          <Link to={`/blogs/${products.id}`}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                here
              </Card.Body>
            </Card>
          </Link>
        </div>
      );
    });
  }, [products, loading]);

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
        <InsideNavbar />
        <Wrapper>
          <HeaderWrapper>
            <Header>YOUR FRIENDS</Header>
            <Row>
              <Col>
                {/* <FaFilter
                  style={{
                    color: "var(--green)",
                    alignSelf: "center",
                    fontSize: "1rem",
                    height: "100px",
                    lineHeight: "100px",
                    textAlign: "center",

                    right: "90px",
                  }}
                /> */}
              </Col>
              <Col>
                <SearchBar marginRight="0px">
                  <SearchBar.Group
                    id="email"
                    className="text-center"
                    onChange={handleSearch}
                  >
                    <SearchBar.Control placeholder="Search"></SearchBar.Control>
                  </SearchBar.Group>
                </SearchBar>
              </Col>
            </Row>
          </HeaderWrapper>
          {cards}
          {loading && (
            <div style={{ display: "flex", marginBottom: "15px" }}>
              <SkeletonLoadingProfile />
              <ProductFeedLoading />
            </div>
          )}
          <div>{error && "Error"}</div>
        </Wrapper>
      </Row>
    </Container>
  );
}

export default MainFeed;
