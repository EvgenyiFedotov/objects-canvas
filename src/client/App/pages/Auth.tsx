import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { generateKeyByPassword } from './common/crypto';
import axiosCreate from './common/axios-create';
import { openDB, methodsTable } from './common/idb';
import { onChange, onClick } from './auth/common';
import './auth/styles.css';

const mehtods = {
  generateKeyByPassword,
  methodsTable,
  openDB,
  axiosCreate,
};

export default () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  if (isAuth) {
    return (
      <Redirect to={{
        pathname: '/chats',
      }} />
    );
  }

  return (
    <div className="page-auth">
      <div className="page-auth__form">
        <input
          className="page-auth__input"
          placeholder="Login"
          value={login}
          onChange={onChange(setLogin)}
        />

        <input
          className="page-auth__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange(setPassword)}
        />

        <button
          className="page-auth__button"
          onClick={onClick(mehtods)({
            login,
            password,
            setError,
            setIsAuth,
          })}
        >
          Enter
        </button>

        <div className="page-auth__error">
          {error}
        </div>
      </div>
    </div>
  );
};
