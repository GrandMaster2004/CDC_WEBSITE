import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Goal_card = () => {
  return (
    <div className="card_content">
      <div className="icon_right ">
        <MdOutlineRocketLaunch className="icon_icon" />
      </div>
      <div className="content">
        <h4 className="title">Our goal</h4>
        <p className="content_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quod
          quidem id officia iste, minima illum inventore facere hic soluta harum
          tempora dolor fuga dicta neque rem? Quidem, beatae distinctio. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Cum odio nobis
          architecto reprehenderit, doloremque aperiam quae tenetur porro ullam
          eligendi fugiat impedit eaque ea nostrum minima aspernatur optio ut
          cumque!
        </p>
      </div>
    </div>
  );
};

export default Goal_card;
