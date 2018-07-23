import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './.demo-ui';

import Method1 from './methods/method-1-inline-styles';
import Method2 from './methods/method-2-plain-old-css';
import Method3 from './methods/method-3-css-modules';
import Method4 from './methods/method-4-css-in-js';

const App = () => (
  <Demo default="CSS in JS">
    <Method1 name="Inline Styles" />
    <Method2 name="Plain Old CSS" />
    <Method3 name="CSS Modules" />
    <Method4 name="CSS in JS" />
  </Demo>
);

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);