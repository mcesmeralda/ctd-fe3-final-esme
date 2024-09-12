import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Card.module.css";

const Card = ({ name, username, id }) => {

  const toggleFav = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const isFavorite = favorites.some(fav => fav.id === id);

    if (isFavorite) {
     
      favorites = favorites.filter(fav => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      
     
      alert(`${name} has been removed from favorites.`);
    } else {
      
      const newFavorite = { id, name, username };
      favorites.push(newFavorite);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      
      
      alert(`${name} has been added to favorites!`);
    }
  };

  return (
    <div className={styles.card}>
      <img 
        src="/images/doctor.jpg" 
        alt="Doctor" 
        className={styles.cardImage}
        style={{ width: '100%', height: 'auto' }} 
      />
      <Link to={`/detail/${id}`} className={styles.detailLink}>
        <h3>{name}</h3>
      </Link>
      <p>@{username}</p>
      
      <button onClick={toggleFav} className={styles.favButton}>
        ⭐
      </button>
    </div>
  );
};

export default Card;

