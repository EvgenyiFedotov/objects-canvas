import React, { useState } from 'react';
import PageComponent from './components/PageContent';
import Form from './components/Form';
import Messages from './chat/Messages';
import ChatForm from './chat/Form';

interface Props {
  link: string;
  userState: [string, Function];
};

export default (props: Props) => {
  const { link, userState } = props;
  const [user] = userState;
  const messagesState = useState([]);
  const [messages] = messagesState;

  return (
    <PageComponent
      justify="space-between"
    >
      <Form>
        <button>Back</button>
        {link}
      </Form>

      <Messages author={user}>
        {messages}
      </Messages>

      <Form>
        <ChatForm
          messagesState={messagesState}
          author={user}
        />
      </Form>
    </PageComponent>
  );
};
