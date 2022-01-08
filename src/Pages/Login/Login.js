import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useFirebase from "./useFIrebase";

const Login = () => {
  const { user, setUser, setIsLoading, googleLogin } = useFirebase();
  //redirect to user destination
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/";
  const navigate = useNavigate();
  console.log(redirect_uri, user.email);
  const handleLogin = () => {
    googleLogin()
      .then((result) => {
        // setUser(result.user);
        console.log(result.user);
        navigate(redirect_uri);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <Container
        className="mt-5 d-flex justify-content-center align-items-center"
        style={{ height: "33rem" }}
      >
        <Row>
          <Col
            className="my-5 d-flex justify-content-center align-items-center"
            sm={12}
            md={4}
            lg={4}
          >
            <div>
              <h4 className="fw-bold text-secondary">LogIn With Google</h4>
              <Button
                onClick={handleLogin}
                variant="outline-warning"
                className="w-100  btnRegular"
              >
                <FcGoogle /> Google
              </Button>
              <Link to="/">
                {" "}
                <Button
                  className="w-100 my-2 btnRegular"
                  variant="outline-warning"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </Col>
          <Col md={8} className="d-none d-md-block">
            <img
              className="rounded img-fluid"
              src="https://www.sam-solutions.com/blog/wp-content/uploads/2017/04/eCommerce-Website-Components-photo.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
