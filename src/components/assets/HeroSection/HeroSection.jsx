import {React,useEffect} from "react";
import Heroes from "./Heroes";

import gsap from "gsap";
import { homeObjOne,homeObjTwo } from "./HeroData";
const HeroSection = () => {
  useEffect(() => {
    const moveElement = () => {
      const scrollPosition = window.scrollY;
      
      gsap.to('.plane', { x: scrollPosition,y: -scrollPosition, ease: 'none' });
      
    };

    window.addEventListener('scroll', moveElement);

    return () => {
      window.removeEventListener('scroll', moveElement);
    };
  }, []);

  return (
    <div className="main">
      <div className="container _shapeAnimation">
        <Heroes {...homeObjOne} />
        <Heroes {...homeObjTwo} />
        {/* <Heroes {...homeObjThree} />
        <Heroes {...homeObjFour} />*/}
        <img src="./img/plane.png" alt="" className="plane" />
      </div> 
      <div />
    </div>
  );
};

export default HeroSection;
