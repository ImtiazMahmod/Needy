import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import Rating from "react-rating";

const SingleOrder = ({ order }) => {
  //delete bike
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
        axios
          .delete(
            `https://nameless-fortress-10028.herokuapp.com/deleteOrder/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Cancel!", "Your order has been deleted.", "success");
            }
          });
      }
    });
  };
  console.log(order);
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 470,
        borderRadius: "20px",
      }}
    >
      <Card.Body>
        <div sx={{ mx: 3, mt: 1 }}>
          {order?.status === "Pending" && (
            <p variant="subtitle1">{order?.status}</p>
          )}
          {order?.status === "Shipped" && (
            <p variant="subtitle1">{order?.status}</p>
          )}
          {order?.status === "Rejected" && (
            <p variant="subtitle1">{order?.status}</p>
          )}
        </div>
        <img src={order?.bikeInfo?.img} height="auto" width="100%" alt="bike" />
      </Card.Body>
      <Card.Body>
        {" "}
        <p sx={{ textAlign: "left" }} gutterBottom variant="h6" component="div">
          {order?.bikeInfo?.title}
        </p>
        <div sx={{ display: "flex", justifyContent: "space-between" }}>
          <p gutterBottom variant="subtitle1" fontWeight="bold" component="div">
            BDT {order?.bikeInfo?.price}
          </p>
          <Rating
            sx={{ ms: "auto" }}
            size="small"
            color="tomato"
            name="half-rating"
            defaultValue={order?.bikeInfo?.rating}
            readOnly
          />
        </div>
        <p
          textAlign="left"
          gutterBottom
          sx={{ mt: 1 }}
          variant="subtitle1"
          component="div"
        >
          {order?.bikeInfo?.desc.slice(0, 50)}
        </p>
      </Card.Body>
      <Card.Body>
        sx={{ my: 1, display: "flex", justifyContent: "space-between" }}
        <Link to={`/purchase/${order?.bikeInfo?._id}`}>
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{ color: "tomato" }}
          >
            Details
          </Button>
        </Link>
        <Button
          onClick={() => handleDelete(order?._id)}
          sx={{ textAlign: "right" }}
        >
          {/* <BackspaceOutlined button color="error" /> */}
        </Button>
      </Card.Body>{" "}
    </Card>
  );
};

export default SingleOrder;
