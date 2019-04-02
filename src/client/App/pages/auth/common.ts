import { SyntheticEvent } from 'react';

export interface OnClickMethods {
  generateKeyByPassword: Function;
  methodsTable: Function;
  openDB: Function;
  axiosCreate: Function;
};

export interface OnClickParams {
  login: string;
  password: string;
  setError: Function;
  setIsAuth: Function;
};

export const onChange = (set: Function) =>
  (e: SyntheticEvent) => {
    const { target } = e;
    const { value } = target;

    set(value);
  };

export const onClick = (methods: OnClickMethods) =>
  (params: OnClickParams) => () => {
    const {
      generateKeyByPassword,
      methodsTable,
      openDB,
      axiosCreate,
    } = methods;
    const {
      login,
      password,
      setError,
      setIsAuth,
    } = params;
    const passwordKey = generateKeyByPassword(password);
    const users = methodsTable(openDB(), 'users');

    users.get(login).then((result) => {
      const resInUndef = result === undefined;

      if (resInUndef || result === passwordKey) {
        if (resInUndef) {
          users.set(login, passwordKey);
        }

        axiosCreate().get('/api/test').then((result) => {
          console.log(result);
        });

        setError('');
        setIsAuth(true);
      } else {
        setError('Not correct password!');
      }
    });
  };
