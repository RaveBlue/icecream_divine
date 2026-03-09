import "./AboutUs.css";
import React from "react";
import Logodivine from "../images/Logodivine.png";

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-main-title">Divine Protein Ice-cream</h1>

        <div className="about-hero">
          <img
            className="about-logo"
            src={Logodivine}
            alt="Divine Ice Cream Logo"
          />
        </div>

        <h2 className="about-section-title">About Us</h2>

        <p className="about-tagline">
          Divine Protein Ice-cream. Your daily dose of healthy Ice-cream.
        </p>

        <div className="about-content">
          <p className="about-text">
            Our Ice-cream is for those looking to have a healthy lifestyle.
            <strong> Our mission</strong> is to help you eat healthy again, with
            amazing Ice-cream flavors high in protein.
          </p>

          <p className="about-text">
            We have many flavors to choose from. You can choose an Ice-cream
            flavor based on the calorie amount. These Ice-creams will help you
            reach your fitness goals!
          </p>
        </div>

        <div className="about-contact">
          <h3 className="contact-title">Get In Touch</h3>
          <p className="contact-item">
            <strong>Email:</strong> hello@divineicecream.com
          </p>
          <p className="contact-item">
            <strong>Phone:</strong> 333-3535-1313
          </p>
          <p className="contact-item">
            <strong>Location:</strong> Texas
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
