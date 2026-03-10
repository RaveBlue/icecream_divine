import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import GreenTea from "../images/GreenTea.png";
import Strawberry from "../images/Strawberry.png";
import BlueMint from "../images/BlueMint.png";
import Cookiescream from "../images/Cookiescream.png";
import PeanutButter from "../images/PeanutButter.png";
import Cake from "../images/Cake.png";
import customerone from "../images/customerone.jpg";
import customertwo from "../images/customertwo.jpg";
import customerthree from "../images/customerthree.jpg";
import customerfour from "../images/customerfour.jpg";
import customerfive from "../images/customerfive.jpg";
import customersix from "../images/customersix.jpg";

const Home = () => {
  return (
    <div id="home-container">
      <div className="hero-text-box">
        <h1 className="heading-primary">
          Healthy Protein Ice-cream that tastes delicious!
        </h1>
        <p className="description">
          Ice-cream that will help you eat healthy again. Amazing flavors and
          nutritional needs will be reached eating Ice-cream. We have sold
          150,000+ Ice-cream tubs with many flavors!
        </p>

        <div className="delivered-tubs">
          <div className="delivered-imgs">
            <img src={customerone} alt="Customer Photo" />

            <img src={customertwo} alt="Customer Photo" />

            <img src={customerthree} alt="Customer Photo" />

            <img src={customerfour} alt="Customer Photo" />

            <img src={customerfive} alt="Customer Photo" />

            <img src={customersix} alt="Customer Photo" />
          </div>
          <p className="delivered-text">
            <span>150,000+ </span>Ice-cream tubs sold!
          </p>
        </div>

        <h2 className="subheader">Protein Ice-cream</h2>
        <div className="hero-img-box">
          <div className="ice-cream-main">
            <img src={BlueMint} alt="Blue Mint Chip Ice-cream" />
          </div>
        </div>
      </div>
      <section className="section-how ">
        <div className="container">
          <span className="subheading">Reasons to try this Ice-cream </span>
          <h2 className="heading-secondary">
            {" "}
            Your daily dose of healthy protein Ice-cream
          </h2>
        </div>
        <div className="container grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary"> (Blue Mint Chip)</h3>
            <p className="step-description">
              Never again waste time thinking about what to eat! These
              ice-creams make sure you get all the nutrients and protein you
              need, no matter what diet you follow!
            </p>
          </div>

          <div className="step-img-box">
            <img src={BlueMint} className="step-img" alt="Blue mint" />
          </div>

          <div className="step-img-box">
            <img
              src={Cookiescream}
              className="step-img"
              alt="Cookies and cream"
            />
          </div>
          <div className="step-text-box">
            <p className="step-number">02</p>
            <h3 className="heading-tertiary">
              {" "}
              Healthier alternative to Ice-cream (Cookies and Cream)
            </h3>
            <p className="step-description">
              You can choose an Ice-cream flavor based on the flavor you want to
              try and based on calorie amount.
            </p>
          </div>

          <div className="step-text-box">
            <p className="step-number">03</p>
            <h3 className="heading-tertiary"> Tell us what you like (Cake)</h3>
            <p className="step-description">
              This ice-cream makes sure you get all the nutrients and vitamins
              you need. We can recommend a flavor to you depending on your likes
              and by products you buy from our shop. We also recommend
              ice-creams based on fitness goals.
            </p>
          </div>

          <div className="step-img-box">
            <img src={Cake} className="step-img" alt="Cake Ice-cream" />
          </div>
        </div>
      </section>

      <section className="section-meals">
        <div className="container center-text">
          <span className="subheading">Ice-Cream</span>
          <h2 className="heading-secondary">
            Flavors of our healthy Ice-Cream
          </h2>
        </div>

        <div className="container grid grid--3-cols margin-bottom-md">
          <div className="meal">
            <img src={PeanutButter} className="meal-img" alt="Peanut Butter" />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag">High In Protein</span>
              </div>
              <p className="meal-title">Peanut Butter Swirl </p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon name="flame-outline"></ion-icon>
                  <span>310 Calories</span>
                </li>

                <li className="meal-attribute"> Protein 20g </li>
                <li className="meal-attribute"> 4.9 rating (438) </li>
              </ul>
            </div>
          </div>

          <div className="meal">
            <img src={GreenTea} className="meal-img" alt="Green tea" />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag">High In Protein</span>
              </div>
              <p className="meal-title">Green Tea </p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon name="flame-outline"></ion-icon>
                  <span>310 Calories</span>
                </li>

                <li className="meal-attribute"> Protein 20g </li>
                <li className="meal-attribute"> 4.9 rating (437) </li>
              </ul>
            </div>
          </div>

          <div className="meal">
            <img
              src={Strawberry}
              className="meal-img"
              alt="Strawberry Chocolate"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag">High In Protein</span>
              </div>
              <p className="meal-title"> Strawberry Chocolate</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon name="flame-outline"></ion-icon>
                  <span>309 Calories</span>
                </li>

                <li className="meal-attribute"> Protein 20g </li>
                <li className="meal-attribute"> 4.9 rating (430) </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container all-recipes">
          <Link to="/Products" className="link3">
            See all Ice-Cream Flavors &rarr;
          </Link>
        </div>
      </section>

      <section className="section-cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">
                Get your first ice-cream tub for free!
              </h2>
              <p className="cta-text">
                {" "}
                Healthy, tasty Ice-cream is waiting for you. Start eating well
                today. You can cancel or pause anytime. And the first Ice-cream
                tub is on us!
              </p>

              <form className="cta-form" action="#">
                <div>
                  <label htmlFor="full-name"> Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="select-where">
                    Where did you hear from us?
                  </label>
                  <select id="select-where" required>
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="youtube">Podcast</option>
                    <option value="youtube">Instagram ad</option>
                    <option value="youtube">Others</option>
                  </select>
                </div>

                <button className="btn btn--form">Sign up now</button>
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="woman enjoying ice-cream"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
