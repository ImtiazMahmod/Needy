import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Explore from "../Explore/Explore";
import { fetchProducts } from "../Redux/Slice/needySlice";
import Footer from "../Shared/Footer/Footer";
import MainNavbar from "../Shared/Navbar/Navbar";

const AllExplore = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.needy.products);

  ///load all Products
  useEffect(() => {
    dispatch(fetchProducts()).then((products) => {
      if (products) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <MainNavbar></MainNavbar>
      {isLoading ? (
        <div className="py-5">
          <Spinner
            animation="grow"
            className="primaryColor spinnerStyle"
          ></Spinner>
        </div>
      ) : (
        <Container className="my-5">
          <div className="mb-5 ">
            <h5 className="text-warning mt-5">Explore</h5>
            <h1>Your Choice</h1>
          </div>
          <Row xs={1} className="g-4" sm={1} md={2} lg={4}>
            {products?.map((product) => (
              <Col key={product?._id}>
                {" "}
                <Explore product={product}></Explore>{" "}
              </Col>
            ))}
          </Row>
        </Container>
      )}
      <Footer></Footer>
    </div>
  );
};

export default AllExplore;
