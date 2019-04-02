import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';

import Auth from './pages/Auth';

export default () => (
  <div className="app">
    <Router>
      <Route exact path="/" component={Auth} />
    </Router>
  </div>
);
