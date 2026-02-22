import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Shop</h3>
            <Link to="/Review" className="footer-link">
              Review
            </Link>
          </div>

          <div className="footer-column">
            <h3>Contact Information</h3>
            <Link to="/ContactUs" className="footer-link">
              Contact Us
            </Link>
          </div>

          <div className="footer-column">
            <h3>Business</h3>
            <Link to="/AboutUs" className="footer-link">
              About Us
            </Link>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright © 2026 by Divine, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
