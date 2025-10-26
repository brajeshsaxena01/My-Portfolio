// /** @format */

// import React from "react";
// import "./Portfolio.css";

// import styled from "styled-components";

// export const Projects = () => {
//   return (
//     <>
//       <section className="portfolio" id="projects">
//         <h1 className="heading">
//           {" "}
//           my <span>projects</span>{" "}
//         </h1>

//         <div className="box-container">
//           <div className="box" style={{ height: 'auto',}}>
//             <img src="Images/e-commerce.png" alt="" />
//             <div className="content">
//               <h3>E-Commerce</h3>
//             </div>
//             <NewDiv>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-around",
//                   width: "40%",
//                 }}
//               >
//                 <a
//                   className="icons-git"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://github.com/brajeshsaxena01/MERN-ecommerce"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/github-brands.svg"
//                     alt=""
//                   />
//                 </a>
//                 <a
//                   className="icons-git"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://mern-ecommerce-ce74.onrender.com/login"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/globe-solid.svg"
//                     alt=""
//                   />
//                 </a>
//               </div>
//               <h3>Built with MongoDb, ExpressJs, NodeJs, ReactJs</h3>
//               <h3>
//                 This self-paced project showcases a full-stack e-commerce
//                 application. It features user authentication, product
//                 management, a shopping cart with dynamic quantity adjustments,
//                 and secure payment processing through Stripe. This application
//                 demonstrates my ability to develop scalable and efficient web
//                 solutions.
//               </h3>
//             </NewDiv>
//           </div>
//           <div className="box">
//             <img src="Images/Screenshot (163).png" alt="" />
//             <div className="content">
//               <h3>Udemy Clone</h3>
//             </div>
//             <NewDiv>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-around",
//                   width: "40%",
//                 }}
//               >
//                 <a
//                   className="icons-git"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://github.com/brajeshsaxena01/udemy_cloned"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/github-brands.svg"
//                     alt=""
//                   />
//                 </a>
//                 <a
//                   className="icons-git"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://udemy-cloned.vercel.app/"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/globe-solid.svg"
//                     alt=""
//                   />
//                 </a>
//               </div>
//               <h3>Built with HTML,CSS, JavaScript</h3>
//               <h3>
//                 A team project to clone udemy. It has functionalites like
//                 filtering,sorting, add to cart functionalies along with login
//                 and sign up.
//               </h3>
//             </NewDiv>
//           </div>
//           <div className="box">
//             <img src="Images/Screenshot (162).png" alt="" />
//             <div className="content">
//               <h3>Mamaearth CLone</h3>


//             </div>
//             <NewDiv>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-around",
//                   width: "40%",
//                 }}
//               >
//                 <a
//                   className="icons-git"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://github.com/brajeshsaxena01/Mamaearth_Cloned"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/github-brands.svg"
//                     alt=""
//                   />
//                 </a>
//                 <a
//                   className="icons-git"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://mamaearth-cloned.vercel.app/"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/globe-solid.svg"
//                     alt=""
//                   />
//                 </a>
//               </div>
//               <h3>Built with HTML,CSS, JavaScript</h3>
//               <h3>
//                 A clone of website mamaearth.in. I have given it the
//                 functionalites like login, sign up, filtering and sorting, and
//                 add to cart.
//               </h3>
//             </NewDiv>
//           </div>
//           {/* <div className="box">
//             <img src="Images/Screenshot (325).png" alt="" />
//             <div className="content">
//               <h3>Food App</h3>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-around",
//                   width: "40%",
//                 }}
//               >
//                 <a
//                   className="icons-git"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://github.com/Rohitraj97/DISH"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/github-brands.svg"
//                     alt=""
//                   />
//                 </a>
//                 <a
//                   className="icons-git"
//                   href="https://resilient-cascaron-bec1dc.netlify.app"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/globe-solid.svg"
//                     alt=""
//                   />
//                 </a>
//               </div>
//             </div>
//             <NewDiv>
//               <h3>
//                 Built with HTML, CSS, Javascript.
//               </h3>
//               <h3>

