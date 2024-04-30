import React from "react";
import { image, vector } from "../assets";

function Portfolio() {
  return (
    <div className="portfolio mg-top-lg" id="portfolio">
      <div className="title mg-top-lg">
        <h4>PORTFOLIO</h4>
        <h2>Our Amazing Works</h2>
        <p className="mg-top">
          Features which will build your trust back on Real Estate
        </p>
      </div>
      <div className="portfolio-content">
        <div className="item">
          <img src={image.houseHeader} alt={"House images"} />
          <div className="portfolio-text">
            <h5>Real Estate</h5>
            <span className="text">2 Properties</span>
          </div>
        </div>
        <div className="item">
          <img src={image.housePic1} alt={"House images"} />
          <div className="portfolio-text">
            <h5>Real Estate</h5>
            <span className="text">2 Properties</span>
          </div>
        </div>
        <div className="item">
          <img src={vector.portfolioDetergent} alt={"House images"} />
          <div className="portfolio-text">
            <h5>Detergent</h5>
            <span className="text">2 Types</span>
          </div>
        </div>
        <div className="item">
          <img src={image.manPic2} alt={"House images"} />
          <div className="portfolio-text">
            <h5>Cleaning Services</h5>
            <span className="text">5+ Properties</span>
          </div>
        </div>
        <div className="item">
          <img src={image.manPic1} alt={"House images"} />
          <div className="portfolio-text">
            <h5>Cleaning Services</h5>
            <span className="text">5+ Properties</span>
          </div>
        </div>
        <div className="item">
          <img src={image.manPic7} alt={"House images"} />
          <div className="portfolio-text">
            <h5>Cleaning Services</h5>
            <span className="text">5+ Properties</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
