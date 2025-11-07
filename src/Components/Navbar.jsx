import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Theme } from './Theme';
import { ThemeToggler } from './ThemeToggler';

const navLinks = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👨‍💻" },
    { name: "Skills", href: "#skills", icon: "⚡" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Contact", href: "#contact", icon: "📬" },
    { name: "Resume", href: "#", icon: "📝" },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const mobileMenuRef = useRef(null);
    const hamburgerRef = useRef(null);

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            // setScrolled(scrollTop > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setOpen(false); // only closes if open; React ignores unnecessary setState
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); // no dependency on `open`!


    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled
                ? 'glass-strong border-b border-white/10 py-3'
                : 'bg-transparent py-4 glass-strong'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* --- LEFT: Logo / Name --- */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex-shrink-0 basis-1/3 md:basis-[10%] lg:basis-1/3 flex justify-start"
                >
                    <motion.a
                        className="hidden lg:block font-bold gradient-text tracking-wider"
                        style={{ color: 'var(--black)' }}
                        href="#home"
                    >
                        Brajesh Saxena
                    </motion.a>
                    <motion.a
                        className="block lg:hidden font-bold gradient-text tracking-wider"
                        style={{ color: 'var(--black)' }}
                        href="#home"
                    >
                        BS
                    </motion.a>
                </motion.div>

                {/* --- CENTER: Navigation Links --- */}
                <div className="hidden md:flex basis-1/3 md:basis-[80%] lg:basis-1/3 justify-center items-center gap-3 lg:gap-6 md:gap-0">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative px-3 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                                    ? 'glass text-white shadow-lg'
                                    : 'text-gray-300 hover:text-white hover:glass'
                                    }`}
                                style={{ color: 'var(--black)' }}
                                onClick={() => {
                                    if (link.name === 'Resume') {
                                        handleDownload()
                                    }
                                }}
                            >
                                {/* <span className="text-xl">{link.icon}</span> */}
                                <span className="flex items-center gap-2">
                                    {/* <span className="text-sm">{link.icon}</span> */}
                                    {link.name}
                                </span>
                                {/* {link.name} */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl -z-10"
                                    />
                                )}
                            </motion.a>
                        );
                    })}
                </div>

                {/* --- RIGHT: Theme Toggler --- */}
                <div className="hidden md:flex basis-1/3 md:basis-[10%] lg:basis-1/3 justify-end">
                    <ThemeToggler />
                </div>
                {/* Enhanced Mobile Menu Button */}
                {/* <div className="w-9 h-9 flex items-center justify-center rounded-full glass-strong shadow-md"> */}
                {/* <div className="md:hidden -mt-20 glass rounded-xl">
                    <ThemeToggler />
                </div> */}
                <motion.button
                    ref={hamburgerRef}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden relative p-3 glass rounded-2xl"
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                        <motion.div
                            animate={{
                                rotate: open ? 45 : 0,
                                y: open ? 2 : -2
                            }}
                            className="w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded transition-all duration-300"
                        />
                        <motion.div
                            animate={{
                                opacity: open ? 0 : 1
                            }}
                            className="w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded transition-all duration-300 mt-1.5"
                        />
                        <motion.div
                            animate={{
                                rotate: open ? -45 : 0,
                                y: open ? -2 : 2
                            }}
                            className="w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded transition-all duration-300 mt-1.5"
                        />
                    </div>
                </motion.button>

                {/* --- MOBILE HEADER (visible on small screens only) --- */}



            </div>

            {/* Enhanced Mobile Menu */}

            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={mobileMenuRef}
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden md:hidden glass-strong border-t border-white/10 mt-4"
                    >
                        <div className="p-6 space-y-2">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <>
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => {
                                                setOpen(false)
                                                if (link.name === 'Resume') {
                                                    handleDownload()
                                                }
                                            }}
                                            className={`flex items-center gap-4 p-4 rounded-2xl font-medium transition-all duration-300 ${isActive
                                                ? 'glass text-white shadow-lg'
                                                : 'text-gray-300 hover:text-white hover:glass'
                                                }`}
                                        >
                                            {/* <span className="text-xl">{link.icon}</span> */}
                                            <span className="text-lg" style={{ color: 'var(--black)' }}>{link.name}</span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeMobileTab"
                                                    className="ml-auto w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                                                />
                                            )}
                                        </motion.a>
                                        <ThemeToggler />
                                    </>
                                );
                            })}


                            {/* Mobile menu decoration */}
                            {/* <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="pt-4 mt-4 border-t border-white/10"
                            >
                                <div className="text-center text-sm text-gray-400">
                                    <span className="gradient-text font-medium">Made with ❤️ by Brajesh</span>
                                </div>
                            </motion.div> */}
                        </div>
                    </motion.div>

                )}

            </AnimatePresence>
        </motion.nav>
    );
}
