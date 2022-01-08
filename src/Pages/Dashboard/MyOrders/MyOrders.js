import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useFirebase from "../../Login/useFIrebase";
import SingleOrder from "./SingleOrder";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  const { user } = useFirebase();
  //load specific user orders
  useEffect(() => {
    axios
      .get(
        `https://nameless-fortress-10028.herokuapp.com/myOrders?email=${user?.email}`
      )
      .then((res) => {
        setMyOrders(res.data);
      });
  }, [myOrders]);
  return (
    <div>
      <h3 variant="h4" sx={{ fontWeight: "bold", my: 3 }}>
        My Orders
      </h3>
      <Container>
        <Row xs={4} sm={8} md={12}>
          {myOrders?.map((order) => (
            <Col
              sx={{ alignItems: "center" }}
              key={order._id}
              item
              xs={4}
              sm={4}
              md={4}
            >
              <SingleOrder order={order} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyOrders;
