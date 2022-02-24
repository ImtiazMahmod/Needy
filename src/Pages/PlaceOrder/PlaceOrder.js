import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import MainNavbar from "../Shared/Navbar/Navbar";
import OrderProduct from "./OrderProduct";

const PlaceOrder = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  ///load specific product
  useEffect(() => {
    axios
      .get(`https://sleepy-headland-99200.herokuapp.com/product/${productId}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, [productId]);
  console.log(productId);
  return (
    <div>
      <MainNavbar></MainNavbar>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} lg={8} className="mt-3">
            <div className="text-start">
              <Row className="d-flex justify-content-between border-bottom ">
                <Col sm={12} md={8}>
                  <h3 className="fw-bold primaryColor my-3">
                    {product?.title}
                  </h3>
                </Col>
                <Col
                  className="text-secondary d-flex align-items-center"
                  sm={12}
                  md={4}
                >
                  <h5>৳{product?.price}</h5>
                </Col>
              </Row>
              <h5 className="my-3">Overview</h5>
              <p className="text-secondary">{product?.desc}</p>
              <Row className="g-4">
                <Col>
                  <img
                    style={{ height: "250px" }}
                    className="img-fluid rounded"
                    src={product?.img}
                    alt=""
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <OrderProduct product={product} />
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default PlaceOrder;
