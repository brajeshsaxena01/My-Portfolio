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
              As a Senior Software Engineer at VisioApps Technology Pvt Ltd, I
              am a dedicated and innovative professional with extensive
              experience in full-stack web development. I thrive on leveraging
              cutting-edge technologies to deliver high-quality software
              solutions that meet client needs. My strong problem-solving skills
              and collaborative approach allow me to lead projects effectively
              while mentoring junior developers.
            </p>
            <p>
              I am passionate about continuous learning and staying ahead of
              industry trends, which fuels my commitment to excellence in every
              aspect of my work. I aim to contribute to a technology-driven
              environment that fosters growth, creativity, and the development
              of impactful software applications.
            </p>

            <a className="btn" href="Images/resume.pdf" target="_blank">
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
