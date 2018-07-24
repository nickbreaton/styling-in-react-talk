import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  color: rgb(255,121,198);
  border: 0.2em solid currentColor;
  border-radius: 0.25em;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5em 1em;
  &:hover {
    background: rgb(255,121,198);
    color: white;
  }
`;

const App = ({ name }) => (
  <Button>
    {name}
  </Button>
);

export default App;