// This project is done to check any dishes with respect to main ingredients and to show the recipes of respective dishes. This project is done in unit-3 at Masai School.
//               </h3>
//             </NewDiv>
//           </div>
//           <div className="box">
//             <img src="Images/Screenshot (323).png" alt="" />
//             <div className="content">
//               <h3>Weather-app</h3>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-around",
//                   width: "40%",
//                 }}
//               >
//                 <a
//                   className="icons-git"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://github.com/Rohitraj97/weathers2"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/github-brands.svg"
//                     alt=""
//                   />
//                 </a>
//                 <a
//                   className="icons-git"
//                   href="https://graceful-twilight-b9d83b.netlify.app"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/globe-solid.svg"
//                     alt=""
//                   />
//                 </a>
//               </div>
//             </div>
//             <NewDiv>
//               <h3>Built with HTML, Javascript, CSS.</h3>
//               <h3>This project is done to check 7 days weather-Details of a city . This project is done in unit-3 at Masai School.</h3>
//             </NewDiv>
//           </div>

//           <div className="box">
//             <img src="Images/Screenshot (327).png" alt="" />
//             <div className="content">
//               <h3>Translation-app</h3>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-around",
//                   width: "40%",
//                 }}
//               >
//                 <a
//                   className="icons-git"
//                   href="https://github.com/Rohitraj97/translation-app"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/github-brands.svg"
//                     alt=""
//                   />
//                 </a>
//                 <a
//                   className="icons-git"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://silly-biscochitos-45bd7e.netlify.app"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/globe-solid.svg"
//                     alt=""
//                   />
//                 </a>
//               </div>
//             </div>
//             <NewDiv>
//               <h3>Built with HTML, CSS, Javascript</h3>
//          <h3>

// This project is done to translate an national language to another national language. This project is done in unit-3 at Masai School.
//            </h3>     
//             </NewDiv>
//           </div>
//           <div className="box">
//             <img src="/Images/starWars.png" alt="" />
//             <div className="content">
//               <h3>Star Wars Search Engine</h3>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-around",
//                   width: "40%",
//                 }}
//               >
//                 <a
//                   className="icons-git"
//                   href="https://github.com/Amarjeet9999/starWar-Project"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/github-brands.svg"
//                     alt=""
//                   />
//                 </a>
//                 <a
//                   className="icons-git"
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://star-wars-demo.netlify.app/"
//                 >
//                   <img
//                     style={{ height: "100%", width: "100%" }}
//                     src="/Images/globe-solid.svg"
//                     alt=""
//                   />
//                 </a>
//               </div>
//             </div>
//             <NewDiv>
//               <h3>Built with only HTML, CSS and Javascript</h3>
//             </NewDiv>
//           </div> */}
//         </div>
//       </section>
//     </>
//   );
// };

// // const NewDiv = styled.div`
// //   height: 10rem;
// //   width: 100%;
// //   & h3 {
// //     font-size: 1.5rem;
// //     font-weight: 600;
// //     color: var(--black);
// //     text-transform: uppercase;
// //     padding: 1rem 1rem;
// //   }
// // `;


// // const NewDiv = styled.div`
// //   width: 100%;
// //   height: auto;
// //   display: flex;
// //   justify-content: space-around;
// //   align-items: center;
// //   // text-align: center;
// //   flex-wrap: wrap; /* helps responsiveness */

// //   & > div {
// //     display: flex;
// //     justify-content: space-around;
// //     width: 40%;
// //   }

// //   & h3 {
// //     font-size: 1.5rem;
// //     font-weight: 600;
// //     color: var(--black);
// //     text-transform: uppercase;
// //     padding: 1rem;
// //     line-height: 1.5;
// //     word-wrap: break-word;
// //     flex: 1 1 100%;
// //   }

