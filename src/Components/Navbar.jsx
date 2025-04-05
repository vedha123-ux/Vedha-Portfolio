import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Qualification", path: "qualification" },
    { name: "Services", path: "services" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center px-8 py-3 rounded-full z-50 transition-all duration-300 shadow-lg ${
        scrolled ? "bg-black/80 backdrop-blur-lg border border-white/20" : "bg-white/10 backdrop-blur-md border border-white/20"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.path}
            smooth={true}
            duration={500}
            offset={-100} // Adjust based on navbar height
            className="text-white hover:text-pink-500 transition duration-300 cursor-pointer relative group"
          >
            {item.name}
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white absolute right-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 bg-black/90 rounded-lg p-4 flex flex-col space-y-3">
          {navItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.path}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-white text-center text-lg hover:text-pink-500 transition duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
