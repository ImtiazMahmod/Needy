import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHandshake, FaSmile, FaUser, FaUserShield } from "react-icons/fa";
import "./NeedyInfo.css";

const NeedyInfo = () => {
  return (
    <div className="needyInfo">
      <Container className="my-5 ">
        <Row className="mx-auto">
          <div className="my-3">
            <h5 className="text-warning text-decoration-underline mt-5">
              Why Needy
            </h5>
            <h1 className=" text-light">
              Why You Buy from <br /> NEEDY
            </h1>
          </div>
          <Col sm={12} md={6} lg={3} className="info mx-auto p-5">
            <FaUser className="infoIcon " />

            <h5>2000+ Our worldwide Showroom</h5>
          </Col>
          <Col sm={12} md={6} lg={3} className="info  p-5  mx-auto">
            <FaHandshake className="infoIcon  " />
            <h5>100% trusted E-commerce Agency</h5>
          </Col>

          <Col sm={12} md={6} lg={3} className="info  p-5  mx-auto">
            <FaUserShield className="infoIcon" />
            <h5>10+ year of Experience</h5>
          </Col>
          <Col sm={12} md={6} lg={3} className="info  p-5  mx-auto">
            <FaSmile className="infoIcon " />
            <h5>90% of Our Client Happy</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NeedyInfo;
