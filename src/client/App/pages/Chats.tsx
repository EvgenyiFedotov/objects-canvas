import React, { useState, SyntheticEvent } from 'react';
import PageContent from './components/PageContent';
import Form from './components/Form';
import List, { ListItem } from './chats/List';

interface Props {
  userState: [any, Function];
};

const onChange = (setNameChat: Function) =>
  (e: SyntheticEvent) => setNameChat(e.target.value);

const onClick = (chatsState: [ListItem[], Function]) =>
  (nameChatState: [string, Function]) => () => {
    const [chats, setChats] = chatsState;
    const [name, setName] = nameChatState;

    setName('');

    setChats([
      ...chats,
      { name },
    ]);
  };

export default (props: Props) => {
  const { userState } = props;
  const [user] = userState;
  const chatsState = useState([]);
  const [chats] = chatsState;
  const nameChatState = useState('');
  const [nameChat, setNameChat] = nameChatState;

  return (
    <PageContent>
      <div>
        Login: {user}
      </div>

      <List>
        {chats}
      </List>

      <Form>
        <input
          value={nameChat}
          onChange={onChange(setNameChat)}
        />

        <button onClick={onClick(chatsState)(nameChatState)}>
          Create chat
        </button>
      </Form>
    </PageContent>
  );
};
