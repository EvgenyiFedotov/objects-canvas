import { ListItem } from './List';

interface MethodsOnSubmit {
  generateKey: Function;
  tableChats: {
    set: Function,
  };
};

export const onSubmit =
  (methods: MethodsOnSubmit) =>
  (chatsState: [ListItem[], Function]) =>
  (nameChatState: [string, Function]) =>
  () => {
    const { generateKey, tableChats } = methods;
    const [chats, setChats] = chatsState;
    const [name, setName] = nameChatState;
    const link = generateKey();
    const chat = { link, name };

    tableChats.set(link, chat);

    console.log(tableChats);

    setName('');
    setChats([...chats, chat]);
  };
