import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Explore.css";

const Explore = (tour) => {
  console.log(tour);
  return (
    <div>
      <Card className="tourCard border-0 shadow rounded">
        <Link className="text-decoration-none" to={`/tour/${tour?._id}`}>
          <div>
            <Card.Img
              style={{ height: "200px" }}
              className="img-fluid rounded"
              variant="top"
              src={tour?.img1}
            />
          </div>
        </Link>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="cartTitle  fw-bold primaryColor">
              {tour?.title}
            </Card.Title>
            <Card.Title className="text-secondary">৳{tour?.fee}</Card.Title>
          </div>
          <Card.Text className="text-secondary text-start border-top py-2">
            {tour?.desc?.slice(0, 50)}...
          </Card.Text>
          <Link to={`/placeOrder/${tour?._id}`}>
            <Button variant="outline-warning ">Book Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Explore;
