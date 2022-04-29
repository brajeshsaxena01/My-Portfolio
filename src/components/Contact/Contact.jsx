

import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm(
  // write your own id here generate by going on emailjs-->service id, tempelete id 1:50:00,user id
  "service_78fsvrx",
  "template_pglijq8",
  form.current,
  "piCa0oCX2nSer1d1v"
)
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}></span>
          <span>Contact me</span>
          {/* <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          > */}
            <div class="column-left">
                    {/* <div class="text">Get in Touch</div> */}
                    {/* <p>You can easily  contact me</p> */}
                    <div class="icons">
                        {/* <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Brajesh Saxena</div>
                            </div>
                        </div> */}
                        <div class="row">
                            <a target="_blank" href=""><i class="fas fa-map-marker-alt"></i></a>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Ram Krishna Nagar, Patna-800020</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">brajeshkumarsaxena82@gmail.com</div>
                            </div>
                        </div>
                        <div class="row">
                            {/* <i class="fa-solid fa-phone"></i> */}
                            <div class="info">
                                <div class="head">Mob no</div>
                                <div class="sub-title">+91 8340762814</div>
                            </div>
                        </div>
                    </div>
                </div>
          {/* </div> */}
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;