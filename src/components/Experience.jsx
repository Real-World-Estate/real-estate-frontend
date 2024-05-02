import React from "react";
import Button from "./Button";
import { icon } from "../assets";

function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="experience-container">
        <div className="content-text">
          <h2>5+ Years Of Real Estate Experience</h2>
          <p>
            Our team of dedicated professionals is here to help you with all
            your needs, ensuring that you have a positive and hassle-free
            experience. Contact us today to learn more about how we can assist
            you.
          </p>
          <Button color="primary" link={"/#contact-us"} text={"Contact Us"} />
        </div>
        <div className="content-box">
          <div className="item">
            <h2>770+</h2>
            <p>Listing For Sale</p>
          </div>
          <div className="item-container">
            <div className="item">
              <h2>80+</h2>
              <p>Listing For Rent</p>
            </div>
            <div className="item">
              <h2>836+</h2>
              <p>Property Sold</p>
            </div>
          </div>
        </div>
      </div>
      <img src={icon.iconBlackUp} alt="Black icon" className="icon-up" />
      <img src={icon.iconBlackDown} alt="Black icon" className="icon-down" />
    </div>
  );
}

export default Experience;
