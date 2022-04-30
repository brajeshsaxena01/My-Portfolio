import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Udemy from "../../img/Udemy.png";
import Mamaearth from "../../img/mamaearth.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://udemy-cloned.vercel.app/" target="_blank"><img src={Udemy} alt="" /></a>
         <div className="col1" >
          <h3>Udemy Cloned</h3>
          <p>This has functionalites like filtering, sorting, Add To Cart, along with Login and Sign up facilities</p>
          <h3>Tech Stack</h3>
          <p>HTML CSS JavaScripts</p>
         </div>
          <button className="button">
            <a href="https://udemy-cloned.vercel.app/" target="_blank">Deploy Link</a>
          </button>
          <button className="button">
          <a href="https://github.com/brajeshsaxena01/udemy_cloned" target="_blank">Code Source</a>

          </button>

        </SwiperSlide>
        <SwiperSlide>
        <a href="https://mamaearth-cloned.vercel.app/" target="_blank"><img src={Mamaearth} alt="" /></a>
          <div className="col1">
          <h3>Mamaearth Cloned</h3>
          <p>I have given it the functionalities like Login, Sign up Add To Cart and Filtering and Sorting with the help of HTML CSS</p>
          <h3>Tech Stack</h3>
          <p>HTML CSS</p>
          </div>
          <button className="button">
            <a href="https://mamaearth-cloned.vercel.app/" target="_blank">Deploy Link</a>
          </button>
          <button className="button">
          <a href="https://github.com/brajeshsaxena01/Mamaearth_Cloned" target="_blank">Code Source</a>
            
          </button>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={MusicApp} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={HOC} alt="" /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
