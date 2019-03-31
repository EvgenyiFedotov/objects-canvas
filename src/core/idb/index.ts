import { openDB as open } from 'idb';

export const openDB = () => open('secret-chat', 1, {
  upgrade: (db) => {
    db.createObjectStore('users');
  },
});

export const methodsTable = (db: Promise<any>, nameTable: string) => ({
  async get(key: string) {
    return (await db).get(nameTable, key);
  },
  async set(key: string, val: string) {
    return (await db).put(nameTable, val, key);
  },
  async delete(key: string) {
    return (await db).delete(nameTable, key);
  },
  async clear() {
    return (await db).clear(nameTable);
  },
  async keys() {
    return (await db).getAllKeys(nameTable);
  },
});
