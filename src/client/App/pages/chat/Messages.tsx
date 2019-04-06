import React from 'react';

export interface Message {
  text: string;
};

export type MessagesList = Array<Message>;

interface Props {
  children: MessagesList;
};

const Messages = (props: Props) => {
  const { children } = props;

  return (
    <div className="chat-messages">
      s
    </div>
  );
};

export default Messages;
