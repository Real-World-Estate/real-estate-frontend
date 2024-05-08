import React from "react";
import { profile } from "../assets";

function Feedback() {
  return (
    <div className="feedback" id="testimonials">
      <div className="title">
        <span></span>
        <h2>Our Customer Feedback</h2>
        <span></span>
      </div>
      <div className="feedback-container mg-top-lg">
        <div className="item">
          <div className="head">
            <img src={profile.profile1} alt="Profile pics" />
            <div className="profile">
              <h5>Vanzy Theodore</h5>
              <span>Timely And Proffessional Sellers</span>
            </div>
          </div>
          <p>
            Absolutely Thrilled With The Seamleass Experience Using Real Estate
            Competent Property. Found M Dream Home Faster than I ever Imagined.
            The Intuitive Interface Made Browsing Listing A Breeze. Highly
            Recommend!
          </p>
        </div>
        <div className="item">
          <div className="head">
            <img src={profile.profile2} alt="Profile pics" />
            <div className="profile">
              <h5>Hyzeah A. Miriam</h5>
              <span>Cheap And Comfortable</span>
            </div>
          </div>
          <p>
            Peace Of Mind For You, Independence For Them. They'll Have The
            Freedom! Found Exactly What I was Looking For In No Time. The
            Detailed Property Descriptions And Photos Game Me A Clear Picture Of
            Each Listing. Thanks To Real Estate Competent Property, I'm Now
            Happily Settled In My New Home.
          </p>
        </div>
        <div className="item">
          <div className="head">
            <img src={profile.profile4} alt="Profile pics" />
            <div className="profile">
              <h5>Eve Shelta</h5>
              <span>Timely And Proffessional Agents</span>
            </div>
          </div>
          <p>
            I Can't Thank Real Estate Competent Property Enough For Helping Me
            Find The Perfect Apartment. The App's Search Filters Saved Me So
            Much Time, And The Customer Support Was Exceptional. Moving Has
            Never Been Easier!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
