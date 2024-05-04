import React from "react";
import { foot } from "../assets";

function Footer() {
  return (
    <footer className="footer mg-top-lg">
      <div className="footer-container">
        <div className="footer-about item">
          <h3>
            About Real <span>Estate</span> Competent <span>Property</span>{" "}
          </h3>
          <span className="text">
            Welcome to Competent Property Group Ltd, a multipurpose company
            dedicated to providing a diverse range of services. With a strong
            commitment to excellence, we have built a reputation for delivering
            exceptional results in real estate, building and construction, pest
            control or fumigation, professional cleaning services, and detergent
            production
          </span>
          <div className="socials">
            <a href="#facebook">
              <img src={foot.facebook} alt="Facebook icon" />
            </a>
            <a href="#twitter">
              <img src={foot.twitter} alt="Twitter icon" />
            </a>
            <a href="#instagram">
              <img src={foot.instagram} alt="Instagram icon" />
            </a>
          </div>
        </div>
        <div className="company item">
          <h3>Company</h3>
          <a href={"/#about"}>About</a>
          <a href="/#services">Features</a>
          <a href={"/#portfolio"}>Works</a>
          <a href={"/#experience"}>Careers</a>
        </div>
        <div className="help item">
          <h3>Help</h3>
          <a href={"/#about"}>Customer Support</a>
          <a href="/#services">Terms & Conditions</a>
          <a href={"/#portfolio"}>Privacy Policy</a>
        </div>
        <div className="contact item">
          <h3>Contacts</h3>
          <div className="info">
            <img src={foot.mapOutline} alt="Map" />
            <span>Molyko, Buea Cameroon</span>
          </div>
          <div className="info">
            <img src={foot.phoneOutline} alt="Map" />
            <span>652133456 / 675464351 / 692631770</span>
          </div>
          <div className="info">
            <img src={foot.mailOutline} alt="Map" />
            <span>competentprop@hotmail.com</span>
          </div>
        </div>
      </div>
      <div className="sign">
        &copy;2024 Competent <span>Property</span> - Buy, Sell, or Rent. All
        Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
