import React from "react";
import "./About.css";
import Cards from "./Cards";
import FaQ from "../../assets/FaQ/FaQ";
import TechStack from "../../assets/Techstack/Techstack";
function About() {
  return (
    <div>
      <div className="cont">
        <div className="left">
          <div>
            <div className="title">
              <h2>COMMUNICATE.</h2>
              <h2>DEVELOP. CREATE.</h2>
            </div>
            <div className="txt">
            Our first aim is not to build our society high but to build our college’s coding community high.
            </div>
            <button className="btn">Get Started</button>
          </div>
        </div>
        <div className="right">
          <div className="imgy">   
          <img src="img/logo.png" alt="" />    
             </div>
        </div>
      </div>
      <Cards/>
      <TechStack/>
      <FaQ/>
    </div>
  );
}

export default About;
