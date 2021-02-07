import React, { useState, useEffect } from 'react';
import PageContent from './components/PageContent';
import Form from './components/Form';
import List from './chats/List';
import ChatsForm from './chats/Form';
import { onSubmit, getChats } from './chats/common';
import { generateKey } from './common/crypto';
import { tableChats } from './common/idb';

interface Props {
  userState: [any, Function];
};

const onSubmitMethods = onSubmit({
  generateKey,
  tableChats,
});

export default (props: Props) => {
  const { userState } = props;
  const [user] = userState;
  const chatsState = useState([]);
  const [chats, setChats] = chatsState;

  useEffect(() => {
    getChats(userState)(tableChats).then((readChats) => {
      setChats(readChats);
    })
  }, []);

  return (
    <PageContent
      justify="space-between"
    >
      <div>
        Login: {user}
      </div>

      <List>
        {chats}
      </List>

      <Form>
        <ChatsForm
          onSubmit={onSubmitMethods({
            userState,
            chatsState,
          })}
        />
      </Form>
    </PageContent>
  );
};
