import React, { useState, SyntheticEvent } from 'react';
import { generateKeyByPassword } from './common/crypto';
import axiosCreate from './common/axios-create';
import { openDB, methodsTable } from './common/idb';
import { onChange, onClick } from './auth/common';
import './auth/styles.css';

export default () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
          onClick={onClick({
            generateKeyByPassword,
            methodsTable,
            openDB,
            axiosCreate,
          })({ login, password, setError })}
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
