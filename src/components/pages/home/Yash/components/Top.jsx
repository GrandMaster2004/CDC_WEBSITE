import React from "react";

const Top = () => {
  //   const toTop = document.querySelector(".to-top");

  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 100) {
  //       toTop.classList.add("active");
  //     } else {
  //       toTop.classList.remove("active");
  //     }
  //   });
  return (
    <>
      <a href="#" className="to-top">
        <i className="bx bxs-up-arrow" style={{ color: "#000000" }}></i>
      </a>
    </>
  );
};

export default Top;
