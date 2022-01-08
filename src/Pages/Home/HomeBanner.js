import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div>
      <div className="py-5 homeBanner">
        <Container>
          <Row className="g-4 ">
            <Col
              sm={12}
              md={8}
              className="d-flex justify content-center align-items-center"
            >
              <div className="text-start ms-5">
                <h1 className="bannerUpperSub ">Up to 50% Off</h1>
                <h1 className="bannertitle ">NEEDY</h1>
                <h1 className="bannersub "> Limited Time Only</h1>
                <Link to="/explore">
                  <Button variant="warning" className="fw-bold">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeBanner;
