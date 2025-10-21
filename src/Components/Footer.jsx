import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        // <footer className="bg-gray-900 text-white py-16">
        <footer className="bg-[#E6E6E6] text-black py-16"
            style={{
                backgroundColor: 'var(--footer-bg)',
                // color: 'var(--footer-text)',
                color: 'var(--black)',
                borderTop: 'var(--border)',
            }}
        >
            {" "}
            {/* Increased padding for more height */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Left Section */}
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                            {/* Replace with your logo */}
                            {/* <img
                src="path-to-logo.png"
                alt="Logo"
                className="w-12 h-12"
              /> */}
                            {" "}
                            {/* Increased logo size */}
                        </div>
                        <p className="text-lg mb-6">
                            {" "}
                            {/* Making the world a better place through constructing elegant
              hierarchies. */}
                        </p>
                        <div className="flex space-x-6">
                            {" "}
                            {/* Increased space between icons */}
                            {/* Social Media Icons */}
                            <a
                                href="https://www.linkedin.com/in/brajesh-saxena/"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                // className="text-black hover:text-gray-400 text-3xl"
                                className="text-[var(--icon-color)] hover:text-[var(--icon-hover)] text-3xl transition-colors duration-200"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>

                            <a
                                href="https://github.com/brajeshsaxena01"
                                aria-label="GitHub"
                                target="_blank"
                                // className="text-black hover:text-gray-400 text-3xl"
                                className="text-[var(--icon-color)] hover:text-[var(--icon-hover)] text-3xl transition-colors duration-200"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://x.com/Brajesh_Saxena1"
                                aria-label="Twitter"
                                target="_blank"
                                // className="text-black hover:text-gray-400 text-3xl"
                                className="text-[var(--icon-color)] hover:text-[var(--icon-hover)] text-3xl transition-colors duration-200"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-cols-2 gap-8 md:flex md:space-x-10">
                        <div>
                            {/* <h4 className="font-semibold mb-4 text-[24px]">Company</h4> */}
                            <ul className="space-y-8 text-base text-[16px]">
                                <li>
                                    <a href="#home" className="hover:text-[var(--green)]">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-[var(--green)]">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="hover:text-[var(--green)]">
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="hover:text-[var(--green)]">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-[var(--green)]">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-base">
                    {" "}
                    {/* <p>© {currentYear} Your Company, Inc. All rights reserved.</p> */}
                </div>
            </div>
        </footer>
    );
};