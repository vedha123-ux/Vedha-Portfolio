import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "I build fast, responsive, and riendly websites using modern frameworks like React.js and some other framework",
    icon: "🌐",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "I create visually appealing and user-friendly interfaces using Figma and Framer.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "WordPress Development",
    description: "I design and customize WordPress themes and plugins for scalable websites.",
    icon: "⚙️",
  },
  {
    "id": 4,
    "title": "Prompt Engineering",
    "description": "Mastering the art of crafting precise prompts to unlock AI’s full potential.",
    "icon": "🤖",
},

  {
    id: 5,
    title: "E-Commerce Development",
    description: "I develop high-performing e-commerce platforms with React JS.",
    icon: "🛒",
  },
  {
    "id": 6,
    "title": "Graphic Design",
    "description": "I am a creative graphic designer specializing in logo design and poster making, crafting visually stunning brand identities.",
    "icon": "🎨"
}

];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-[#0f0c29] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-12">My Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="relative group w-full h-[250px] bg-gray-900 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-pink-500 cursor-pointer"
            >
              {/* Front Side */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center group-hover:opacity-0 transition duration-500">
                <span className="text-5xl">{service.icon}</span>
                <h3 className="text-xl font-bold mt-4">{service.title}</h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-pink-500 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition duration-500 transform rotateY-180">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-white mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
