import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div className="f-content">
        <span>brajeshkumarsaxena82@gmail.com</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
          <a href="https://github.com/brajeshsaxena01" target='_blank'><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/brajesh-saxena/" target='_blank'><img src={LinkedIn} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;