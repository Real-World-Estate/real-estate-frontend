import React from "react";
import { vector } from "../assets";

function Services() {
  return (
    <div className="service mg-top-lg" id="services">
      <div className="title mg-top-lg">
        <h2>
          <span>Services We</span> provide
        </h2>
        <p className="mg-top">
          Features which will build your trust back on Real Estate
        </p>
      </div>
      <div className="content mg-top-lg">
        <div className="item">
          <img src={vector.vectorMotel} alt="Service content" />
          <h4>Real Estate Services</h4>
          <p className="text">
            We offer comprehensive real estate services, from property
            management and leasing to property sales and valuations. Our goal is
            to make the real estate journey seamless and stress-free for both
            landlords and tenants.
          </p>
        </div>
        <div className="item">
          <img
            src={vector.fumigation}
            alt="Service content"
            style={{ height: "18rem" }}
          />
          <h4>Cleaning Services</h4>
          <p className="text">
            Our professional cleaning services division is staffed by highly
            trained professionals who are equipped with the latest cleaning
            tools and techniques. We understand the importance of a clean and
            hygienic space, whether it's a home, office, or commercial property.
          </p>
        </div>
        <div className="item">
          <img
            src={vector.detergent}
            alt="Service content"
            style={{ height: "18rem" }}
          />
          <h4>Detergent Production</h4>
          <p className="text">
            Our range of products includes laundry detergents, floor cleaners,
            and disinfectants, among others. At Competent Property Group Ltd, we
            are committed to providing exceptional services that exceed your
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
