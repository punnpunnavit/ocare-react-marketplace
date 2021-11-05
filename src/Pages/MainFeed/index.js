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
import { StyledSearchBar } from "./MainFeed.styles";
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
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import breakpointRes from "../../Helpers/Breakpoints";
import StyledLink from "../../Components/Link/Link.styles";

function MainFeed() {
  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const history = useHistory();

  const { products, hasMore, loading, error } = useMainFeedFetch(
    category,
    pageNumber
  );

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1250);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
        <div>
          {isDesktop ? (
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

              <StyledLink
                to={`/blogs/${products.id}`}
                style={{ textDecoration: "none" }}
              >
                <ProductFeed
                  productPicture={products.image}
                  Header={products.name}
                  Description={products.description}
                  loading={loading}
                />
              </StyledLink>
            </div>
          ) : (
            <div
              ref={lastProductElementRef}
              key={index}
              style={{
                display: "flex",
                marginBottom: "15px",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Profile
                profileURL={products.userImage}
                username={products.username}
                loading={loading}
              />

              <Link to={`/blogs/${products.id}`}>
                <Card style={{ width: "12rem" }}>
                  <Card.Img
                    variant="top"
                    src={products.image}
                    style={{ maxWidth: "12rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{products.name}</Card.Title>
                    <Card.Text>{products.description}</Card.Text>
                  </Card.Body>
                </Card>
                {/* <ProductFeed
                  productPicture={products.image}
                  Header={products.name}
                  Description={products.description}
                  loading={loading}
                /> */}
              </Link>
            </div>
          )}
        </div>
      );
    });
  }, [products, loading]);

  // const cardsResponsive = useMemo(() => {
  //   return products.map((products, index) => {
  //     return (
  //       <div
  //         ref={lastProductElementRef}
  //         key={index}
  //         style={{
  //           display: "flex",
  //           marginBottom: "15px",
  //           justifyContent: "space-between",
  //         }}
  //       >
  //         <Profile
  //           profileURL={products.userImage}
  //           username={products.username}
  //           loading={loading}
  //         />
  //         <Link to={`/blogs/${products.id}`}>
  //           <Card style={{ width: "18rem" }}>
  //             <Card.Img variant="top" src="holder.js/100px180" />
  //             <Card.Body>
  //               <Card.Title>Card Title</Card.Title>
  //               <Card.Text>
  //                 Some quick example text to build on the card title and make up
  //                 the bulk of the card's content.
  //               </Card.Text>
  //               here
  //             </Card.Body>
  //           </Card>
  //         </Link>
  //       </div>
  //     );
  //   });
  // }, [products, loading]);

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
          <StyledLink to={`/addproducts`} style={{ textDecoration: "none" }}>
            Add Products
          </StyledLink>
          <StyledLink to={`/editprofile`} style={{ textDecoration: "none" }}>
            Edit Profile
          </StyledLink>
          <HeaderWrapper>
            <Header>YOUR FRIENDS</Header>
            <Row>
              <Col>
              </Col>
              <Col>
                <StyledSearchBar marginRight="0px">
                  <StyledSearchBar.Group
                    id="email"
                    className="text-center"
                    onChange={handleSearch}
                  >
                    <StyledSearchBar.Control placeholder="Search"></StyledSearchBar.Control>
                  </StyledSearchBar.Group>
                </StyledSearchBar>
              </Col>
            </Row>
          </HeaderWrapper>

          {cards}
          <div>{error && "Error"}</div>
        </Wrapper>
      </Row>
    </Container>
  );
}

export default MainFeed;
