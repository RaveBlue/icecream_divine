import "./ContactUs.css";
import React, { useState } from "react";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you for contacting us! We will reach out soon!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact-form">
      <h2 className="cf-header">We would love to hear from you!</h2>
      <form onSubmit={handleSubmit} className="contact-input">
        <input
          type="text"
          name="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          className="contactFirstName"
          required
        />
        <input
          type="text"
          name="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          className="contactLastName"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="contactEmail"
          required
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="contactMessage"
          required
        />
        <button className="contact-form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
