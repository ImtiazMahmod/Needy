import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Explore.css";

const Explore = ({ product }) => {
  return (
    <div>
      <Card className="exploreCard border-0 shadow rounded">
        <Link className="text-decoration-none" to={`/placeOrder/${product?._id}`}>
          <div>
            <Card.Img
              style={{ height: "200px" }}
              className="p-2 rounded"
              variant="top"
              src={product?.img}
            />
          </div>
        </Link>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="cartTitle  fw-bold primaryColor">
              {product?.title?.slice(0, 15)}...
            </Card.Title>
            <Card.Title className="text-secondary">
              ৳{product?.price}
            </Card.Title>
          </div>
          <Card.Text className="text-secondary text-start border-top py-2">
            {product?.desc?.slice(0, 50)}...
          </Card.Text>
          <Link to={`/placeOrder/${product?._id}`}>
            <Button variant="outline-warning ">Buy Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Explore;
