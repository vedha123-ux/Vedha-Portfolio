import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Qualification from "./Components/Qualification";
import Services from "./Components/Service";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Navbar /> 
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skill /></section>
      <section id="qualification"><Qualification /></section>
      <section id="services"><Services /></section>
      <section id="Projects"><Projects /></section>
      <section id="Contact"><Contact/></section>
    </div>
  );
}

export default App;


