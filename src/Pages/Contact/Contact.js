import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import NeedyInfo from "../About/NeedyInfo";
import Footer from "../Shared/Footer/Footer";
import MainNavbar from "../Shared/Navbar/Navbar";
import emailjs from "emailjs-com";
import { IoMdSend } from "react-icons/io";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    emailjs
      .send(
        "service_lt17chc",
        "template_q30yzug",
        data,
        "user_OwivAPdhOSZStwKjITaV1"
      )
      .then(
        (result) => {
          if (result.text) {
            alert("we got your message");
            e.target.reset();
            console.log(result.text);
          }
        },
        (error) => {
          if (error.text) {
            alert("please try again later");
            e.target.reset();
          }
        }
      );
  };

  return (
    <div>
      <MainNavbar></MainNavbar>
      <div className=" my-5 ">
        <h1 className="p-3 fw-bold">
          <span style={{ color: "#FFB30D" }}>Get </span>
          in Touch
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {" "}
            <input
              {...register("name")}
              type="text"
              required
              placeholder="Your Name"
              style={{ outline: "none" }}
              className="m-2 mb-4 p-2 rounded border-0 shadow w-75"
            />{" "}
            <br />
            <input
              {...register("email")}
              type="email"
              placeholder="your email"
              required
              style={{ outline: "none" }}
              className="m-2 mb-4 p-2 rounded border-0 shadow w-75"
            />{" "}
            <br />
            <textarea
              required
              rows="3"
              label="Review"
              style={{ outline: "none" }}
              placeholder="Put your Idea."
              className="m-2 mb-4 p-2 rounded border-0 shadow w-75"
              {...register("message")}
            />
          </div>
          <Button type="submit" variant="warning">
            {" "}
            SEND MESSAGE <IoMdSend />
          </Button>
        </form>
      </div>
      <NeedyInfo></NeedyInfo>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
