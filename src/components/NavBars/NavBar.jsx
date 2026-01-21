import { useState } from 'react';
import styles from './NavBar.module.css';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  
  const menuOuvert = () => setMenu(!menu);
  const menuFermer = () => setMenu(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.cadre}>
        <div className={styles.logo}>
          <span className={styles.logoTexte}>DV</span>
        </div>

        <ul className={`${styles.navLien} ${menu ? styles.active : ''}`}>
          <li><a href="#acceuil" onClick={menuFermer}>Accueil</a></li>
          <li><a href="#projet" onClick={menuFermer}>Projets</a></li>
          <li><a href="#propos" onClick={menuFermer}>À propos</a></li>
        </ul>

        <div className={styles.actions}>
          <a href="#contact" className={styles.cnBtn}>Me contacter</a>
        </div>

        <div 
          className={`${styles.croix} ${menu ? styles.open : ''}`} 
          onClick={menuOuvert}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;