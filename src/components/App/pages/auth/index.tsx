import React, { useState, SyntheticEvent } from 'react';
import { generateKeyByPassword, encrypt, decrypt } from '../../../../core/crypto';
import './styles.css';

const onChange = (set: Function) => (e: SyntheticEvent) => {
  const { target } = e;
  const { value } = target;

  set(value);
};

const onClick = password => () => {
  const key = generateKeyByPassword(password);

  const encryptData = encrypt({ test: '123', test2: 3333 }, key);

  console.log('@onClick', key, encryptData);

  console.log(decrypt(encryptData, key));
};

export default () => {
  const [password, setPassword] = useState('');

  return (
    <div className="page-auth">
      <input
        placeholder="Login"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onChange(setPassword)}
      />

      <button onClick={onClick(password)}>
        Enter
      </button>
    </div>
  );
};
