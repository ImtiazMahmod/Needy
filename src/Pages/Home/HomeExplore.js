import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Explore from "../Explore/Explore";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/Slice/needySlice";
import { useSelector } from "react-redux";

const HomeExplore = () => {
  const [isLoading, setIsLoading] = useState(true);

  // // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.needy.products);
  console.log(products);

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
            {products?.slice(0, 8)?.map((product) => (
              <Col key={product?._id}>
                {" "}
                <Explore product={product}></Explore>{" "}
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default HomeExplore;
