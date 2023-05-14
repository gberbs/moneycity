import React from "react";
import facingfront from "../assets/house.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${facingfront})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          
          <label htmlFor="name">Francis Nartey</label>
          
         
          < label htmlFor="name">0249542425</label>
          
          <label htmlFor="email">francisnartey304@gmail.com</label>
          
          
          
          
          
        </form>
      </div>
    </div>
  );
}

export default Contact;