import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane, FaCheckCircle, FaRocket } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const contactInfo = [
    {
        icon: FaEnvelope,
        title: "Email",
        value: "brajeshkumarsaxena82@gmail.com",
        href: "mailto:brajeshkumarsaxena82@gmail.com",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: FaLinkedin,
        title: 'LinkedIn',
        href: "https://www.linkedin.com/in/brajesh-saxena/",
        // color: "hover:text-blue-400",
        color: "from-green-500 to-emerald-500",
        bgColor: "hover:bg-blue-500/10",
        label: "LinkedIn"
    },
    // {
    //     icon: FaGithub,
    //     title: 'GitHub',
    //     href: "https://github.com/brajeshsaxena01",
    //     // color: "hover:text-white",
    //     color: "from-purple-500 to-pink-500",
    //     bgColor: "hover:bg-gray-500/10",
    //     label: "GitHub"
    // },


    // {
    //     icon: FaMapMarkerAlt,
    //     title: "Location",
    //     value: "India",
    //     href: null,
    //     color: "from-green-500 to-emerald-500"
    // },
    // {
    //     icon: BiGlobe,
    //     title: "Website",
    //     value: "Brajesh's Portfolio",
    //     href: "#",
    //     color: "from-purple-500 to-pink-500"
    // }
];

