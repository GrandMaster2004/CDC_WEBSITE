import React from "react";
import gsap from "gsap";
import "./HeroSection.css";
import { useEffect } from "react";

function Heroes({ headline, description, imgStart, img, alt }) {

  useEffect(() => {
    const moveElement = () => {
      const scrollPosition = window.scrollY;
      
      
  gsap.to('.photu', { y: Math.sin(scrollPosition * 0.2) * 20, ease: 'none' });
    };

    window.addEventListener('scroll', moveElement);

    return () => {
      window.removeEventListener('scroll', moveElement);
    };
  }, []);
  return (
    <>
      <div className="home__hero-section _container">
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1 className="heading">{headline}</h1>
                <div className="border_animation ml-0"></div>
                <p className="home__hero-subtitle">{description}</p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img photu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heroes;
