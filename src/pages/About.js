import React from "react";
import facingfront from "../assets/money.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${facingfront})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        WE DEAL IN LAND DOCUMENTATION,
        BUILDING PLANS, SURVEYING, 
        BUYING AND SELLING OF LANDS.
        </p>
      </div>
    </div>
  );
}

export default About;