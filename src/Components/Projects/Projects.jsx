/** @format */

import React from "react";
import "./Portfolio.css";

import styled from "styled-components";

export const Projects = () => {
  return (
    <>
      <section className="portfolio" id="projects">
        <h1 className="heading">
          {" "}
          my <span>projects</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box" style={{ height: 'auto',}}>
            <img src="Images/e-commerce.png" alt="" />
            <div className="content">
              <h3>E-Commerce</h3>
            </div>
            <NewDiv>
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
                  href="https://github.com/brajeshsaxena01/MERN-ecommerce"
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
                  href="https://mern-ecommerce-ce74.onrender.com/login"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
              <h3>Built with MongoDb, ExpressJs, NodeJs, ReactJs</h3>
              <h3>
                This self-paced project showcases a full-stack e-commerce
                application. It features user authentication, product
                management, a shopping cart with dynamic quantity adjustments,
                and secure payment processing through Stripe. This application
                demonstrates my ability to develop scalable and efficient web
                solutions.
              </h3>
            </NewDiv>
          </div>
          <div className="box">
            <img src="Images/Screenshot (163).png" alt="" />
            <div className="content">
              <h3>Udemy Clone</h3>
            </div>
            <NewDiv>
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
              <h3>Built with HTML,CSS, JavaScript</h3>
              <h3>
                A team project to clone udemy. It has functionalites like
                filtering,sorting, add to cart functionalies along with login
                and sign up.
              </h3>
            </NewDiv>
          </div>
          <div className="box">
            <img src="Images/Screenshot (162).png" alt="" />
            <div className="content">
              <h3>Mamaearth CLone</h3>


            </div>
            <NewDiv>
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
              <h3>Built with HTML,CSS, JavaScript</h3>
              <h3>
                A clone of website mamaearth.in. I have given it the
                functionalites like login, sign up, filtering and sorting, and
                add to cart.
              </h3>
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

// const NewDiv = styled.div`
//   height: 10rem;
//   width: 100%;
//   & h3 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     color: var(--black);
//     text-transform: uppercase;
//     padding: 1rem 1rem;
//   }
// `;


// const NewDiv = styled.div`
//   width: 100%;
//   height: auto;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   // text-align: center;
//   flex-wrap: wrap; /* helps responsiveness */

//   & > div {
//     display: flex;
//     justify-content: space-around;
//     width: 40%;
//   }

//   & h3 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     color: var(--black);
//     text-transform: uppercase;
//     padding: 1rem;
//     line-height: 1.5;
//     word-wrap: break-word;
//     flex: 1 1 100%;
//   }

//   /* ========== Tablet (769px-1024px) ========== */
//   @media screen and (max-width: 1024px) and (min-width: 769px) {
//     flex-direction: column;
//     align-items: center;
//     // text-align: center;
//     gap: 1rem;

//     & > div {
//       width: 60%;
//       justify-content: center;
//       margin-bottom: 1rem;
//     }

//     & h3 {
//       font-size: 1.4rem;
//       width: 90%;
//     }
//   }

//   /* ========== Mobile (≤768px) ========== */
//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     // text-align: center;
//     gap: 1rem;

//     & > div {
//       width: 80%;
//       justify-content: center;
//       margin-bottom: 1rem;
//     }

//     & h3 {
//       font-size: 1.2rem;
//       width: 90%;
//       padding: 0.5rem;
//       line-height: 1.6;
//       word-break: break-word;
//     }
//   }
// `;

const NewDiv = styled.div`
  width: 100%;
  height: auto; /* ✅ allow full height */
  display: flex;
  flex-direction: column; /* ✅ stack all children */
  justify-content: center;
  align-items: center;
  // text-align: center;
  padding: 1rem;

  & h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--black);
    text-transform: uppercase;
    padding: 1rem;
    line-height: 1.6;
    word-break: break-word; /* ✅ prevent long text cutoff */
    white-space: normal; /* ✅ allow wrapping */
  }

  @media screen and (max-width: 1024px) and (min-width: 769px),
         screen and (max-width: 768px) {
    height: auto; /* ✅ remove any fixed height */
    & h3 {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
  }
`;
