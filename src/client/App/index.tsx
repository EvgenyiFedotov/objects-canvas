import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';

import Auth from './pages/Auth';
import Chats from './pages/Chats';

export default () => {
  const userState = useState(null);

  return (
    <div className="app">
      <Router>
        <Route exact path="/" render={() => <Auth userState={userState} />} />
        <Route exact path="/chats" render={() => <Chats userState={userState} />} />
      </Router>
    </div>
  );
};
