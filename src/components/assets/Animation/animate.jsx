import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./animate.css"
const Animate = () => {
  useEffect(() => {
    const moveElement = () => {
      const scrollPosition = window.scrollY;
      
      gsap.to('.astro1', { x: scrollPosition, ease: 'none' });
      gsap.to('.astro2', { x: -scrollPosition, ease: 'none' });
  gsap.to('.asteroid', { x: scrollPosition, y: scrollPosition, ease: 'none' });
  gsap.to('.satellite', { x:scrollPosition, y: -scrollPosition, ease: 'none' });
  gsap.to('.astro1', { y: Math.sin(scrollPosition * 0.1) * 15, ease: 'bounce' });
  gsap.to('.astro2', { y: Math.cos(scrollPosition * 0.1) * 15, ease: 'bounce' });
    };

    window.addEventListener('scroll', moveElement);

    return () => {
      window.removeEventListener('scroll', moveElement);
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <img className="astro1" src="img/astro2.png" alt="" style={{ position: 'fixed',zIndex:'1' ,left:'5%'}} />
      <img className="astro2" src="img/astro1.png" alt="" style={{ position: 'fixed',zIndex:'7' }} />
      <img className="asteroid" src="img/asteroid.png" alt="" style={{width:'auto',height:'30%', position: 'fixed' ,zIndex:'6', left:'15%',top:'-20%'}} />
      <img className="satellite" src="img/satellite.png" alt="" style={{width:'auto',height:'40%', position: 'fixed',zIndex:'6',left:'20%',top:'70%' }} />
    </div>
  );
};

export default Animate;
