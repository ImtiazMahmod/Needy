import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useFirebase from "../Login/useFIrebase";

const OrderProduct = ({ product }) => {
  console.log(product);
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending";
    data.productInfo = product;
    console.log(data);
    ///post for Buy product
    axios
      .post("https://sleepy-headland-99200.herokuapp.com/orderProduct", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Order Placed Successfully",
            text: "WOW, you are Ordered Product.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes",
          });

          reset();
        }
      });
  };
  const date = new Date().toISOString().substring(0, 10);

  const inputStyle = "border-0  border-bottom p-2 m-2 shadow rounded";
  const errorStyle = "text-danger text-start ms-2";
  return (
    <div>
      <h4 className="fw-bold my-3">Order this Product</h4>
      <form
        className="d-flex flex-column bg-light p-4 rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          defaultValue={user?.displayName}
          className={inputStyle}
          style={{ outline: "none" }}
          placeholder={`Your Full Name`}
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className={errorStyle}>This field is required</span>
        )}

        <input
          defaultValue={user?.email}
          type="email"
          className={inputStyle}
          style={{ outline: "none" }}
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className={errorStyle}>This field is required</span>
        )}

        <input
          className={inputStyle}
          style={{ outline: "none" }}
          placeholder="Phone"
          {...register("phone", {
            required: true,
            pattern: /^\(?([0-9]{5})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
          })}
        />
        {errors.phone?.type === "required" && (
          <span className={errorStyle}>This field is required</span>
        )}
        {errors.phone?.type === "pattern" && (
          <span className={errorStyle}>Input a valid Phone Number</span>
        )}

        <input
          type="number"
          className={inputStyle}
          style={{ outline: "none" }}
          placeholder="Number of Product"
          {...register("size", { required: true, min: 1 })}
        />
        {errors.size?.type === "required" && (
          <span className={errorStyle}>This field is required</span>
        )}

        {errors.size?.type === "min" && (
          <span className={errorStyle}>Input minimum 1 product.</span>
        )}

        <input
          type="date"
          className={inputStyle}
          style={{ outline: "none" }}
          value={date}
          {...register("date", { required: true })}
        />
        {errors.date && (
          <span className={errorStyle}>This field is required</span>
        )}

        <textarea
          rows="8"
          className={inputStyle}
          style={{ outline: "none" }}
          placeholder="Message"
          {...register("message")}
        />

        <input
          className="btn fw-bold m-2 btnRegular"
          value="Buy Now"
          type="submit"
        />
      </form>
    </div>
  );
};

export default OrderProduct;
