import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Explore from "../Explore/Explore";
import Footer from "../Shared/Footer/Footer";
import MainNavbar from "../Shared/Navbar/Navbar";

const AllExplore = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [products, setProducts] = useState([]);

  ///load all Products
  useEffect(() => {
    axios
      .get("https://obscure-forest-04277.herokuapp.com/allTour")
      .then((res) => {
        if (res.data) {
          setProducts(res.data);
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
            {products?.map((tour) => (
              <Col key={tour?._id}>
                {" "}
                <Explore tour={tour}></Explore>{" "}
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
