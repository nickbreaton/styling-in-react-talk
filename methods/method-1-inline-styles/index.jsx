import React from 'react';

const App = ({ name }) => (
  <button style={{
    background: 'transparent',
    color: '#FF79C6',
    border: '0.2em solid #FF79C6',
    borderRadius: '0.25em',
    fontSize: '2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '0.5em 1em',
  }}>
    {name}
  </button>
);

export default App;