const socialLinks = [
    // {
    //     icon: FaLinkedin,
    //     href: "https://www.linkedin.com/in/brajesh-saxena/",
    //     color: "hover:text-blue-400",
    //     bgColor: "hover:bg-blue-500/10",
    //     label: "LinkedIn"
    // },
    {
        icon: FaGithub,
        href: "https://github.com/brajeshsaxena01",
        color: "hover:text-white",
        bgColor: "hover:bg-gray-500/10",
        label: "GitHub"
    },
    {
        icon: SiLeetcode, // import from react-icons/si
        href: "https://leetcode.com/brajeshsaxena01",
        color: "hover:text-yellow-400",
        bgColor: "hover:bg-yellow-400/10",
        label: "LeetCode"
    }

    // {
    //     icon: FaInstagram,
    //     href: "https://www.instagram.com/brajeshsaxena01",
    //     color: "hover:text-pink-400",
    //     bgColor: "hover:bg-pink-500/10",
    //     label: "Instagram"
    // }
];
const professionalSentences = [
    "Let's transform your vision into reality—together, we’ll create something truly remarkable.",
    "Your ideas deserve exceptional execution. Let’s collaborate and make them shine.",
    "From concept to completion, I’m here to bring your project to life with creativity and precision.",
    "Let’s turn your next big idea into something extraordinary and impactful.",
    "Ready to elevate your brand? Let’s work together to craft something unforgettable.",
    "Every great project starts with a spark—let’s ignite yours and create something extraordinary.",
    "Let’s turn imagination into innovation and design something that stands out.",
    "Your vision fuels creativity—together, we’ll make it come alive beautifully.",
    "Dream it. Design it. Deliver it. Let’s create magic together.",
    "Big ideas deserve bold execution—let’s make something amazing happen.",
    "Have a project in mind? Let’s chat and bring your ideas to life, one step at a time.",
    "Collaboration is where creativity thrives—let’s build something extraordinary together.",
    "I’m excited to help you make your ideas happen. Let’s create something you’ll be proud of.",
    "Together, we can turn your vision into a stunning reality—let’s get started!",
    "Let’s join forces and create something that truly makes an impact."
];
export const ContactV2 = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Pick a random sentence
    const randomIndex = Math.floor(Math.random() * professionalSentences.length);
    const randomSentence = professionalSentences[randomIndex];

    const sendEmail = (e) => {
        console.log(e.target);

        e.preventDefault();

        emailjs
            .sendForm(
                "service_bhw26dm",
                "template_pglijq8",
                e.target,
                "piCa0oCX2nSer1d1v"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    // window.alert("Email successfully sent!");
                    toast.success("Email successfully sent!");
                },
                (error) => {
                    console.log(error.text);
                    // window.alert("Error sending email:");
                    toast.error("Error sending email!");
                }
            );
        e.target.reset();
    };
    function handleSubmit(e) {
        sendEmail(e)
        // e.preventDefault();
        // setIsSubmitting(true);

        // const form = e.target;
        // const formData = new FormData(form);

        // // Submit to Netlify
        // fetch('/', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //     body: new URLSearchParams(formData).toString(),
        // })
        //     .then(() => {
        //         setIsSubmitting(false);
        //         setSubmitted(true);
        //         form.reset();

        //         // Hide success message after 5 seconds
        //         setTimeout(() => setSubmitted(false), 5000);
        //     })
        //     .catch(() => {
        //         setIsSubmitting(false);
        //         // For development/fallback, still show success
        //         setSubmitted(true);
        //         form.reset();
        //         setTimeout(() => setSubmitted(false), 5000);
        //     });
    }

    return (
        <section
            id="contact"
            className="py-1 px-6 relative overflow-hidden"
        // className="py-12 px-6 relative overflow-hidden"

        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />

            {/* <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse hidden sm:block" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse hidden sm:block" /> */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-3 glass rounded-2xl mb-6"
                    >
                        <FaRocket className="text-indigo-400" />
                        <span className="text-gray-300 font-medium"
                            style={{ color: 'var(--black)' }}
                        >Let's Connect</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold gradient-text mb-4"
                        style={{ fontFamily: 'JetBrains Mono' }}
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6"
                        style={{ color: 'var(--black)' }}
                    >
                        {/* Ready to bring your ideas to life? Let's discuss your next project and create something amazing together. */}
                        {randomSentence}
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
                    />
                </motion.div>

                {/* <div className="grid lg:grid-cols-2 gap-16 items-start"> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* <div className="glass-card p-8 rounded-3xl"> */}
                        <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl">

                            <h3 className="text-sm lg:text-2xl md:text-xl font-bold text-yellow-500 mb-6 flex items-center gap-3">
                                <FaEnvelope className="text-indigo-400" />
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon;
                                    const content = (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group flex items-center gap-4 p-4 glass rounded-2xl hover:glass-strong transition-all duration-300 cursor-pointer"
                                        >
                                            <div className={`p-3 bg-gradient-to-r ${info.color} rounded-2xl`}>
                                                <IconComponent className="text-white text-xl" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm lg:text-xl md:text-lg text-white font-semibold group-hover:text-indigo-300 transition-colors" style={{ color: 'var(--black)' }} >
                                                    {info.title}
                                                </h4>
                                                <p className="text-gray-300 text-sm">{info.value}</p>
                                            </div>
                                        </motion.div>
                                    );

                                    return info.href ? (
                                        <motion.a
                                            key={info.title}
                                            href={info.href}
                                            target={info.href.startsWith('http') ? '_blank' : '_self'}
                                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {content}
                                        </motion.a>
                                    ) : (
                                        <div key={info.title}>{content}</div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card p-8 rounded-3xl">
                            <h3 className="text-sm lg:text-2xl md:text-xl font-bold text-yellow-500 mb-6">Know More</h3>
                            <div className="flex gap-4">
                                {socialLinks.map(({ icon: Icon, href, color, bgColor, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`group p-4 glass-card rounded-2xl text-gray-400 ${color} ${bgColor} transition-all duration-300`}
                                        aria-label={label}
                                    >
                                        <Icon className="text-2xl" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    // className="glass-card p-8 rounded-3xl lg:min-h-[calc(100vh-8rem)]"
                    >
                        <div className="glass-card p-8 rounded-3xl">
                            <h3 className="text-sm lg:text-2xl md:text-xl font-bold text-yellow-500 mb-6 flex items-center gap-3">
                                <FaPaperPlane className="text-purple-400" />
                                Send Message
                            </h3>

                            {/* Success Message */}
                            <AnimatePresence>
                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                        className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3"
                                    >
                                        <FaCheckCircle className="text-green-400 text-xl" />
                                        <div>
                                            <p className="text-green-400 font-semibold">Message Sent Successfully!</p>
                                            <p className="text-green-300 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                // className="space-y-6"
                                className="space-y-4 sm:space-y-5 md:space-y-6"

                            >
                                <input type="hidden" name="form-name" value="contact" />

                                <p className="hidden">
                                    <label>
                                        Don't fill this out if you're human: <input name="bot-field" />
                                    </label>
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your Name"
                                        // className="w-full px-6 py-4 glass rounded-2xl border border-white/10 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 text-teal-400 placeholder-gray-400 transition-all duration-300"
                                        className="w-full lg:h-12 px-4 py-3 sm:px-5 sm:py-4 glass rounded-xl md:rounded-2xl text-base sm:text-lg border border-white/10 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 text-teal-400 placeholder-gray-400 transition-all duration-300"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Your Email"
                                        className="lowercase-input w-full lg:h-12 px-4 py-3 sm:px-5 sm:py-4 glass rounded-xl md:rounded-2xl text-base sm:text-lg border border-white/10 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 text-teal-400 placeholder-gray-400 transition-all duration-300"
                                        // style={{ textTransform: "lowercase", "--placeholder-color": "inherit", }}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        placeholder="Subject"
                                        className="w-full lg:h-12 px-4 py-3 sm:px-5 sm:py-4 glass rounded-xl md:rounded-2xl text-base sm:text-lg border border-white/10 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 text-teal-400 placeholder-gray-400 transition-all duration-300"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <textarea
                                        name="message"
                                        required
                                        placeholder="Your Message"
                                        rows={6}
                                        className="w-full px-4 py-3 sm:px-5 sm:py-4 glass rounded-xl lg:rounded-2xl md:rounded-2xl text-base sm:text-lg border border-white/10 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 text-teal-400 placeholder-gray-400 resize-none transition-all duration-300"
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    viewport={{ once: true }}
                                    className={`w-full btn-primary flex items-center justify-center gap-3 py-4 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="text-lg" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
