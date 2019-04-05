import React, { useState, SyntheticEvent } from 'react';
import PageContent from './components/PageContent';
import Form from './components/Form';
import List from './chats/List';
import ChatsForm from './chats/Form';
import { onSubmit } from './chats/common';

interface Props {
  userState: [any, Function];
};

export default (props: Props) => {
  const { userState } = props;
  const [user] = userState;
  const chatsState = useState([]);
  const [chats] = chatsState;

  return (
    <PageContent>
      <div>
        Login: {user}
      </div>

      <List>
        {chats}
      </List>

      <Form>
        <ChatsForm onSubmit={onSubmit(chatsState)} />
      </Form>
    </PageContent>
  );
};
