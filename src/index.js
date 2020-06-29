import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import "./theme/freight.css";
import './theme/reset.css';
import './theme/index.css';
import App from './app';

ReactDOM.render(
  
    <Router>
      <App />
    </Router>,
  
  document.getElementById('root')
);


