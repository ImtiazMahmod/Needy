import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

const SingleOrder = ({ order }) => {
  console.log(order.status);
  //delete Order
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your order will be canceled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/deleteOrder/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "Your order has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <Card
      style={{
        width: "15em",
        height: 470,
        borderRadius: "20px",
        marginTop: "15px",
      }}
    >
      <Card.Body>
        <div className="mx-3 mt-1">
          {order?.status === "Pending" && <p>{order?.status}</p>}
          {order?.status === "Shipped" && <p>{order?.status}</p>}
        </div>
        <img
          src={order?.productInfo?.img}
          height="auto"
          width="100%"
          alt="bike"
        />
      </Card.Body>
      <Card.Body>
        {" "}
        <h5 className=" text-start text-danger fw-bold">
          {order?.productInfo?.title.slice(0, 18)}
        </h5>
        <div sx={{ display: "flex", justifyContent: "space-between" }}>
          <p className="fs-5 text-secondary">৳ {order?.productInfo?.price}</p>
        </div>
        <p className="text-start mt-1  text-secondary">
          {order?.productInfo?.desc.slice(0, 50)}...
        </p>
      </Card.Body>
      <Card.Body className="d-flex justify-content-between">
        <Link to={`/placeOrder/${order?.productInfo?._id}`}>
          <Button variant="warning ">Details</Button>
        </Link>
        <Button onClick={() => handleDelete(order?._id)} variant="danger">
          <MdDelete />
        </Button>
      </Card.Body>{" "}
    </Card>
  );
};

export default SingleOrder;
