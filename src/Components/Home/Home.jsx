/** @format */

import React from "react";
import "./Home.css";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Home = () => {

  const fileId = "1LRKgP8s8x5DxHZC4qEgo5xdyMo_mblA8";
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const handleDownload = () => {
    window.open(viewUrl, "_blank");
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "My_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
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
                  "I am a Full Stack Web Developer",

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
          <button
            onClick={handleDownload}
            className="btn"
          >
            Download Resume
          </button>
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
