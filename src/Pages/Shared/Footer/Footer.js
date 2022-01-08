import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiSupport } from "react-icons/bi";
import { MdConnectWithoutContact, MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-dark text-light p-5">
      <Container>
        <Row className="g-4">
          <Col>
            <a href="/" className="text-decoration-none text-warning">
              <h1 className=" fw-bold logo"> NEEDY</h1>
            </a>
          </Col>
          <Col>
            <div className="d-flex justify-content-center align-items-center">
              {" "}
              <MdLocationPin className="fs-3 mx-3 text-warning" />
              <div className="text-start">
                <p>Office Address</p>
                <h5 className="text-secondary">Dhaka,Bangladesh</h5>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center align-items-center">
              <BiSupport className="fs-3 mx-3 text-warning" />
              <div className="text-start">
                <p>24 X 7 online support</p>
                <h5 className="text-secondary">info@doctero.com</h5>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center align-items-center">
              <MdConnectWithoutContact className="fs-3 mx-3 text-warning" />
              <div className="text-start">
                <p>Contact Us Free</p>
                <h5 className="text-secondary">+880 185 456 888</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
