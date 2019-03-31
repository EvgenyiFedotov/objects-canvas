import React, { useState, SyntheticEvent } from 'react';
import {
  generateKeyByPassword,
  encrypt,
  decrypt
} from '../../../../core/crypto';
import axiosCreate from '../../../../core/axios-create';
import { openDB, methodsTable } from '../../../../core/idb';
import './styles.css';

interface OnClickParams {
  login: string,
  password: string,
  setError: Function,
};

const onChange = (set: Function) => (e: SyntheticEvent) => {
  const { target } = e;
  const { value } = target;

  set(value);
};

const onClick = (params: OnClickParams) => () => {
  const { login, password, setError } = params;
  const loginKey = generateKeyByPassword(login);
  const passwordKey = generateKeyByPassword(password);
  const users = methodsTable(openDB(), 'users');

  users.get(loginKey).then((result) => {
    if (result === undefined) {
      users.set(loginKey, passwordKey);
    } else if (result === passwordKey) {

      axiosCreate().get('/api/test').then((result) => {
        console.log(result);
      });

      setError('');
    } else {
      setError('Not correct password!');
    }
  });
};

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
          onClick={onClick({ login, password, setError })}
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
