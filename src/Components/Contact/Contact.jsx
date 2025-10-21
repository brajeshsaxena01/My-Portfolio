/** @format */

import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { toast } from "react-toastify";

export const Contact = () => {
  const sendEmail = (e) => {
    console.log(e.target);

    e.preventDefault();

    emailjs
      .sendForm(
        "service_bhw26dm",
        "template_pglijq8",
        e.target,
        "piCa0oCX2nSer1d1v"
      )
      .then(
        (result) => {
          console.log(result.text);
          // window.alert("Email successfully sent!");
          toast.success("Email successfully sent!");
        },
        (error) => {
          console.log(error.text);
          // window.alert("Error sending email:");
          toast.error("Error sending email!");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading" style={{ fontSize: '28px', padding: '0px' }}>
          <span>Contact</span> me <br />
          <span>Mob No:-</span>+91-8340762814{" "}
          <div className="share">
            <a
              href="https://github.com/brajeshsaxena01"
              target="_blank"
              rel="noreferrer"
              className="fab fa-github"
            ></a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/brajesh-saxena/"
              rel="noreferrer"
              className="fab fa-linkedin"
            ></a>
            {/* <a href="raajrohit16201@gmail.com"
           target="_blank"
           
          rel="noreferrer" className="fa fa-envelope"></a> */}
            {/* <a
            target="_blank"
            href="https://www.raajrohit16201@gmail.com"
            rel="noreferrer"
            className="fa fa-envelope"
          ></a> */}

            {/* <a
            target="_blank"
            href="https://medium.com/@raajrohit16201"
            rel="noreferrer"
            className=  "fab fa-medium"
           
          ></a> */}
          </div>
        </h1>

        <form action="" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            className="box"
            name="name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="box"
            name="email"
          />
          <input
            type="text"
            placeholder="Subject"
            className="box"
            name="subject"
          />
          <textarea
            name="message"
            className="box"
            placeholder="your message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </>
  );
};
