/** @format */

import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>about</span> me{" "}
        </h1>

        <div className="row">
          <div className="content">
            <h3>
              I am <span>Brajesh Saxena</span>
            </h3>
            <p>
            An aspiring creative observing full-stack web developer acquiring 
            all of the technical skillsets for one to be a web developer and 
            Hard-working and self-motivated person, with a keen interest in 
            exploring new technologies in the web developing world. Seeking a
            challenging position in a reputable company that is driven by 
            technology that would utilize my potential to the fullest and also help 
            me to grow my career and to showcase all of my technical skills
            </p>

            <a
              className="btn"
              href="Images/RESUME FINAL..pdf"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
