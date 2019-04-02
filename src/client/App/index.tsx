import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';

import Auth from './pages/Auth';
import Chats from './pages/Chats';

export default () => {
  const userState = useState(null);
  const [user] = userState;

  return (
    <div className="app">
      <Router>
        <Route exact path="/" render={() => {
          if (user) {
            return (
              <Chats userState={userState} />
            );
          }

          return (
            <Auth userState={userState} />
          );
        }} />
      </Router>
    </div>
  );
};
