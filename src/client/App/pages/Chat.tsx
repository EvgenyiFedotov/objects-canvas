import React, { useState } from 'react';
import PageComponent from './components/PageContent';
import Form from './components/Form';
import Top from './chat/Top';
import Messages from './chat/Messages';
import ChatForm from './chat/Form';
import { PropsChat } from './chat/common';

export default (props: PropsChat) => {
  const { userState } = props;
  const [user] = userState;
  const messagesState = useState([]);
  const [messages] = messagesState;

  return (
    <PageComponent
      justify="space-between"
    >
      <Form>
        <Top {...props} />
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
