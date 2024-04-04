import React from "react";
import girl from "../assets/image/girl.svg";
const Testimonial = () => {
  return (
    <>
      {/* <!-- testimonial design --> */}
      <div className="testimonial-container">
        <h2 className="heading">
          Important <span>Notice</span>
        </h2>
        <div className="testimonial-wrapper">
          <div className="testimonial-box mySwiper">
            <div className="testimonial-content swiper-wrapper">
              <div className="testimonial-slide swiper-slide">
                <img src={girl} alt="img" />
                <h3>Yash Vardhan</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  deserunt mollitia doloribus veniam velit aliquam voluptate
                  porro, corrupti placeat iure eum pariatur odio! Commodi, amet
                  voluptatum ut rerum ea molestias natus maxime quos odit non
                  nam recusandae id numquam officia corrupti! Eveniet odit quis
                  corporis ullam eos! Aliquid rerum, sint cupiditate nihil
                  expedita, ducimus iure provident illum distinctio placeat
                  reiciendis.
                </p>
              </div>
              <div className="testimonial-slide swiper-slide">
                <img src={girl} alt="img" />
                <h3>Yash Vardhan gond</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  deserunt mollitia doloribus veniam velit aliquam voluptate
                  porro, corrupti placeat iure eum pariatur odio! Commodi, amet
                  voluptatum ut rerum ea molestias natus maxime quos odit non
                  nam recusandae id numquam officia corrupti! Eveniet odit quis
                  corporis ullam eos! Aliquid rerum, sint cupiditate nihil
                  expedita, ducimus iure provident illum distinctio placeat
                  reiciendis.
                </p>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
