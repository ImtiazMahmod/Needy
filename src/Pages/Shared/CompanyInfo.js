import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Col, Container, Row } from "react-bootstrap";
import { HiUserGroup } from "react-icons/hi";
import { MdDeliveryDining } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";

const CompanyInfo = () => {
  return (
    <div className="p-5">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className="d-flex justify-content-center align-items-center">
              <BiSearchAlt
                style={{ fontSize: "5em" }}
                className="text-warning me-3 "
              />
              <div className="text-start ps-2">
                <h5 className="fw-bold"> Standards of Services</h5>
                <p className="text-secondary">
                  We provide standard services and latest communication
                  technology with best facility in our firms.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <MdDeliveryDining
                style={{ fontSize: "5em" }}
                className=" text-warning me-3"
              />
              <div className="text-start ps-2">
                <h5 className="fw-bold">24/7 Supports</h5>
                <p className="text-secondary">
                  We provide well communication and latest technology with best
                  facility in our firms
                </p>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <div className="d-flex justify-content-center align-items-center">
              <HiUserGroup
                style={{ fontSize: "5em" }}
                className="text-warning me-3"
              />
              <div className="text-start ps-2">
                <h5 className="fw-bold">Well Communication</h5>
                <p className="text-secondary">
                  We provide well communication and latest technology with best
                  facility in our firms.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <FaUserShield
                style={{ fontSize: "5em" }}
                className="text-warning me-3"
              />
              <div className="text-start ps-2">
                <h5 className="fw-bold">20+ Years Experience</h5>
                <p className="text-secondary">
                  We have a 20+ Years Experience and latest medical technology
                  with best facility in our clinic.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CompanyInfo;
