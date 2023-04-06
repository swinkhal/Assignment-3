import React, { useState, useRef } from "react";
import "./support.css";
import contact from "../../p-images/contact.png";
import Typography from "@mui/material/Typography";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <Typography sx={{ py: 3, fontFamily: "Sono" }}>
      Your Message is sent successfully. Our team will get back to you as soon
      as possible.
    </Typography>
  );
};

function Support() {
  const [result, showResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dtimd0k",
        "ds-template",
        form.current,
        "Y3cUPmlGmNZfS3sZ_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <div>
      <Typography
        textAlign="center"
        variant="h4"
        sx={{ pt: 10, fontWeight: "bold" }}
        fontFamily="Optima"
      >
        {" "}
        Contact Us
      </Typography>
      <div class="grid-container">
        <div class="grid-item grid-item-1">
          <img src={contact} alt="cont" className="con-image" />
        </div>
        <div class="grid-item grid-item-2">
          <form ref={form} onSubmit={sendEmail}>
            <label className="input-label">Name</label>
            <br />
            <input
              type="text"
              name="fullName"
              placeholder="What is your name?"
              className="form-input"
            />
            <br />
            <label className="input-label">Email id</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="What is your email id"
              className="form-input"
              required
            />
            <br />
            <label className="input-label">Message</label>
            <br />
            <textarea
              name="message"
              placeholder="Please enter your message.."
              className="form-message"
              required
            />
            <br />
            <button type="submit" className="form-submit">
              Submit
            </button>
            <div>{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
