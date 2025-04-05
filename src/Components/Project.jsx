import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaFilter } from "react-icons/fa";

// Project Data
const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Frontend",
    github: "https://github.com/your-github",
  },
  {
    id: 2,
    title: "Travel Website Using React Js and PHP",
    category: "Full-Stack",
    github: "https://github.com/vedha123-ux/Travel-Website-using-Tailwind-css-and-React-js-and-php",
  },
  {
    id: 3,
    title: "PHP Dashboard",
    category: "Backend",
    github: "https://github.com/vedha123-ux/Post-Dashboard-using-Php/tree/main/Nutz%20interview",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered Projects
  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-[#0f0c29] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-pink-500"
      >
        My Projects
      </motion.h2>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mt-6">
        {["All", "Frontend", "Backend", "Full-Stack"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-md font-semibold ${
              selectedCategory === category
                ? "bg-pink-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            } transition`}
          >
            <FaFilter className="inline-block mr-2" />
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition text-center"
          >
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.category} Project</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition flex items-center space-x-2"
              >
                <FaCode size={20} />
                <span>View Code</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
