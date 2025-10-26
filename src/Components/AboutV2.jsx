import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export const AboutV2 = () => {
    return (
        <section id="about" className="py-8 px-6 relative overflow-hidden"
            // style={{ border: '1px solid teal' }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Enhanced Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-2"
                >
                                {/* <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-3 glass rounded-2xl mb-6"
                    >
                        <FaHeart className="text-pink-400" />
                        <span className="text-gray-300 font-medium">Get to know me</span>
                    </motion.div> */}

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold gradient-text mb-4"
                        style={{ fontFamily: 'JetBrains Mono' }}
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        // className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 text-justify"
                        className="text-xl text-gray-900 dark:text-gray-100 max-w-3xl mx-auto leading-8 tracking-wide text-justify mb-6 transition-colors duration-300"
                        style={{ color: 'var(--black)' }}
                    >
                        As a {" "}
                        <span className="font-semibold text-purple-600 dark:text-purple-400">Senior Software Engineer</span> at
                        <span className="font-semibold text-blue-600 dark:text-blue-400"> VisioApps Technology Pvt Ltd</span>,
                        I am a dedicated and innovative professional with extensive experience in full-stack web development. I thrive on leveraging cutting-edge technologies to deliver high-quality software solutions that meet client needs. My strong problem-solving skills and collaborative approach allow me to lead projects effectively while mentoring junior developers.
                        <br />
                        I am passionate about continuous learning and staying ahead of industry trends, which fuels my commitment to excellence in every aspect of my work. I aim to contribute to a technology-driven environment that fosters growth, creativity, and the development of impactful software applications.
                        <br />
                        <br />
                        <motion.a
                            href='#contact'
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary items-center gap-3 group w-[200px]"
                        >
                            <span>Contact Me</span>
                            {/* <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity -z-10" /> */}
                        </motion.a>
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}
