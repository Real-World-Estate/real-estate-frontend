import React from "react";
import { image, pictures } from "../assets";

function Blogs() {
  return (
    <div className="blog" id="blog">
      <h2>Blogs</h2>
      <div className="blog-section mg-top-lg">
        <div className="main">
          <div className="main-item">
            <img src={image.housePic1} alt="House Pics" />
            <h3>
              House Hunting in a Hot Market? Here's How to Stay Cool (and
              Competitive)!
            </h3>
            <p>
              The real estate market is booming! While that means a lot of great
              options for potential buyers, it can also feel overwhelming,
              especially for first-time homebuyers.
            </p>
            <button className="btn btn-secondary">Read More...</button>
          </div>
          <div className="main-item">
            <img src={image.housePic2} alt="House Pics" />
            <h3>
              Rising prices and lightning-fast sales can leave you feeling
              discouraged.
            </h3>
            <p>
              But fear not, house hunters! This post will equip you with the
              knowledge and strategies you need to navigate a hot market and
              find your dream home
            </p>
            <button className="btn btn-secondary">Read More...</button>
          </div>
          <div className="main-item">
            <img src={image.manPic1} alt="House Pics" />
            <h3> Breathe Easy and Live Clean with Competent Property</h3>
            <p>
              It's about creating a healthy and comfortable environment for you
              and your loved ones, free from allergens, pests, and the lingering
              effects of dust.
            </p>
            <button className="btn btn-secondary">Read More...</button>
          </div>
          <div className="main-item">
            <img src={image.manPic2} alt="House Pics" />
            <h3>The power of proactive pest control</h3>
            <p>
              Discover how fumigation can prevent infestations before they
              start, allowing you to enjoy your home pest-free all year round.
            </p>
            <button className="btn btn-secondary">Read More...</button>
          </div>
          <div className="main-item">
            <img src={pictures.detergentLab} alt="House Pics" />
            <h3>The magic of stain removal</h3>
            <p>
              Learn how our powerful stain-fighting formulas tackle even the
              toughest messes, leaving your clothes looking spotless.
            </p>
            <button className="btn btn-secondary">Read More...</button>
          </div>
          <div className="main-item">
            <img src={pictures.detergents} alt="House Pics" />
            <h3>Color protection redefined</h3>
            <p>
              Discover how our detergents use cutting-edge technology to keep
              your clothes vibrant wash after wash, preventing fading and
              dullness.
            </p>
            <button className="btn btn-secondary">Read More...</button>
          </div>
        </div>
        <div className="side">
          <div className="side-item">
            <img src={image.houseHeader} alt="House Pics" />
            <div className="content">
              <h3>Unique properties...</h3>
              <p>
                Discover a diverse range of houses waiting to be transformed
                into your dream home
              </p>
              <button className="btn btn-secondary">Read More...</button>
            </div>
          </div>
          <div className="side-item">
            <img src={image.housePic5} alt="House Pics" />
            <div className="content">
              <h3>Expertise you can trust...</h3>
              <p>
                Our team of local real estate professionals is here to guide you
                every step of the way.
              </p>
              <button className="btn btn-secondary">Read More...</button>
            </div>
          </div>
          <div className="side-item">
            <img src={pictures.cleaner} alt="House Pics" />
            <div className="content">
              <h3>The convenience and expertise of professional services...</h3>
              <p>
                Take the stress out of cleaning and let our experienced
                technicians handle the tough jobs.
              </p>
              <button className="btn btn-secondary">Read More...</button>
            </div>
          </div>
          <div className="side-item">
            <img src={pictures.fumigationPic} alt="House Pics" />
            <div className="content">
              <h3>Whether you're looking for a one-time deep clean or...</h3>
              <p>
                Competent Property is here to help you breathe easy and live
                clean this spring
              </p>
              <button className="btn btn-secondary">Read More...</button>
            </div>
          </div>
          <div className="side-item">
            <img src={pictures.detergentSpray} alt="House Pics" />
            <div className="content">
              <h3>The science of long-lasting freshness...</h3>
              <p>
                Explore the science behind our long-lasting fragrance technology
              </p>
              <button className="btn btn-secondary">Read More...</button>
            </div>
          </div>
          <div className="side-item">
            <img src={pictures.soapInCompany} alt="House Pics" />
            <div className="content">
              <h3>Laundry day...</h3>
              <p>
                But what if laundry day could be a breeze? we believe it can!
              </p>
              <button className="btn btn-secondary">Read More...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
