import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../images/logo.png";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo-wrapper">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/Products" className="nav-link">
              Products
            </Link>
            <Link to="/Orders" className="nav-link">
              My Orders
            </Link>

            {/* Shopping Cart */}
            <Link to="/Cart" className="cart-link">
              <FaShoppingCart size={24} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>

            <Link to="/Login" className="btn btn-login">
              Login
            </Link>

            <Link to="/SignUp" className="btn btn-signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
