/** @format */
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import React from "react";
import { SideBar } from "./Components/SideBar/Sidebar";
import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Resume } from "./Components/Resume/Resume";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Created } from "./Components/Created";
import { Theme } from "./Components/Theme";
import Particles from "./Components/Particle";
import { Party } from "./Components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { HomeV2 } from "./Components/HomeV2";
import { AboutV2 } from "./Components/AboutV2";
import { SkillsAndTools } from "./Components/SkillsAndTools";
import { ContactV2 } from "./Components/ContactV2";

function App() {
  return (
    <>
      <AnimatePresence>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={1}
        ></ToastContainer>
        <Party className="particle-con">
          <Particles />
        </Party>
        {/* <Theme /> */}
        <Navbar />
        {/* <SideBar /> */}
        <div className="page-wrapper">
          {/* <Home /> */}
          {/* <About /> */}
          {/* <Resume /> */}
          {/* <Contact /> */}
          <HomeV2/>
          <AboutV2 />
          <SkillsAndTools/>
          <Projects />
          <ContactV2/>
          {/* <Created /> */}
        </div>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
