/** @format */

import React from "react";
import "./Portfolio.css";

import styled from "styled-components";

export const Projects = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1 className="heading">
          {" "}
          my <span>projects</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="Images/Screenshot (163).png" alt="" />
            <div className="content">
              <h3>Udemy Clone</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/brajeshsaxena01/udemy_cloned"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://udemy-cloned.vercel.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with HTML,CSS, JavaScript</h3>
              <h3>
A team project to clone udemy. It has functionalites like filtering,sorting, add to cart functionalies along with login and sign up.</h3>
            </NewDiv>
          </div>
          <div className="box">
            <img src="Images/Screenshot (162).png" alt="" />
            <div className="content">
              <h3>ZEE5 OTT Platform CLone</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/brajeshsaxena01/Mamaearth_Cloned"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://mamaearth-cloned.vercel.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built  with HTML,CSS, JavaScript</h3>
              <h3>
A clone of website mamaearth.in. I have given it the functionalites like login, sign up, filtering and sorting, and add to cart.</h3>
            </NewDiv>
          </div>
          {/* <div className="box">
            <img src="Images/Screenshot (325).png" alt="" />
            <div className="content">
              <h3>Food App</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Rohitraj97/DISH"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  href="https://resilient-cascaron-bec1dc.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>
                Built with HTML, CSS, Javascript.
              </h3>
              <h3>
              
This project is done to check any dishes with respect to main ingredients and to show the recipes of respective dishes. This project is done in unit-3 at Masai School.
              </h3>
            </NewDiv>
          </div>
          <div className="box">
            <img src="Images/Screenshot (323).png" alt="" />
            <div className="content">
              <h3>Weather-app</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Rohitraj97/weathers2"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  href="https://graceful-twilight-b9d83b.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with HTML, Javascript, CSS.</h3>
              <h3>This project is done to check 7 days weather-Details of a city . This project is done in unit-3 at Masai School.</h3>
            </NewDiv>
          </div>

          <div className="box">
            <img src="Images/Screenshot (327).png" alt="" />
            <div className="content">
              <h3>Translation-app</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  href="https://github.com/Rohitraj97/translation-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://silly-biscochitos-45bd7e.netlify.app"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with HTML, CSS, Javascript</h3>
         <h3>
       
This project is done to translate an national language to another national language. This project is done in unit-3 at Masai School.
           </h3>     
            </NewDiv>
          </div>
          <div className="box">
            <img src="/Images/starWars.png" alt="" />
            <div className="content">
              <h3>Star Wars Search Engine</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  href="https://github.com/Amarjeet9999/starWar-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://star-wars-demo.netlify.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>Built with only HTML, CSS and Javascript</h3>
            </NewDiv>
          </div> */}
        </div>
      </section>
    </>
  );
};

const NewDiv = styled.div`
  height: 10rem;
  width: 100%;
  & h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--black);
    text-transform: uppercase;
    padding: 1rem 1rem;
  }
`;
