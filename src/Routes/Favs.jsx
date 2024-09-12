import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContext } from 'react';
import { ContextGlobal } from "../utils/global.context";
import styles from '../styles/Favs.module.css'; 

const Favs = () => {
  const { state } = useContext(ContextGlobal); 
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className={state.theme === 'dark' ? styles.dark : styles.light}>
      <h1>Dentists Favs</h1>
      <div className={styles.cardGrid}>
        
        {favorites.map((favorite) => (
          <Card 
            key={favorite.id} 
            name={favorite.name} 
            username={favorite.username} 
            id={favorite.id} 
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;


