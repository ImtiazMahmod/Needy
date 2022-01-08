import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
  CDBContainer,
} from "cdbreact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Pay from "./Pay/Pay";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Row>
          <Col xs={12} sm={3} md={5}>
            {" "}
            <CDBContainer>
              <CDBSidebar textColor="#000" backgroundColor="#F9F9F9  ">
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                  Dashboard
                </CDBSidebarHeader>
                <CDBSidebarContent>
                  <CDBSidebarMenu>
                    <CDBSidebarMenuItem
                      as={Link}
                      to="/dashboard/pay"
                      icon="th-large"
                    >
                      Pay
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem
                      as={Link}
                      to="/dashboard/myOrders"
                      icon="th-large"
                    >
                      My Orders
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem
                      as={Link}
                      to="/dashboard/review"
                      icon="sticky-note"
                    >
                      Give Review
                    </CDBSidebarMenuItem>
                  </CDBSidebarMenu>
                </CDBSidebarContent>
              </CDBSidebar>
            </CDBContainer>
          </Col>
          <Col className="mt-4" xs={12} sm={9} md={7}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
