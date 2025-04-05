import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-pink-500 drop-shadow-lg"
        >
          Contact Me
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg mt-2 text-gray-300"
        >
          Let's build something great together! 🚀
        </motion.p>

        <div className="flex flex-col md:flex-row gap-10 mt-10 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="flex-1 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white/20"
          >
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Get in Touch</h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-3"><FaEnvelope className="text-pink-500" /> <span className="hover:underline cursor-pointer">vedha.rajendran22004@gmail.com</span></p>
              <p className="flex items-center gap-3"><FaPhone className="text-pink-500" /> 9363295595</p>
              <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-pink-500" /> Sankari, Tamil Nadu, India</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit} 
            className="flex-1 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-white/20"
          >
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Send a Message</h3>
            
            <div className="mb-4">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Your Name" 
                className="w-full p-3 bg-transparent border border-pink-400 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="Your Email" 
                className="w-full p-3 bg-transparent border border-pink-400 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Your Message" 
                rows="4" 
                className="w-full p-3 bg-transparent border border-pink-400 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-pink-500 hover:bg-pink-600 transition p-3 rounded-md flex items-center justify-center gap-2 text-lg font-semibold shadow-lg"
            >
              Send Message <FaPaperPlane />
            </button>
          </motion.form>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/vedha-dharshini-545baa246" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 transition transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/vedha123-ux" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 transition transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="mailto:vedha.rajendran22004@gmail.com" className="text-2xl hover:text-pink-500 transition transform hover:scale-110">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} <span className="text-pink-500 font-semibold">Vedha Dharshini R.</span> All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
