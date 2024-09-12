// src/Routes/Detail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.detailContainer}>
      <h1 className={styles.title}>Detail Dentist</h1>
      <div className={styles.detailGrid}>
        <div className={styles.gridItem}><strong>Name:</strong></div>
        <div className={styles.gridItem}><strong>Email:</strong></div>
        <div className={styles.gridItem}><strong>Phone:</strong></div>
        <div className={styles.gridItem}><strong>Website:</strong></div>
        <div className={styles.gridItem}>{dentist.name}</div>
        <div className={styles.gridItem}>{dentist.email}</div>
        <div className={styles.gridItem}>{dentist.phone}</div> 
        <div className={styles.gridItem}>{dentist.website}</div>
      </div>
    </div>
  );
};

export default Detail;


