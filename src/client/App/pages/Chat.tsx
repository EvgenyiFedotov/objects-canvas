import React, { useState } from 'react';
import PageComponent from './components/PageContent';
import Form from './components/Form';
import Messages from './chat/Messages';

interface Props {
  link: string;
};

export default (props: Props) => {
  const { link } = props;
  const messagesState = useState([]);
  const [messages] = messagesState;

  return (
    <PageComponent
      justify="space-between"
    >
      <div className="page-chat">
        <button>Back</button>
        {link}
      </div>

      <Messages>
        {messages}
      </Messages>

      <Form>
        <input />
        <button>Send</button>
      </Form>
    </PageComponent>
  );
};
