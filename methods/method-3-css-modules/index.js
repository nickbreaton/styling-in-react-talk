import React from 'react';
import styles from './index.css';

const App = ({ name }) => (
  <button className={styles.button}>
    {name}
  </button>
);

export default App;