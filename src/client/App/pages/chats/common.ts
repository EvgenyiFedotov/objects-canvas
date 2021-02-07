import { ListItem } from './List';
import uuidv5 from 'uuid/v5';

interface TableChats {
  get: Function;
  set: Function;
};

interface MethodsOnSubmit {
  generateKey: Function;
  tableChats: TableChats;
};

type UserState = [string, Function];

interface States {
  userState: UserState;
  chatsState: [ListItem[], Function];
};

export const onSubmit =
  (methods: MethodsOnSubmit) =>
    (states: States) =>
      (nameChatState: [string, Function]) =>
        () => {
          const { generateKey, tableChats } = methods;
          const { chatsState, userState } = states;
          const [user] = userState;
          const [chats, setChats] = chatsState;
          const [name, setName] = nameChatState;
          const link = uuidv5(generateKey(), uuidv5.URL);
          const chat = { link, name };

          tableChats.get(user).then((prevChats: Array<ListItem>) => {
            let nextChats = [];

            if (prevChats !== undefined) {
              nextChats = [...prevChats];
            }

            nextChats.push(chat);

            tableChats.set(user, nextChats).then(() => {
              setName('');
              setChats([...chats, chat]);
            });
          });
        };

export const getChats =
  (userState: UserState) =>
    async (tableChats: TableChats) => {
      const [user] = userState;
      const chats = await tableChats.get(user);

      return chats || [];
    };
