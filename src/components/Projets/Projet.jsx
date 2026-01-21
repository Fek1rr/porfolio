import agias from "../../images/agias.jpg";
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    titre: "AGIAS INFOS",
    tags: ["React JS", "Node Express JS", "Groq", "PixelAI"],
    description: `Projet développé pour explorer la gestion serveur et l'utilisation IA (en qualité analyse de texte et générer un prompt) 
    dans  Node. Amélioration de niveau dans le traitement des flux RSS.`,
    image: agias,
    githhub: "https://github.com/Fek1rr/Agias",
    lien: "https://agias.onrender.com",
  }
];

const Projet = () => {
  return (
    <section className={styles.Section} id="projet">
      <div className={styles.cadre}>
        <p className={styles.sousTitre}>PROJETS</p>
        <h2 className={styles.titre}>Projets Récents</h2>

        <div className={styles.liste}>
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={styles.projetCadre}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.image}>
                <img src={project.image} alt={project.titre} />
              </div>
              
              <div className={styles.projetInfo}>
                <h3 className={styles.projetTitre}>{project.titre}</h3>
                <div className={styles.tagListe}>
                  {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <p className={styles.projetDesc}>{project.description}</p>
                <div className={styles.lien}>
                  <a href={project.githhub} className={styles.githubBtn} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                  <a href={project.lien} className={styles.liveLink} target="_blank" rel="noopener noreferrer">Voir en ligne <FaExternalLinkAlt size={12} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projet;