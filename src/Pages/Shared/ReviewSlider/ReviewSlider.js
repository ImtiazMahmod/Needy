import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [reviews, setReviews] = useState([]);
  ///load reviews
  useEffect(() => {
    axios.get("http://localhost:5000/review").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div>
      <Container className="my-5">
        <h5 className="text-warning mt-5">REVIEWS</h5>
        <h3 className="fw-bold">WHY CUSTOMER LOVE US</h3>
        <Row container>
          <Col xs={4} sm={4} md={6}>
            <Container>
              <Slider {...settings}>
                {reviews?.map((review) => (
                  <div>
                    <div sx={{ textAlign: "left", p: 3, mt: 3 }}>
                      <p className="text-secondary">"{review?.review}"</p>
                      <div
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          my: 3,
                        }}
                      >
                        {" "}
                        <h5 className="text-secondary">{review?.name}</h5>
                        <Rating
                          initialRating={review?.rating}
                          className="text-warning fs-5"
                          {...{
                            emptySymbol: (
                              <AiOutlineStar className="material-icons">
                                star_border
                              </AiOutlineStar>
                            ),
                            fullSymbol: (
                              <AiFillStar className="material-icons">
                                star_rate
                              </AiFillStar>
                            ),
                            fractions: 2,
                          }}
                          readonly
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </Container>
          </Col>
          <Col sm={4} md={6} className="d-none d-sm-block">
            <BsFillChatRightQuoteFill
              style={{
                color: "tomato",

                fontSize: "5.5em",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ReviewSlider;
