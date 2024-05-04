import React from "react";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import { useParams } from "react-router-dom";
import { data } from "../assets/DATA/store";

function Properties() {
  const params = useParams();

  const property = data.filter((dt) => dt.id === params.propertyID)[0];
  const statsProp = Object.entries(property.statistics);
  return (
    <div className="property">
      <h1>our {property?.category}</h1>
      <div className="property-pics">
        {property?.photos?.map((val, index) => (
          <img src={val} alt="" key={index} />
        ))}
      </div>
      <div className="property-title">
        <div className="title">
          <h2 className="primary">{`Our ${property?.category}`}</h2>
          <h2 className="secondary">Avg: $40, 000</h2>
        </div>
      </div>
      <div className="property-desc">
        <h3 className="secondary">Description</h3>
        <div className="desc">
          {property?.description?.map((prop, index) => {
            return <p key={index}>{prop}</p>;
          })}
        </div>
      </div>

      <div className="property-overview">
        <h3 className="primary">Overview</h3>
        <div className="overview">
          {statsProp.map((val, index) => (
            <div className="item" key={index}>
              <span>
                <b>{val[1]}</b>
              </span>
              <span style={{ textTransform: "capitalize" }}>{val[0]}</span>
            </div>
          ))}
        </div>
      </div>

      <ContactUs />

      <Footer />
    </div>
  );
}

export default Properties;
