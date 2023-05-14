import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/mnyctybg.gif";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>

      
       
        <div className="headerContainer">
          
          <h1> Welcome to Money City. </h1>
        
          <Link to="/menu">
           <button>LOCATIONS</button>
          </Link>
         </div>
    </div>
  );
}

export default Home;