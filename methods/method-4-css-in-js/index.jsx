import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  color: #FF79C6;
  border: 0.2em solid #FF79C6;
  border-radius: 0.25em;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5em 1em;
  &:hover {
    background: #FF79C6;
    color: white;
  }
`;

const App = ({ name }) => (
  <Button>
    {name}
  </Button>
);

export default App;