import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import Swal from "sweetalert2";
import useFirebase from "../../Login/useFIrebase";

const Review = () => {
  const { user } = useFirebase();
  const [rate, setRate] = useState(2);
  console.log(rate);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.rating = rate;
    console.log(data);
    ///review post to server
    axios
      .post("https://sleepy-headland-99200.herokuapp.com/review", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Review",
            text: "Your valuable review sent.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes",
          });
          reset();
        }
      });
  };

  return (
    <div>
      <h4 className="fw-bold mt-3">Give Your Review</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <p>Tell us what you think.</p>

            <Rating
              initialRating={rate}
              className="text-warning fs-2 my-3"
              onChange={(rate) => {
                setRate(rate);
              }}
              {...{
                emptySymbol: <AiOutlineStar>star_border</AiOutlineStar>,
                fullSymbol: <AiFillStar>star_rate</AiFillStar>,
              }}
            />
          </div>
          <input
            label="Name"
            required
            style={{ outline: "none" }}
            className="m-2 p-2 rounded border-0 shadow w-75"
            value={user?.displayName}
            {...register("name")}
          />

          <textarea
            required
            label="Review"
            rows={5}
            style={{ outline: "none" }}
            placeholder="Your review here"
            className="m-2 mb-4 p-2 rounded border-0 shadow w-75"
            {...register("review")}
          />
        </div>
        <Button variant="warning" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Review;
