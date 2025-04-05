import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0f0c29] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          
          {/* Bio Data & Resume Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 p-8 rounded-lg shadow-lg border-l-4 border-pink-500 hover:border-purple-500 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold">Vedha Dharshini R</h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              A **highly motivated** and **detail-oriented Web Developer & UI/UX Designer** with a passion for creating **visually stunning** and **highly functional** digital experiences. I specialize in designing **user-friendly interfaces** and building **scalable web applications** that enhance business efficiency and user engagement.
            </p>
            <p className="text-gray-300 mt-2">
              My expertise lies in **React.js, WordPress, Tailwind CSS, and Framer Motion**, enabling me to craft responsive, accessible, and performance-optimized websites that align with **modern industry standards**.
            </p>
            
            {/* Resume Download Button */}
            <a
              href="/Vedha_resume.pdf"
              download="Vedha_Dharshini_Resume.pdf"
              className="mt-6 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Download Resume 📄
            </a>
          </motion.div>

          {/* Experience, Internships, Projects Cards */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Years of Experience */}
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.6)" }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center border-t-4 border-pink-500 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-pink-500">2+</h3>
              <p className="text-gray-300">Years of Professional Experience</p>
            </motion.div>

            {/* Internships */}
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.6)" }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center border-t-4 border-pink-500 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-pink-500">3+</h3>
              <p className="text-gray-300">Internships & Industry Collaborations</p>
            </motion.div>

            {/* Projects */}
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.6)" }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center border-t-4 border-pink-500 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-pink-500">15+</h3>
              <p className="text-gray-300">Successful Projects Delivered</p>
            </motion.div>

            {/* Open to Work */}
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.6)" }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center border-t-4 border-pink-500 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold text-green-400">✔</h3>
              <p className="text-gray-300">Available for Freelance & Full-Time Roles</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
