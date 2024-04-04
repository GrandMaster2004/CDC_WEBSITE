import React from "react";
import Goal_card from "../components/Goal_card";
import "./Goal.css";
// import { motion } from "framer-motion";
// import { fadeIn } from "./variants";
import Our_goal from "../components/Our_goal";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
const Goal = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 2,
      speed: 10,
      glare: true,
      "max-glare": 0.2,
    });
  });
  return (
    <div className="goal_content">
      <div className="goal_left tilt grow_hover" style={{ "--clr": "#fb9014" }}>
        <Goal_card />
      </div>
      <div
        className="goal_right tilt grow_hover"
        style={{ "--clr": "#7b8fd9" }}
      >
        <Our_goal />
      </div>
    </div>
  );
};

export default Goal;
