import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import SingleOrder from "./SingleOrder";

const MyOrders = () => {
  const [myOrders, SetMyOrders] = useState();
  const { user } = useFirebase();

  //load specific user orders
  useEffect(() => {
    axios
      .get(
        `https://sleepy-headland-99200.herokuapp.com/myOrders?email=${user?.email}`
      )
      .then((res) => SetMyOrders(res.data));
  }, [myOrders]);

  console.log(myOrders);

  return (
    <div>
      <h3>My Orders</h3>
      <Container className="d-flex justify-content-center">
        <Row>
          {myOrders?.map((order) => (
            <Col key={order._id} item xs={12} sm={12} md={12} lg={6}>
              <SingleOrder order={order} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyOrders;
