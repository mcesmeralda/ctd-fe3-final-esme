import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../utils/global.context';
import styles from '../styles/Contact.module.css'; 

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div className={state.theme === 'dark' ? styles.dark : styles.light}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
