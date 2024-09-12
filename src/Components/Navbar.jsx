import React, { useContext } from 'react';
import { ContextGlobal } from '../utils/global.context';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css'; 

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={state.theme === 'dark' ? styles.dark : styles.light}>
      <Link to="/" className={styles.logo}>
        <span className={styles.red}>D</span>
        <span className={styles.black}>h Odont</span>
      </Link>
      
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={handleThemeChange} className={styles.themeButton}>
          {state.theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


