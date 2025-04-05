import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

const roles = ["UI/UX Designer", "WordPress Developer", "Frontend Developer", "Web Developer"];

const chatbotResponses = [
  { keywords: ["hello", "hi"], response: "Hello! How can I assist you today?" },
  { keywords: ["who are you"], response: "I am an AI chatbot created for Vedha Dharshini R's portfolio!" },
  { keywords: ["what do you do"], response: "I can answer your questions about Vedha's skills, projects, and more." },
  { keywords: ["your name"], response: "I am Vedha's AI Assistant!" },
  { keywords: ["skills", "expertise"], response: "Vedha is skilled in Web Development, UI/UX Design, and WordPress." },
  { keywords: ["about vedha", "who is vedha"], response: "Vedha Dharshini R is a Web Developer & UI/UX Designer with experience in frontend development." },
  { keywords: ["contact", "email", "linkedin"], response: "You can contact Vedha via Email or LinkedIn! Check the Contact section for details." },
  { keywords: ["projects"], response: "Vedha has completed over 15 projects in web development and UI/UX design!" },
  { keywords: ["internships", "offers"], response: "Vedha has received multiple internship offers and is open to new opportunities." },
  { keywords: ["experience"], response: "Vedha has over 2 years of experience in the field." },
  { keywords: ["freelancer", "freelancing"], response: "Yes! Vedha takes freelance projects for web development and UI/UX design." },
  { keywords: ["technologies", "tools"], response: "Vedha works with React.js, Tailwind CSS, WordPress, and more!" },
  { keywords: ["animations"], response: "Yes! Vedha specializes in frontend animations using Framer Motion and GSAP." },
  { keywords: ["portfolio"], response: "Check out the Portfolio section for Vedha's amazing projects!" },
  { keywords: ["resume", "cv"], response: "Yes! You can download Vedha's resume from the About section." },
  { keywords: ["available for work", "open to work"], response: "Yes! Vedha is open to work and collaboration opportunities." },
  { keywords: ["creator", "who made you"], response: "I was created by Vedha to make this portfolio more interactive!" },
  { keywords: ["thank you", "thanks"], response: "You're welcome! Have a great day!" },
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [messages, setMessages] = useState([{ text: "Hello! Ask me anything about Vedha.", sender: "bot" }]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatbotRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const generateResponse = (query) => {
    query = query.toLowerCase();
    for (const { keywords, response } of chatbotResponses) {
      if (keywords.some((keyword) => query.includes(keyword))) {
        return response;
      }
    }
    return "I'm not sure about that. Ask me something related to Vedha!";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    const botMessage = { text: generateResponse(input), sender: "bot" };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    speakResponse(botMessage.text);
    setInput("");

    setTimeout(() => {
      chatbotRef.current?.scrollTo({ top: chatbotRef.current.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  const speakResponse = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full relative">
          
          {/* Floating Profile Image */}
          <motion.img 
            src="/profile.png" 
            alt="Profile" 
            className="absolute top-10 right-10 w-[260px] h-[340px] object-cover rounded-2xl border-4 border-pink-500 shadow-lg"
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, type: "spring" }} 
          />

          {/* Hero Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center md:text-left"
          >
            <h1 className="text-white text-5xl md:text-6xl font-bold mt-4">
              I’m <span className="text-pink-500">Vedha Dharshini R</span>
            </h1>
            <h2 className="text-white text-3xl md:text-4xl font-semibold mt-2">
              A{" "}
              <motion.span 
                key={currentRole} 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-pink-500"
              >
                {roles[currentRole]}
              </motion.span>
            </h2>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <a href="mailto:vedha.rajendran22004@gmail.com" className="text-white text-2xl hover:text-pink-500 transition">
                <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/vedha-dharshini-545baa246" target="_blank" className="text-white text-2xl hover:text-pink-500 transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com/vedha123-ux" target="_blank" className="text-white text-2xl hover:text-pink-500 transition">
                <FaGithub />
              </a>
            </div>

            {/* Contact Me Button */}
            <a href="Contact.jsx" className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition">
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* Chatbot Button */}
      <button className="fixed bottom-5 right-5 bg-pink-500 text-white p-3 rounded-full shadow-lg text-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 bg-gray-900 text-white p-4 rounded-xl shadow-lg w-80">
          <h2 className="text-lg font-semibold flex items-center gap-2"><FaRobot className="text-pink-500" /> AI Chatbot</h2>

          {/* Chat Messages */}
          <div ref={chatbotRef} className="h-56 overflow-y-auto p-3 bg-gray-800 rounded-lg">
            {messages.map((msg, i) => (
              <div key={i} className={`my-2 p-2 rounded-lg ${msg.sender === "user" ? "bg-pink-500 ml-auto text-right" : "bg-gray-700"} w-fit max-w-xs`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="mt-3 flex items-center gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-2 bg-gray-700 text-white rounded-lg outline-none" placeholder="Ask something..." />
            <button onClick={sendMessage} className="p-2 bg-pink-500 text-white rounded-lg">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
