import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import './index.css';
const Index = () => {
   return (
      <React.Fragment>
         <App />
      </React.Fragment>
   );
};

ReactDom.render(<Index />, document.getElementById('app'));
