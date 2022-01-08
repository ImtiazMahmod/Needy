import React from "react";
import { Container, Nav, Button, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import { FaUserAlt } from "react-icons/fa";
import useFirebase from "../../Hooks/useFirebase";

const MainNavbar = () => {
  const { user, logout } = useFirebase();
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container fluid>
        <Navbar.Brand>
          <a href="/" className="text-decoration-none text-danger">
            {" "}
            <h1 className=" fw-bold logo"> NEEDY</h1>
            {/* <img
              width="200"
              className="mx-5"
              src="https://i.ibb.co/cCw9yY8/logo.png"
              alt=""
            /> */}
          </a>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold" as={Link} to="/about">
              About Us{" "}
            </Nav.Link>

            <Nav.Link className="fw-bold" as={Link} to="/explore">
              Explore{" "}
            </Nav.Link>

            <Nav.Link className="fw-bold" as={Link} to="/contact">
              {" "}
              Contact Us{" "}
            </Nav.Link>
          </Nav>
          <Nav>
            {/* userName */}
            {user?.email && (
              <div className="d-flex mx-auto my-auto">
                <Nav.Link className="fw-bold mx-2" as={Link} to="/dashboard">
                  {" "}
                  Dashboard
                </Nav.Link>{" "}
                {user?.photoURL ? (
                  <img
                    className="rounded-circle"
                    width="40"
                    height="40"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  ""
                )}
                <h5 className="text-dark mt-auto mx-3">
                  Hi, {user?.displayName?.split(" ")[0]}
                </h5>
              </div>
            )}

            {/* user toggle */}
            {user?.email ? (
              <Button
                onClick={logout}
                className="my-2 mx-auto "
                variant="warning"
              >
                LogOut
              </Button>
            ) : (
              <Nav.Link className="fw-bold" as={Link} to="/login">
                <FaUserAlt /> Login{" "}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
