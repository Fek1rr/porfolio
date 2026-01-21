import styles from './TechStack.module.css';
import { motion } from 'framer-motion';
import { SiHtml5, SiJavascript, SiReact, SiNodedotjs, SiPhp } from 'react-icons/si';

const techs = [
  { nom: 'HTML & CSS', icon: <SiHtml5 /> },
  { nom: 'JavaScript', icon: <SiJavascript /> },
  { nom: 'React', icon: <SiReact /> },
  { nom: 'Node.js', icon: <SiNodedotjs /> },
  { nom: 'Php', icon: <SiPhp /> },
];

const variante = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariante = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const TechStack = () => {
  return (
    <section className={styles.techSection}>
      <motion.div 
        className={styles.cadre}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variante}
      >
        <p className={styles.sousTitre}>COMPÉTENCES</p>
        <h2 className={styles.titre}>Technologies avec lesquelles je travaille</h2>
        
        <div className={styles.grid}>
          {techs.map((tech, index) => (
            <motion.div 
              key={index} 
              className={styles.techCard}
              variants={itemVariante}
              whileHover={{ y: -8, borderColor: "var(--accent-primary)", backgroundColor: "rgba(255,140,50,0.05)" }}
            >
              <div className={styles.icon}>{tech.icon}</div>
              <span className={styles.techNom}>{tech.nom}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;