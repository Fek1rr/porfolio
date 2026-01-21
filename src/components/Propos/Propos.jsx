import styles from './Propos.module.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import grand from "../../images/face.png";

const Propos = () => {
  const reseauxSociaux = [
    { nom: 'Linkedin', icone: <FaLinkedin />, lien: '#' },
    { nom: 'Facebook', icone: <FaFacebook />, lien: 'https://www.facebook.com/profile.php?id=100082283242119' },
    { nom: 'Instagram', icone: <FaInstagram />, lien: '#' },
  ];

  return (
    <section className={styles.section} id='propos'>
      <div className={styles.cadre}>
        <div className={styles.ligne}>
          
          {/* Bloc Biographie */}
          <motion.div 
            className={styles.bio}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.hey}>Salut, je suis</span>
            <h2 className={styles.nom}>DIABATÉ VASSIRIKI</h2>
            <p className={styles.description}>
              Je suis Etudiant en BTS Informatique Développeur d'Application (IDA).<br/>
              Actuellement, je suis une formation en tant que développeur fullstack chez <a href="https://www.wecode.ci/" target="_blank" rel="noopener noreferrer">Wecode</a>
            </p>
          </motion.div>

          {/* Bloc Photo */}
          <motion.div 
            className={styles.photoCadre}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.photoWrap}>
              <motion.div className={styles.imageCircle} whileHover={{ scale: 1.05 }}>
                <img src={grand} alt="Vassiriki" />
              </motion.div>
              <div className={`${styles.decor} ${styles.diamond}`}></div>
            </div>
          </motion.div>
        </div>

        {/* Grille des réseaux sociaux */}
        <div className={styles.social}>
          {reseauxSociaux.map((item, i) => (
            <motion.a target="_blank" rel="noopener noreferrer"
              href={item.lien} 
              key={item.nom} 
              className={styles.socialBtn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "var(--accent-primary)" }}
            >
              <span className={styles.icon}>{item.icone}</span>
              {item.nom}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Propos;