import React from "react";
import { about, icon, image, profile, vector } from "../assets";
import Button from "./Button";

function About() {
  return (
    <div className="about mg-top-lg" id="about">
      <div className="about-content">
        <div className="about-images">
          <img
            className="pic1"
            src={image.manPic1}
            alt={"About pics"}
            style={{ borderRadius: "10px" }}
          />
          <img
            className="pic2"
            src={image.manPic2}
            alt={"About pics"}
            style={{ borderRadius: "10px" }}
          />
          <img
            className="pic3"
            src={image.manPic7}
            alt={"About pics"}
            style={{ borderRadius: "10px" }}
          />
          <div className="about-review">
            <div className="about-review-people">
              <img src={profile.profile1} alt={"Some profile pics"} />
              <img src={profile.profile2} alt={"Some profile pics"} />
              <img src={profile.profile3} alt={"Some profile pics"} />
              <img src={profile.profile4} alt={"Some profile pics"} />
              <img src={profile.profile5} alt={"Some profile pics"} />
            </div>
            <h3>
              <span className="num">15K</span>
              <span className="text">+ Positive Reviews</span>
            </h3>
            <img className="icon-star" src={icon.iconStar} alt="My Icon Star" />
          </div>
        </div>
        <div className="about-us">
          <img src={about.aboutLogo} alt="About us logo" />
          <h4>• WHO WE ARE</h4>
          <h2>We Are Offering The Best Real Estate Property For All</h2>
          <p>
            Welcome to Competent Property Group Ltd, a multipurpose company
            dedicated to providing a diverse range of services. With a strong
            commitment to excellence, we have built a reputation for delivering
            exceptional results in real estate, building and construction, pest
            control or fumigation, professional cleaning services, and detergent
            production.
          </p>
          <p>
            At Competent Property Group Ltd, our real estate division is driven
            by a team of experienced professionals who are dedicated to ensuring
            the satisfaction of our clients. We offer comprehensive real estate
            services, from property management and leasing to property sales and
            valuations. Our goal is to make the real estate journey seamless and
            stress-free for both landlords and tenants.In addition to our real
            estate expertise, we are also committed to maintaining the
            cleanliness and safety of your property.
          </p>
          <p>
            Our pest control or fumigation division utilizes the latest
            techniques and products to eliminate pests, ensuring a healthy and
            comfortable environment for you and your family or employees.Our
            professional cleaning services division is staffed by highly trained
            professionals who are equipped with the latest cleaning tools and
            techniques. We understand the importance of a clean and hygienic
            space, whether it's a home, office, or commercial property.
          </p>
          <div className="about-us-icons">
            <div className="content">
              <div className="icon-container">
                <img
                  src={icon.iconPerson}
                  alt="A persons logo"
                  className="icon"
                />
              </div>
              <div className="text">
                <span className="num">55K</span>
                <span className="main">Satisfied People</span>
              </div>
            </div>
            <div className="content">
              <div className="icon-container">
                <img
                  src={icon.iconVerified}
                  alt="A verified icon"
                  className="icon"
                />
              </div>
              <div className="text">
                <span className="num">11K</span>
                <span className="main">Verified Property</span>
              </div>
            </div>
          </div>
          <Button
            STYLE="mb-top-lg"
            color={"primary"}
            text={"Contact Us"}
            link={"/#contact-us"}
          />
        </div>
      </div>
      <img
        src={vector.vectorDots}
        alt={"Beautiful pictures"}
        className="vector-top"
      />
      <img
        src={vector.vectorDots}
        alt={"Beautiful pictures"}
        className="vector-btm"
      />
      <img
        src={icon.iconBatch}
        alt={"Beautiful pictures"}
        className="icon-batch"
      />
    </div>
  );
}

export default About;
