import React from 'react';
import styles from '../styles/Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.voteContainer}>
        <p className={styles.voteMessage}>VOTA POR ESMERALDA♥</p>
      </div>

     
      <div className={styles.bottomSection}> 
        <img src="/images/DH.png" alt="DH-logo" className={styles.logo} />

        <div className={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-facebook-dark.PNG" alt="Facebook" className={styles.socialIcon} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-tiktok-dark.PNG" alt="Tiktok" className={styles.socialIcon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-instagram-dark.PNG" alt="Instagram" className={styles.socialIcon} />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-whatsapp-dark.PNG" alt="Whatsapp" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;















