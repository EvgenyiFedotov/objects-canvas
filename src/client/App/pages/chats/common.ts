import { ListItem } from './List';

export const onSubmit = (chatsState: [ListItem[], Function]) =>
  (nameChatState: [string, Function]) =>
  () => {
    const [chats, setChats] = chatsState;
    const [name, setName] = nameChatState;

    setName('');
    setChats([...chats, { name }]);
  };
