import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';

import Auth from './pages/Auth';
import Chats from './pages/Chats';
import Chat from './pages/Chat';

const renderByMatch = (Component: Function, props: Object) =>
  ({ match }) => {
    const { params } = match;

    return (<Component {...params} {...props} />);
  };

export default () => {
  const userState = useState(null);

  return (
    <div className="app">
      <Router>
        <Route exact path="/" render={() => <Auth userState={userState} />} />
        <Route exact path="/chats" render={() => <Chats userState={userState} />} />
        <Route exact path="/chat/:link" render={renderByMatch(Chat, {
          userState,
        })} />
      </Router>
    </div>
  );
};