// //   /* ========== Tablet (769px-1024px) ========== */
// //   @media screen and (max-width: 1024px) and (min-width: 769px) {
// //     flex-direction: column;
// //     align-items: center;
// //     // text-align: center;
// //     gap: 1rem;

// //     & > div {
// //       width: 60%;
// //       justify-content: center;
// //       margin-bottom: 1rem;
// //     }

// //     & h3 {
// //       font-size: 1.4rem;
// //       width: 90%;
// //     }
// //   }

// //   /* ========== Mobile (≤768px) ========== */
// //   @media screen and (max-width: 768px) {
// //     flex-direction: column;
// //     align-items: center;
// //     // text-align: center;
// //     gap: 1rem;

// //     & > div {
// //       width: 80%;
// //       justify-content: center;
// //       margin-bottom: 1rem;
// //     }

// //     & h3 {
// //       font-size: 1.2rem;
// //       width: 90%;
// //       padding: 0.5rem;
// //       line-height: 1.6;
// //       word-break: break-word;
// //     }
// //   }
// // `;

// const NewDiv = styled.div`
//   width: 100%;
//   height: auto; /* ✅ allow full height */
//   display: flex;
//   flex-direction: column; /* ✅ stack all children */
//   justify-content: center;
//   align-items: center;
//   // text-align: center;
//   padding: 1rem;

//   & h3 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     color: var(--black);
//     text-transform: uppercase;
//     padding: 1rem;
//     line-height: 1.6;
//     word-break: break-word; /* ✅ prevent long text cutoff */
//     white-space: normal; /* ✅ allow wrapping */
//   }

//   @media screen and (max-width: 1024px) and (min-width: 769px),
//          screen and (max-width: 768px) {
//     height: auto; /* ✅ remove any fixed height */
//     & h3 {
//       font-size: 1.2rem;
//       padding: 0.5rem 1rem;
//     }
//   }
// `;



import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaStar, FaCode, FaShoppingCart, FaPlane } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import e_commerce from "../../assets/e-commerce.png"
import udemy from "../../assets/udemy.png"
import mamaearth from "../../assets/mamaearth.png"

