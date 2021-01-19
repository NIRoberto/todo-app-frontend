import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import './index.css';

const Index = () => (
  <>
    <App />
  </>
);

ReactDom.render(<Index />, document.getElementById('app'));
