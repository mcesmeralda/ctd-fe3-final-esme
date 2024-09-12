import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import styles from '../styles/Home.module.css'; 

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className={styles.home}>
      <h1>Home</h1>
      <div className={styles.cardGrid}>
        {users.map(user => (
          <Card 
            key={user.id} 
            name={user.name} 
            username={user.username} 
            id={user.id} 
          />
        ))}
      </div>
    </main>
 
    
   
  );
}

export default Home;