const projects = [
  {
    id: 1,
    name: "E-Commerce",
    description: "This self-paced project showcases a full-stack e-commerce application. It features user authentication, product management, a shopping cart with dynamic quantity adjustments, and secure payment processing through Stripe. This application demonstrates my ability to develop scalable and efficient web solutions.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    link: "https://mern-ecommerce-ce74.onrender.com",
    github: "https://github.com/brajeshsaxena01/MERN-ecommerce",
    image: e_commerce,
    // category: "E-commerce",
    icon: FaShoppingCart,
    color: "from-pink-500 to-rose-500",
    featured: false,
    // status: "Completed",
    // year: "2024"
  },
  {
    id: 2,
    name: "Udemy Clone",
    description: "A team project to clone udemy. It has functionalites like filtering,sorting, add to cart functionalies along with login and sign up.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://udemy-cloned.vercel.app/",
    github: "https://github.com/brajeshsaxena01/udemy_cloned",
    image: udemy,
    // category: "Education",
    icon: FaShoppingCart,
    color: "from-blue-500 to-indigo-500",
    featured: false,
    // status: "Completed",
    // year: "2024"
  },
  {
    id: 3,
    name: "Mamaearth Clone",
    description: "A clone of website mamaearth.in. I have given it the functionalites like login, sign up, filtering and sorting, and add to cart.",
    // fullDescription: "Full-featured travel platform with booking management, tour comparisons, user reviews, and integrated payment processing.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://mamaearth-cloned.vercel.app/",
    github: "https://github.com/brajeshsaxena01/Mamaearth_Cloned",
    image: mamaearth,
    // category: "Travel",
    icon: FaPlane,
    color: "from-emerald-500 to-teal-500",
    featured: false,
    // status: "Completed",
    // year: "2025"
  },
];

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const IconComponent = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      // className="group relative bg-gradient-to-r from-yellow-100 to-orange-100"
      className="group relative"
    >
      {/* Featured Badge */}
      {project.featured && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="absolute -top-2 -right-2 z-10"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <FaStar className="text-xs" />
            Featured
          </div>
        </motion.div>
      )}

      {/* Main Card */}
      {/* <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="glass-card rounded-3xl overflow-hidden card-hover group-hover:shadow-2xl transition-all duration-500"
      > */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="glass-card w-full rounded-3xl overflow-hidden card-hover group-hover:shadow-2xl transition-all duration-500"
      >
        {/* Image Section */}
        {/* <div className="relative overflow-hidden h-64" >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          /> */}
        <div className="relative overflow-hidden h-64 w-full flex justify-center items-center">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            src={project.image}
            alt={project.name}
            // className="w-full h-full object-cover object-center"
            className="w-full h-full"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          {/* <div className="absolute top-4 left-4">
            <div className={`glass px-3 py-2 rounded-2xl flex items-center gap-2`}>
              <IconComponent className="text-white text-sm" />
              <span className="text-white text-sm font-medium">{project.category}</span>
            </div>
          </div> */}

          {/* Year badge */}
          {/* <div className="absolute top-4 right-4">
            <div className="glass px-3 py-2 rounded-2xl">
              <span className="text-white text-sm font-medium">{project.year}</span>
            </div>
          </div> */}

          {/* Hover actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass-strong p-4 rounded-2xl text-white hover:text-indigo-300 transition-colors"
            >
              <FaExternalLinkAlt className="text-xl" />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass-strong p-4 rounded-2xl text-white hover:text-purple-300 transition-colors"
            >
              <FaGithub className="text-xl" />
            </motion.a>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-sm lg:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors"
                style={{ color: 'var(--black' }}
              >
                {project.name}
              </h3>
              {/* <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></span>
                <span>{project.status}</span>
              </div> */}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm lg:text-xl leading-relaxed mb-6"
            style={{ color: 'var(--black' }}
          >
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm lg:text-2xl font-semibold text-gray-400 mb-3 flex items-center gap-2"
              style={{ color: 'var(--black' }}
            >
              <FaCode className="text-indigo-400" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-3 py-2 bg-gradient-to-r ${project.color} bg-opacity-10 border border-white/10 rounded-xl text-sm lg:text-m font-medium text-white backdrop-blur-sm`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm lg:text-2xl py-3 px-4 bg-blue-200 rounded-2xl"
              style={{ color: 'var(--black' }}
            >
              <BiGlobe className="text-2xl" />
              <span>Live Demo</span>
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center justify-center gap-2 text-sm lg:text-2xl py-3 px-4 bg-blue-200 rounded-2xl"
              style={{ color: 'var(--black', }}
            >
              <FaGithub className="text-2xl" />
              <span >Code</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-2xl mb-6"
          >
            <FaRocket className="text-indigo-400" />
            <span className="text-gray-300 font-medium">Featured Work</span>
          </motion.div> */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold gradient-text mb-4"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            My Projects
          </motion.h2>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of innovative web applications built with modern technologies,
            demonstrating full-stack development expertise and creative problem-solving.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6"
          /> */}
        </motion.div>

        {/* Featured Projects */}
        {/* <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-3"
            style = {{color: 'var(--black)'}}
          >
            <FaStar className="text-yellow-400" />
            Featured Projects
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div> */}

        {/* Other Projects */}
        <div>
          {/* <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <FaCode className="text-indigo-400" />
            Other Projects
          </motion.h3> */}

          {/* <div className="grid lg:grid-cols-2 gap-8"> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaborating?</h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on innovative projects and bring creative ideas to life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Let's Work Together</span>
              <FaRocket className="text-sm" />
            </motion.a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
