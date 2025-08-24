import React from "react";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import doneAnimation from "../../../public/animation/done.json";
import emailAnimation from "../../../public/animation/email.json";
export default function Contact() {
  const [state, handleSubmit] = useForm("xwpqgyja");
  return (
    <div className="parent-section-contact flex">
      <div className="left-section flex">
        <div className="main-title flex">
          <span className="icon-envelope"></span>
          <h1>Contact Us</h1>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form className="flex" onSubmit={handleSubmit}>
          <div className="email flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="msg flex">
            <label>Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p className="success-message flex">
              <Lottie
                className="lottie-an"
                animationData={doneAnimation}
                loop={false}
              />
              Your message has been sent successfully
            </p>
          )}
        </form>
      </div>
      <div className="right-section">
        <Lottie 
          className="lottie-an-email"
          animationData={emailAnimation}
        />
      </div>
    </div>
  );
}
