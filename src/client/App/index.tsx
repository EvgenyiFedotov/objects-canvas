import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './styles.css';

import Auth from './pages/Auth';
import Chats from './pages/Chats';
import Chat from './pages/Chat';

type UserState = [string, Function];

const renderByUserState = (userState: UserState, render: Function) => {
  const [user] = userState;

  if (user === null) {
    return (params: { match: { path: string } }) => {
      const { match } = params;
      const { path } = match;

      if (path !== '/') {
        return (
          <Redirect to="/" />
        );
      } else {
        return render(params);
      }
    };
  }

  return render;
};

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
        <Route exact path="/" render={renderByUserState(userState,
          () => <Auth userState={userState} />
        )} />

        <Route exact path="/chats" render={renderByUserState(userState,
          () => <Chats userState={userState} />
        )} />

        <Route exact path="/chat/:link" render={renderByMatch(Chat, {
          userState,
        })} />
      </Router>
    </div>
  );
};
