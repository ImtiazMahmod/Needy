import React from "react";
import CompanyInfo from "../Shared/CompanyInfo";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ReviewSlider from "../Shared/ReviewSlider/ReviewSlider";
import HomeBanner from "./HomeBanner";
import HomeExplore from "./HomeExplore";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <CompanyInfo></CompanyInfo>
      <HomeExplore></HomeExplore>
      <ReviewSlider></ReviewSlider>
      <Footer></Footer>
    </div>
  );
};

export default Home;
