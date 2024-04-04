import React from 'react'
import "./Hero.css"
import { useEffect } from 'react';
import gsap from 'gsap';
import Animat from '../Animation/animate'
const Herocard = () => {
  useEffect(() => {
    const moveElement = () => {
      const scrollPosition = window.scrollY;
      
      gsap.to('.main_left', { x: -scrollPosition, ease:"circ" });
      gsap.to('.logo', { x: scrollPosition, ease:"pow2" });
     
    };

    window.addEventListener('scroll', moveElement);

    return () => {
      window.removeEventListener('scroll', moveElement);
    };
  }, []);
  return (
    
    <div>
         <div className="home">
     
     <span className="top_shadow"></span>
     <div className="main space" style={{background:'url(img/space.png) no-repeat cover'}}>
       <div className="main_left">
         Coders & Developers
         {/* <br /> */}
         <span className="club_text" > Club</span>
         
       </div>
       
       <div className="main_right">
       {/* <img src="img/logo.png" alt="" className="logo" /> */}
      
     <Animat/>
       </div>
       <div className="circle_shadow">
         <span className="left_shadow shadow_common"></span>
         <span className="right_shadow shadow_common"></span>
       </div>
     </div>

    
   </div>
    </div>
  )
}

export default Herocard