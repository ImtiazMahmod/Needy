import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Explore from "../Explore/Explore";

const HomeExplore = () => {
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
    </div>
  );
};

export default HomeExplore;
