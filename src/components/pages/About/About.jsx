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
              <h2>Communicate.</h2>
              <h2>Collaborate. Create.</h2>
            </div>
            <div className="txt">
              Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, repudiandae! sit amet consectetur 
              illo.
            </div>
            <button className="btn">Get Started</button>
          </div>
        </div>
        <div className="right">
          <div className="imgy">   
          <img src="img/logo.png" alt="" />       </div>
        </div>
      </div>
      <Cards/>
      <TechStack/>
      <FaQ/>
    </div>
  );
}

export default About;
