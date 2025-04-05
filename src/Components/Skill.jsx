import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skillsData = {
  Programming: [
    { name: "JavaScript", percent: 80 },
    { name: "Python", percent: 85 },
    { name: "C", percent: 70},
  ],
  Frontend: [
    { name: "React.js", percent: 95 },
    { name: "Figma", percent: 90 },
    { name: "HTML", percent: 85 },
  ],
  Backend: [
    { name: "Node.js", percent: 80 },
    { name: "PHP", percent: 75 },
    { name: "MongoDB", percent: 70 },
  ],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Programming");
  const [isRotating, setIsRotating] = useState(true);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let interval;
    if (isRotating) {
      interval = setInterval(() => {
        setRotation((prev) => prev + 1);
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isRotating]);

  const handleCategoryClick = (category, index) => {
    setSelectedCategory(category);
    setIsRotating(false); // Stop rotation on click
    setRotation(index * 120); // Snap to the selected category
  };

  return (
    <section id="skills" className="py-16 bg-[#0f0c29] text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-pink-500 mb-12">My Skills</h2>

        {/* Hexagon Container */}
        <div className="relative flex justify-center items-center h-64">
          <motion.div
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="relative w-48 h-48"
          >
            {/* Hexagon Shape with Category Names Inside */}
            <motion.div
              animate={{ rotate: isRotating ? 360 : rotation }}
              transition={{
                repeat: isRotating ? Infinity : 0,
                duration: 10,
                ease: "linear",
              }}
              className="absolute w-48 h-48 bg-pink-500 clip-hexagon flex flex-col justify-center items-center text-xl font-bold text-white shadow-lg cursor-pointer"
            >
              <div
                className="absolute top-3 cursor-pointer"
                onClick={() => handleCategoryClick("Programming", 0)}
              >
                Programming
              </div>
              <div
                className="absolute bottom-3 cursor-pointer"
                onClick={() => handleCategoryClick("Frontend", 1)}
              >
                Frontend
              </div>
              <div
                className="absolute left-3 cursor-pointer"
                onClick={() => handleCategoryClick("Backend", 2)}
              >
                Backend
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skill Details */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-pink-500">{selectedCategory} Skills</h3>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData[selectedCategory].map((skill, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-lg text-center">
                <h4 className="text-xl font-bold">{skill.name}</h4>
                <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
                  <div className="bg-pink-500 h-3 rounded-full" style={{ width: `${skill.percent}%` }}></div>
                </div>
                <span className="text-gray-300 text-sm mt-1">{skill.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Restart Rotation Button */}
        {!isRotating && (
          <button
            onClick={() => setIsRotating(true)}
            className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600 transition"
          >
            Restart Rotation
          </button>
        )}
      </div>
    </section>
  );
};

export default Skills;
