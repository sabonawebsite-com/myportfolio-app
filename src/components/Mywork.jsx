import React from "react";
import "./Mywork.css";
import theme from "../assets/images/theme_pattern.svg";
import mywork_data from "../assets/mywork_data";

const Mywork = () => {
  return (
    <div className="mywork" id="mywork">
      <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src={theme} alt="" />
      </div>
      <div className="mywork-contener">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="contain">
              <img className="my-work-img" src={work.w_img} alt="Project image" />
              <p>{work.w_no}</p>
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
            </div>
          );
        })}
      </div>
      <div className="show-more">
      </div>
    </div>
  );
};

export default Mywork;