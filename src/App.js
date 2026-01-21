import './App.css';
import Navbar from './components/NavBars/NavBar';
import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projets/Projet';
import Propos from './components//Propos/Propos';
import Contact from './components/Contact/Contact';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  // Optionnel : Barre de progression de lecture en haut de page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Propos />
      <Contact />
    </>
  );
}

export default App;