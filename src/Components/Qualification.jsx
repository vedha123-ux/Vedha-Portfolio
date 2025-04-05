import React from "react";
import { motion } from "framer-motion";

const qualifications = [
  {
    id: 1,
    title: "Master of Software Systems",
    institution: "Kongu Engineering College",
    year: "2021 - 2026",
    description: "Focused on Programming Languages and Web technologies.",
  },
  {
    id: 2,
    title: "Higher Secondary Education",
    institution: "Royal International School",
    year: "2020 - 2021",
    description: "Graduated with distinction in Computer Science.",
  },
];

const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp Pvt Ltd",
    duration: "Jan 2024 - Mar 2024",
    description: "Developed interactive UI components and optimized user experience.",
  },
  {
    id: 2,
    title: "Web  Developer Intern",
    company: "Zidio Development.",
    duration: "Mar 2025 - May 2025",
    description: "Built an Mern Stack Application.",
  },
  {
    id: 3,
    title: "UI/UX Designer Intern",
    company: "CodSoft",
    duration: " Oct 2024- Oct 2024",
    description: "Designed modern UI/UX interfaces for mobile and web applications.",
  },
];

const Qualification = () => {
  return (
    <section id="qualification" className="py-16 bg-[#0f0c29] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-12">My Qualification</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Timeline for Education */}
          <div className="relative border-l-4 border-pink-500 pl-6">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {qualifications.map((item, index) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: index * 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "#ff007f" }}
                className="mb-8 bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-pink-500"
              >
                <h4 className="text-xl font-bold text-pink-500">{item.title}</h4>
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-gray-300">{item.year}</p>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right - Card-Based Internships */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Internships</h3>
            <div className="grid gap-6">
              {internships.map((intern, index) => (
                <motion.div
                  key={intern.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-lg border-l-4 border-pink-500 transition duration-300 hover:shadow-pink-500"
                >
                  <h4 className="text-xl font-bold text-pink-500">{intern.title}</h4>
                  <p className="text-gray-400">{intern.company}</p>
                  <p className="text-gray-300">{intern.duration}</p>
                  <p className="mt-2 text-gray-300">{intern.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
