import React, { useState, useEffect } from "react";
import main2 from "../image/machine.svg";
import main3 from "../image/girl_rocket.svg";
import paper_plane from "../image/icon_rotation3.svg";
import box_icon1 from "../image/axa.svg";
import box_icon2 from "../image/ok.svg";
import "./Home.css";
import About from "../components/About";
import Goal from "./Goal";
import Roadmap from "../components/Roadmap";
import { motion } from "framer-motion";

const Home = () => {
  const [imgtag, useImgtag] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      useImgtag((prevImgtag) => !prevImgtag);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let glows = document.querySelectorAll(".grow_hover");
    glows.forEach((glow) => {
      glow.onmousemove = function (e) {
        let x = e.pageX - glow.offsetLeft;
        let y = e.pageY - glow.offsetTop;
        glow.style.setProperty("--x", x + "px");
        glow.style.setProperty("--y", y + "px");
      };
    });
  }, []);

  return (
    <div className="home">
      <span className="top_shadow"></span>
      <div className="main">
        <motion.div className="main_left">
          <div className="coders_title">
            <span className="coders_text">Coders & Developers</span>
            <br />
            <span className="club_text">Club</span>
            <div className="text_bottom">
              <div className="left_text">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  optio explicabo vitae libero at pariatur commodi eius officiis
                  debitis excepturi?
                </p>
              </div>
              <div className="right_text">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit nihil maxime magnam quas adipisci placeat
                  asperiores nesciunt.
                </p>
              </div>
            </div>
          </div>
          <span className="spot_left"></span>
        </motion.div>

        <motion.div className="main_right">
          <div className="circle_outer circle_outer1">
            <span className="rotation">
              <img src={paper_plane} className="rocket" alt="img" />
            </span>
            <span className="rotation">
              <img src={paper_plane} className="rocket1" alt="img" />
            </span>
          </div>
          <div className="icon_shadow">
            <img src={box_icon1} alt="img" className="icon_box" />
          </div>
          <div className="icon_shadow1">
            <img src={box_icon2} alt="img" className="icon_box" />
          </div>
          <span className="spot_right1 shadow_common"></span>
          <motion.div
            animate={{
              scale: [1, 1, 1, 1, 1],
              rotate: [0, 0, 360, 180, 0],
              borderRadius: ["50%", "50%", "50%", "50%", "50%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0,
            }}
            className="circle_inner border-gradient"
          ></motion.div>

          {imgtag ? (
            <motion.img
              animate={{
                scale: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
              }}
              src={main3}
              alt="img"
              className="boy_img"
            />
          ) : (
            <motion.img
              animate={{
                scale: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              src={main2}
              alt="img"
              className="boy_img"
            />
          )}
        </motion.div>
        {/* <motion.div className="circle_shadow">
          <span className="left_shadow shadow_common"></span>
          <span className="right_shadow shadow_common"></span>
        </motion.div> */}
      </div>
      <span className="spot_common spot_right3"></span>
      <span className=" spot_common spot_right2"></span>
      <span className="spot_common spot_right4"></span>
      <span className="spot_common spot_right5"></span>
      {/* <div className="icon_left ">
        <MdOutlineRocketLaunch className="icon_icon" />
      </div>
      <div className="icon_right">
        <IoBulbOutline className="icon_icon" />
      </div> */}
      <About />
      <Goal />
      {/* <Testimonial /> */}
      <Roadmap />
    </div>
  );
};

export default Home;
