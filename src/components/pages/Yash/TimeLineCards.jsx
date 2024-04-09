import React from "react";
import { DiAndroid } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";
import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
// import variants from "./variants.js"

const TimeLineCards = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 10,
      speed: 50,
      glare: false,
      "max-glare": 1,
    });
  });
  return (
    <>
      <div className=" timeline">
        <motion.div
          // variants={fadeIn("right", 0.1)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main left-roadmap  "
        >
          <DiAndroid className="img" />
          <div className="text-box tilt">
            <h2>TItle.</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus natus illo nemo iure autem eveniet quibusdam assumenda
              sed,
            </p>
            <span className="left-roadmap-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          // variants={fadeIn("left", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main right-roadmap"
        >
          <DiCodeigniter className="img" />
          <div className="text-box tilt">
            <h2>TItle..</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus natus illo nemo iure autem eveniet quibusdam assumenda
              sed,
            </p>
            <span className="right-roadmap-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          // variants={fadeIn("right", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main left-roadmap"
        >
          <DiCodeigniter className="img" />
          <div className="text-box tilt">
            <h2>TItle..</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus natus illo nemo iure autem eveniet quibusdam assumenda
              sed,
            </p>
            <span className="left-roadmap-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          // variants={fadeIn("left", 0.3)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main right-roadmap"
        >
          <DiCodeigniter className="img" />
          <div className="text-box tilt">
            <h2>TItle..</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus natus illo nemo iure autem eveniet quibusdam assumenda
              sed,
            </p>
            <span className="right-roadmap-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          // variants={fadeIn("right", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main left-roadmap"
        >
          <DiCodeigniter className="img" />
          <div className="text-box tilt">
            <h2>TItle..</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus natus illo nemo iure autem eveniet quibusdam assumenda
              sed,
            </p>
            <span className="left-roadmap-arrow"></span>
          </div>
        </motion.div>
        <motion.div
          // variants={fadeIn("left", 0.3)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.7 }}
          className="roadmap_main right-roadmap"
        >
          <DiCodeigniter className="img" />
          <div className="text-box tilt">
            <h2>TItle..</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus natus illo nemo iure autem eveniet quibusdam assumenda
              sed,
            </p>
            <span className="right-roadmap-arrow"></span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TimeLineCards;
