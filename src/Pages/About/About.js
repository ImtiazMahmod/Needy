import React from "react";
import Footer from "../Shared/Footer/Footer";
import MainNavbar from "../Shared/Navbar/Navbar";
import NeedyInfo from "./NeedyInfo";

const About = () => {
  return (
    <div>
      <MainNavbar></MainNavbar>
      <h1 className="mt-5">About Us</h1>

      <div className="needyInfo">
        <NeedyInfo />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
