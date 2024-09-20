/** @format */

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

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={1}
      ></ToastContainer>
      <Party className="particle-con">
        <Particles />
      </Party>
      <Theme />
      <SideBar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      {/* <Created /> */}
    </>
  );
}

export default App;
