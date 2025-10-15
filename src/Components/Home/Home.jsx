/** @format */

import React from "react";
import "./Home.css";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            <span>Hi, I'm </span>
            <span>Brajesh Saxena</span>
          </h3>
          {/* <h3></h3> */}
          <p>
            <Typewriter
              options={{
                strings: [
                  "I'm a Full Stack Web Developer",
                  
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>
          {/* <a
            className="btn"
            href="Images/resume.pdf"
            target="_blank"
          >
            Download Resume
          </a> */}
          <a
            className="btn"
            href="https://drive.google.com/file/d/1zDtX8nhzYAvc8jisOHI1KyzuCxkB6mbk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </div>

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
          {/* <a href="brajeshkumarsaxena82@gmail.com"
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
      </section>
    </>
  );
};

export const Party = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -9999;
`;
