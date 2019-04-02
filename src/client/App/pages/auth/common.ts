import { SyntheticEvent } from 'react';

export interface OnClickMethods {
  generateKeyByPassword: Function;
  methodsTable: Function;
  openDB: Function;
  axiosCreate: Function;
  setError: Function;
  setUser: Function;
};

export interface OnClickParams {
  login: string;
  password: string;
};

export const onChange = (set: Function) =>
  (e: SyntheticEvent) => {
    const { target } = e;
    const { value } = target;

    set(value);
  };

const authUser = (methods: OnClickMethods) =>
  (params: OnClickParams) => {
    const {
      generateKeyByPassword,
      methodsTable,
      openDB,
      axiosCreate,
      setError,
      setUser,
    } = methods;
    const { login, password } = params;
    const passwordKey = generateKeyByPassword(password);
    const users = methodsTable(openDB(), 'users');

    users.get(login).then((result: string) => {
      const resInUndef = result === undefined;

      if (resInUndef || result === passwordKey) {
        if (resInUndef) {
          users.set(login, passwordKey);
        }

        axiosCreate().get('/api/test').then((result: any) => {
          console.log(result);
        });

        setError('');
        setUser(login);
      } else {
        setError('Not correct password!');
      }
    });
  };

export const onClick = (methods: OnClickMethods) =>
  (params: OnClickParams) => () => {
    const { login, password } = params;

    if (login && password) {
      authUser(methods)(params);
    }
  };
