import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className={styles.hero} id='acceuil'>
      {/* Cercles décoratifs animés en fond */}
      <motion.div 
        className={`${styles.shape} ${styles.circle1}`}
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className={`${styles.shape} ${styles.circle2}`}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div 
        className={styles.contenu}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span 
          className={styles.badge}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          DÉVELOPPEUR FULLSTACK
        </motion.span>
        <h1 className={styles.titre}>Diabaté Vassiriki</h1>
        <p className={styles.description}>
           De la conception à la réalisation, je construis mes bases en concevant des solutions qui respectent les bonnes 
           pratiques de sécurité. <br />
           Créons ensemble une présence en ligne.
        </p>
        <motion.a 
          href="#contact" 
          className={styles.Btn}
          whileHover={{ scale: 1.05, backgroundColor: "var(--accent-hover)" }}
          whileTap={{ scale: 0.95 }}
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          Me contacter
      </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;