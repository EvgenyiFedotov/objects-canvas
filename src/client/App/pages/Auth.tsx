import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PageContent from './components/PageContent';
import Form from './components/Form';
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

interface Props {
  userState: [any, Function];
};

export default (props: Props) => {
  const { userState } = props;
  const [user, setUser] = userState;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (user !== null) {
    return (
      <Redirect to="/chats" />
    );
  }

  return (
    <PageContent>
      <Form>
        <input
          placeholder="Login"
          value={login}
          onChange={onChange(setLogin)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange(setPassword)}
        />

        <button
          onClick={onClick({
            ...mehtods,
            setUser,
            setError,
          })({ login, password })}
        >
          Enter
        </button>

        <div className="page-auth__error">
          {error}
        </div>
      </Form>
    </PageContent>
  );
};
