import { useState } from "react";
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notif, setNotif] = useState(""); 

  const Submit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!nom && !email) {
      setNotif("Entrez un nom et un email svp");
      return;
    }
    if (!message) {
      setNotif("Ecrivez un message");
      return;
    }

    setNotif("Envoi en cours...");

    try {
      const formData = new FormData(e.target); 
      const response = await fetch(process.env.REACT_APP_backUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.text();
      setNotif(data);
      setNom(""); setEmail(""); setMessage("");
    } catch (err) {
      console.error(err);
      setNotif("Une erreur est survenue lors de l'envoi.");
    }
  };

  return (
    <footer className={styles.footerSection} id='contact'>
      <div className={styles.cadre}>
        <div className={styles.contactGrille}>
          
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.titre}>On discute ?</h2>
            <p className={styles.sousTitre}>
              Si vous avez des questions, des propositions ou si vous souhaitez <br />
              simplement échanger, n'hésitez pas à me contacter.
            </p>
            
            <div className={styles.lienContact}>
              <motion.a 
                href="mailto:diabatevassiriki23@gmail.com" 
                className={styles.lien}
                whileHover={{ scale: 1.05 }}
              >
                <MdEmail className={styles.icon} /> E-mail
              </motion.a>
              <motion.a 
                href="https://wa.me/+225050030733" 
                className={styles.lien}
                whileHover={{ scale: 1.05 }}
              >
                <FaWhatsapp className={styles.icon} /> WhatsApp
              </motion.a>
            </div>
          </motion.div>

          <motion.form 
            className={styles.form}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={Submit}
          >
            <div className={styles.inputGroup}>
              <label>Nom</label>
              <input type="text" name="nom" value={nom} placeholder="Entrez votre nom" 
                className={styles.input} onChange={(e)=>setNom(e.target.value)} />
            </div>

            <div className={styles.inputGroup}>
              <label>E-mail</label>
              <input type="email" name="email" value={email} placeholder="Entrez votre adresse e-mail" 
                className={styles.input} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea name="message" value={message} placeholder="Écrivez votre message ici..." 
                className={styles.textarea} rows="5" onChange={(e)=>setMessage(e.target.value)} />
            </div>

            {/* Affichage de la notification */}
            {notif && <p className={styles.notification}>{notif}</p>}

            <motion.button 
              type="submit"
              className={styles.btnOk}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Envoyer le message
            </motion.button>
          </motion.form>
        </div>

        <motion.div className={styles.copyright}>
          <p>© janvier 2026, Diabaté Vassiriki</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;